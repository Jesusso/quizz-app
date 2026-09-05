import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const qData = JSON.parse(fs.readFileSync(path.join(rootDir, 'src', 'data', 'questions.json'), 'utf-8'));
const ipmd = qData.subjects.find(s => s.id === 'ipmd');
const rawExamsText = fs.readFileSync(path.join(rootDir, 'Examenes', 'Ingenieria para el Procesado Masivo de Datos', '_IPMD_Examenes.txt'), 'utf-8');

function normalize(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function wordSimilarity(s1, s2) {
  const words1 = new Set(normalize(s1).split(' ').filter(w => w.length > 2));
  const words2 = new Set(normalize(s2).split(' ').filter(w => w.length > 2));
  if (words1.size === 0 || words2.size === 0) return 0;
  let intersection = 0;
  for (const w of words1) {
    if (words2.has(w)) intersection++;
  }
  return (2 * intersection) / (words1.size + words2.size);
}

function areQuestionsMatching(q1, q2) {
  const n1 = normalize(q1.text);
  const n2 = normalize(q2.text);
  if (n1 === n2) return { match: true, sim: 1.0, type: 'EXACT' };
  if (n1.includes(n2) || n2.includes(n1)) return { match: true, sim: 0.95, type: 'SUBSTRING' };
  const sim = wordSimilarity(q1.text, q2.text);
  if (sim >= 0.70) return { match: true, sim, type: 'SIMILAR' };
  return { match: false, sim: 0 };
}

// Group exams by year and convocation
const years = ['2021', '2022', '2023', '2024', '2025'];

console.log('================================================================');
console.log('ANÁLISIS DE REPETICIÓN: ORDINARIA vs EXTRAORDINARIA EN EL MISMO AÑO');
console.log('================================================================\n');

for (const year of years) {
  const yearExams = ipmd.exams.filter(e => e.name.startsWith(year));
  const ordinariaExams = yearExams.filter(e => !e.name.toLowerCase().includes('extraordinaria'));
  const extraordinariaExams = yearExams.filter(e => e.name.toLowerCase().includes('extraordinaria'));

  console.log(`\n📅 ==================== AÑO ${year} ====================`);
  console.log(`Exámenes Convocatoria Ordinaria (${ordinariaExams.length} modelos):`);
  ordinariaExams.forEach(e => console.log(`  - ${e.name} (${e.questions.length} preguntas)`));

  console.log(`Exámenes Convocatoria Extraordinaria (${extraordinariaExams.length} modelos):`);
  extraordinariaExams.forEach(e => console.log(`  - ${e.name} (${e.questions.length} preguntas)`));

  if (extraordinariaExams.length === 0) {
    console.log(`ℹ️  No hay exámenes de convocatoria extraordinaria registrados para el año ${year}.\n`);
    continue;
  }

  // Pool of all questions in Ordinaria of that year
  const ordinariaPool = [];
  ordinariaExams.forEach(e => {
    e.questions.forEach(q => {
      ordinariaPool.push({
        examName: e.name,
        question: q
      });
    });
  });

  console.log(`\nTotal preguntas en pool Ordinaria ${year}: ${ordinariaPool.length}`);

  for (const extraExam of extraordinariaExams) {
    console.log(`\n------------------------------------------------------------`);
    console.log(`Análisis para: [${extraExam.name}] (${extraExam.questions.length} preguntas)`);
    console.log(`------------------------------------------------------------`);

    let repeatedCount = 0;
    const details = [];

    for (const extraQ of extraExam.questions) {
      const matches = [];
      for (const ordItem of ordinariaPool) {
        const check = areQuestionsMatching(extraQ, ordItem.question);
        if (check.match) {
          matches.push({
            ordExam: ordItem.examName,
            ordQNum: ordItem.question.number,
            ordQText: ordItem.question.text,
            sim: check.sim,
            type: check.type
          });
        }
      }

      if (matches.length > 0) {
        repeatedCount++;
        details.push({
          qNum: extraQ.number,
          qText: extraQ.text,
          repeated: true,
          matches
        });
      } else {
        details.push({
          qNum: extraQ.number,
          qText: extraQ.text,
          repeated: false,
          matches: []
        });
      }
    }

    const pct = ((repeatedCount / extraExam.questions.length) * 100).toFixed(1);
    console.log(`🎯 REPETIDAS: ${repeatedCount} de ${extraExam.questions.length} preguntas (${pct}%)`);
    console.log(`✨ NUEVAS: ${extraExam.questions.length - repeatedCount} preguntas (${(100 - pct).toFixed(1)}%)\n`);

    console.log(`Desglose pregunta a pregunta:`);
    details.forEach(d => {
      if (d.repeated) {
        console.log(`  ✅ P${d.qNum}: "${d.qText.substring(0, 50)}..."`);
        d.matches.forEach(m => {
          console.log(`     -> Apareció en [${m.ordExam}] Pregunta ${m.ordQNum}`);
        });
      } else {
        console.log(`  ❌ P${d.qNum} (Nueva): "${d.qText.substring(0, 50)}..."`);
      }
    });
  }
}
