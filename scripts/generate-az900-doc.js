import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const pPath = path.join(rootDir, 'Preguntas', 'AZ900_Preguntas.md');
const sPath = path.join(rootDir, 'Soluciones', 'AZ900_Soluciones.md');
const outPath = path.join(rootDir, 'AZ900_Preguntas_y_Respuestas.md');

const pContent = fs.readFileSync(pPath, 'utf8');
const sContent = fs.readFileSync(sPath, 'utf8');

// Parse solutions
const solutions = {};
let currentExam = null;
sContent.split(/\r?\n/).forEach(line => {
  const trimmed = line.trim();
  const examMatch = trimmed.match(/^###\s+(.+)/);
  if (examMatch) {
    currentExam = examMatch[1].trim();
    solutions[currentExam] = {};
    return;
  }
  const solMatch = trimmed.match(/^(\d+)\.\s+([A-E])/i);
  if (solMatch && currentExam) {
    solutions[currentExam][parseInt(solMatch[1])] = solMatch[2].toUpperCase();
  }
});

// Parse questions
const exams = [];
let currentExamObj = null;
let currentQuestion = null;

pContent.split(/\r?\n/).forEach(line => {
  const trimmed = line.trim();
  if (!trimmed) return;
  if (/^#{1,2}\s/.test(trimmed) && !/^###/.test(trimmed)) return;

  const examMatch = trimmed.match(/^###\s+(.+)/);
  if (examMatch) {
    if (currentQuestion && currentExamObj) {
      currentExamObj.questions.push(currentQuestion);
      currentQuestion = null;
    }
    const name = examMatch[1].trim();
    currentExamObj = { name, questions: [] };
    exams.push(currentExamObj);
    return;
  }

  const qMatch = trimmed.match(/^(\d+)\.\s+(.+)/);
  if (qMatch && currentExamObj && !trimmed.startsWith('-')) {
    if (currentQuestion) {
      currentExamObj.questions.push(currentQuestion);
    }
    currentQuestion = {
      number: parseInt(qMatch[1]),
      textEs: qMatch[2].trim(),
      textEn: null,
      options: []
    };
    return;
  }

  const enMatch = trimmed.match(/^\[EN\]\s*(.+)/i);
  if (enMatch && currentQuestion && currentQuestion.options.length === 0) {
    currentQuestion.textEn = enMatch[1].trim();
    return;
  }

  const optMatch = trimmed.match(/^(?:-\s*)?([A-E])\s*[\.\)]\s*(.+)/);
  if (optMatch && currentQuestion) {
    currentQuestion.options.push({
      key: optMatch[1].toUpperCase(),
      text: optMatch[2].trim()
    });
    return;
  }
});

if (currentQuestion && currentExamObj) {
  currentExamObj.questions.push(currentQuestion);
}

// Generate Markdown
let md = '\ufeff# 📘 Certificación Microsoft Azure Fundamentals (AZ-900) - Preguntas y Respuestas\n\n';
md += 'Documento recopilatorio completo con las **120 preguntas** de la certificación oficial **Microsoft Azure Fundamentals (AZ-900)**, organizadas por los 4 simulacros temáticos, incluyendo los enunciados bilingües (Español / Inglés), las 4 opciones de respuesta y la solución correcta claramente identificada.\n\n';
md += '---\n\n';
md += '## 📑 Índice de Contenidos\n\n';

exams.forEach(exam => {
  const slug = exam.name
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  md += `- [${exam.name} (${exam.questions.length} preguntas)](#${slug})\n`;
});
md += '\n---\n\n';

exams.forEach(exam => {
  const examSolutions = solutions[exam.name] || {};
  md += `## ${exam.name}\n\n`;

  exam.questions.forEach(q => {
    const solKey = examSolutions[q.number];
    const correctOpt = q.options.find(o => o.key === solKey);

    md += `### ${q.number}. ${q.textEs}\n\n`;
    if (q.textEn) {
      md += `> 🌐 **[EN]:** *${q.textEn}*\n\n`;
    }

    q.options.forEach(opt => {
      const isCorrect = opt.key === solKey;
      if (isCorrect) {
        md += `- **[${opt.key}] ${opt.text}** ✅ *(Respuesta Correcta)*\n`;
      } else {
        md += `- [${opt.key}] ${opt.text}\n`;
      }
    });

    md += '\n';
    if (correctOpt) {
      md += `**Solución:** **Opción ${solKey}** — *${correctOpt.text}*\n\n`;
    } else {
      md += `**Solución:** **Opción ${solKey || 'Pendiente'}**\n\n`;
    }
    md += '---\n\n';
  });
});

fs.writeFileSync(outPath, md, 'utf8');
console.log('✅ Archivo creado exitosamente en:', outPath);
console.log('Total exámenes:', exams.length);
console.log('Total preguntas:', exams.reduce((acc, e) => acc + e.questions.length, 0));
