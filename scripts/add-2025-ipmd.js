import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const sourceFile = path.join(rootDir, 'Examenes', 'Ingenieria para el Procesado Masivo de Datos', 'IPMD_ExamenesTest_2025.md');
const preguntasFile = path.join(rootDir, 'Preguntas', 'IPMD_Preguntas.md');
const solucionesFile = path.join(rootDir, 'Soluciones', 'IPMD_Soluciones.md');

function mapLetter(l) {
  l = l.toUpperCase();
  if (['A','B','C','D'].includes(l)) return l;
  if (['E','F','G','H'].includes(l)) return String.fromCharCode(l.charCodeAt(0) - 4);
  if (['I','J','K','L'].includes(l)) return String.fromCharCode(l.charCodeAt(0) - 8);
  if (['M','N','O','P'].includes(l)) return String.fromCharCode(l.charCodeAt(0) - 12);
  return l;
}

function process2025Exams() {
  const content = fs.readFileSync(sourceFile, 'utf-8');
  const sections = content.split(/##\s+Modelo\s+([A-Z])/);
  
  let preguntasAdditions = '';
  let solucionesAdditions = '';
  let totalExams = 0;
  let totalQuestions = 0;

  for (let i = 1; i < sections.length; i += 2) {
    const model = sections[i];
    const body = sections[i+1];
    const examHeader = `2025 Modelo ${model}`;
    totalExams++;

    preguntasAdditions += `### ${examHeader}\n\n`;
    solucionesAdditions += `### ${examHeader}\n\n`;

    const qBlocks = body.split(/(?=\d+\.\s+)/).filter(b => b.trim());
    let qCount = 0;

    qBlocks.forEach(block => {
      const lines = block.trim().split('\n').map(l => l.trim()).filter(l => l);
      const qMatch = lines[0].match(/^(\d+)\.\s+(.*)/);
      if (!qMatch) return;
      
      const num = parseInt(qMatch[1]);
      let qText = qMatch[2];
      const opts = [];
      let ans = null;

      for (let j = 1; j < lines.length; j++) {
        const line = lines[j];
        const optMatch = line.match(/^([A-P])\.\s+(.*)/);
        const ansMatch = line.match(/Respuesta correcta:\s*([A-P])/i);
        if (optMatch) {
          opts.push({
            key: mapLetter(optMatch[1]),
            text: optMatch[2]
          });
        } else if (ansMatch) {
          ans = mapLetter(ansMatch[1]);
        }
      }

      if (opts.length >= 2 && ans) {
        qCount++;
        totalQuestions++;

        preguntasAdditions += `${num}. ${qText}\n`;
        opts.forEach(o => {
          preguntasAdditions += `- ${o.key}. ${o.text}\n`;
        });
        preguntasAdditions += '\n';

        solucionesAdditions += `${num}. ${ans}\n`;
      }
    });

    solucionesAdditions += '\n';
  }

  // Insert into Preguntas/IPMD_Preguntas.md before '### 2026 Marzo'
  let pContent = fs.readFileSync(preguntasFile, 'utf-8');
  if (!pContent.includes('### 2025 Modelo A')) {
    pContent = pContent.replace('### 2026 Marzo', `${preguntasAdditions}### 2026 Marzo`);
    fs.writeFileSync(preguntasFile, pContent, 'utf-8');
    console.log(`✅ Añadidas ${totalQuestions} preguntas de 2025 a ${preguntasFile}`);
  } else {
    console.log(`ℹ️  Las preguntas de 2025 ya existían en ${preguntasFile}`);
  }

  // Insert into Soluciones/IPMD_Soluciones.md before '### 2026 Marzo'
  let sContent = fs.readFileSync(solucionesFile, 'utf-8');
  if (!sContent.includes('### 2025 Modelo A')) {
    sContent = sContent.replace('### 2026 Marzo', `${solucionesAdditions}### 2026 Marzo`);
    fs.writeFileSync(solucionesFile, sContent, 'utf-8');
    console.log(`✅ Añadidas soluciones de 2025 a ${solucionesFile}`);
  } else {
    console.log(`ℹ️  Las soluciones de 2025 ya existían en ${solucionesFile}`);
  }
}

process2025Exams();
