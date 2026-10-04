import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const preguntasDir = path.join(rootDir, 'Preguntas');
const solucionesDir = path.join(rootDir, 'Soluciones');
const examenesDir = path.join(rootDir, 'Examenes');
const az900NewPath = path.join(examenesDir, 'AZ900_Preguntas_y_Respuestas_ES.md');
const outputPath = path.join(rootDir, 'src', 'data', 'questions.json');

// ===== MAIN =====
function main() {
  const preguntaFiles = fs.readdirSync(preguntasDir).filter(f => f.endsWith('_Preguntas.md'));

  if (preguntaFiles.length === 0) {
    console.error('❌ No se encontraron archivos de preguntas en', preguntasDir);
    process.exit(1);
  }

  const subjects = [];

  for (const pFile of preguntaFiles) {
    const prefix = pFile.replace('_Preguntas.md', '');
    const subjectId = prefix.toLowerCase();

    // Check if it's AZ-900 and the new comprehensive document exists
    if (subjectId === 'az900' && fs.existsSync(az900NewPath)) {
      const az900Content = fs.readFileSync(az900NewPath, 'utf-8');
      const azExams = parseNewAZ900(az900Content, subjectId);
      const totalQuestions = azExams.reduce((t, e) => t + e.questions.length, 0);

      subjects.push({
        id: subjectId,
        name: 'Certificación Microsoft Azure Fundamentals (AZ-900)',
        exams: azExams,
      });

      console.log(`  📘 Certificación Microsoft Azure Fundamentals (AZ-900): ${azExams.length} módulos, ${totalQuestions} preguntas (Multiformato oficial)`);
      continue;
    }

    const sFile = `${prefix}_Soluciones.md`;
    const sFilePath = path.join(solucionesDir, sFile);

    if (!fs.existsSync(sFilePath)) {
      console.warn(`⚠️  No se encontró archivo de soluciones para ${pFile} (esperado: ${sFile})`);
      continue;
    }

    const preguntasContent = fs.readFileSync(path.join(preguntasDir, pFile), 'utf-8');
    const solucionesContent = fs.readFileSync(sFilePath, 'utf-8');

    // Extract subject name from ## header
    const subjectMatch = preguntasContent.match(/##\s*Asignatura\s*"(.+?)"/);
    const subjectName = subjectMatch ? subjectMatch[1] : prefix;

    // Parse solutions first
    const solutions = parseSolutions(solucionesContent);

    // Parse questions and cross-reference with solutions
    const exams = parseQuestions(preguntasContent, solutions, subjectId);

    const totalQuestions = exams.reduce((t, e) => t + e.questions.length, 0);

    subjects.push({
      id: subjectId,
      name: subjectName,
      exams,
    });

    console.log(`  📘 ${subjectName}: ${exams.length} exámenes, ${totalQuestions} preguntas`);
  }

  // Write output
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify({ subjects }, null, 2), 'utf-8');

  const total = subjects.reduce((t, s) => t + s.exams.reduce((t2, e) => t2 + e.questions.length, 0), 0);
  console.log(`\n✅ Generado questions.json: ${total} preguntas de ${subjects.length} asignatura(s)`);
}

// ===== PARSE NEW MULTI-FORMAT AZ-900 EXAM DOCUMENT =====
function parseNewAZ900(md, subjectId) {
  const lines = md.split(/\r?\n/);
  const moduleMap = new Map();
  let currentModuleName = 'Módulo 1: Conceptos de Nube';
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Detect module header: ## Módulo X: ...
    const modMatch = line.match(/^##\s+(Módulo\s+\d+:\s+[^#\n]+)/);
    if (modMatch) {
      currentModuleName = modMatch[1].trim();
      if (!moduleMap.has(currentModuleName)) {
        moduleMap.set(currentModuleName, []);
      }
      i++;
      continue;
    }

    // Detect question start: ### 1. `[Tipo]` Enunciado...
    const qMatch = line.match(/^###\s+(\d+)\.\s+`\[([^\]]+)\]`\s*(.*)/);
    if (qMatch) {
      if (!moduleMap.has(currentModuleName)) {
        moduleMap.set(currentModuleName, []);
      }

      const qNum = parseInt(qMatch[1]);
      const tag = qMatch[2].trim();
      let qText = qMatch[3].trim();

      i++;
      // Collect multi-line question text until options or details
      while (i < lines.length && 
             !lines[i].startsWith('- [') && 
             !lines[i].startsWith('|') && 
             !lines[i].match(/^\d+\.\s+\*/) && 
             !lines[i].startsWith('<details>') && 
             !lines[i].startsWith('---') &&
             !lines[i].startsWith('###')) {
        if (lines[i].trim()) {
          qText += '\n' + lines[i].trim();
        }
        i++;
      }

      // Collect question body lines until <details>
      const bodyLines = [];
      while (i < lines.length && !lines[i].startsWith('<details>') && !lines[i].startsWith('---') && !lines[i].startsWith('###')) {
        bodyLines.push(lines[i]);
        i++;
      }

      // Collect details block (solution, explanation, discards)
      const detailsLines = [];
      if (i < lines.length && lines[i].startsWith('<details>')) {
        while (i < lines.length && !lines[i].startsWith('</details>')) {
          detailsLines.push(lines[i]);
          i++;
        }
        if (i < lines.length && lines[i].startsWith('</details>')) {
          detailsLines.push(lines[i]);
          i++;
        }
      }

      const detailsText = detailsLines.join('\n');

      // Extract explanation and discards
      const expMatch = detailsText.match(/\*\*Explicación:\*\*\s*([\s\S]*?)(?=\*\*Descartes:\*\*|<\/details>|$)/i);
      const explanation = expMatch ? expMatch[1].trim() : '';

      const discMatch = detailsText.match(/\*\*Descartes:\*\*\s*([\s\S]*?)(?=<\/details>|$)/i);
      const discards = discMatch ? discMatch[1].trim() : '';

      const modNumberMatch = currentModuleName.match(/Módulo\s+(\d+)/i);
      const modNum = modNumberMatch ? modNumberMatch[1] : '1';

      // Determine format and parse accordingly
      let qObj = {
        id: `${subjectId}_m${modNum}_${qNum}`,
        number: qNum,
        module: currentModuleName,
        tag: tag,
        text: qText,
        textEn: null,
        explanation,
        discards,
      };

      if (tag === 'Serie Sí / No (Verdadero / Falso)') {
        qObj.format = 'yesno';
        qObj.type = 'yesno';
        const statements = [];
        bodyLines.forEach(bl => {
          const stmMatch = bl.trim().match(/^(\d+)\.\s*\*(.*?)\*/);
          if (stmMatch) {
            statements.push({
              id: parseInt(stmMatch[1]),
              text: stmMatch[2].trim(),
            });
          }
        });
        statements.forEach(st => {
          const solM = detailsText.match(new RegExp(`Afirmación\\s+${st.id}:\\s*\\*\\*(Sí|No)\\*\\*`, 'i'));
          st.correct = solM ? solM[1] : '';
        });
        qObj.statements = statements;
      } else if (tag === 'Arrastrar y Soltar / Emparejamiento') {
        qObj.format = 'matching';
        qObj.type = 'matching';
        const tableLines = bodyLines.filter(bl => bl.trim().startsWith('|'));
        const pairs = [];
        const targets = [];

        tableLines.forEach(tl => {
          const parts = tl.split('|').map(p => p.trim()).filter(Boolean);
          if (parts.length >= 3 && parts[0].includes('**') && parts[1].match(/\*\*[A-E]\*\*/)) {
            const leftRaw = parts[0].replace(/\*\*/g, '').trim();
            const leftM = leftRaw.match(/^(\d+)\.\s*(.*)/);
            const targetKey = parts[1].replace(/\*\*/g, '').trim();
            const targetText = parts[2].trim();
            if (leftM) {
              pairs.push({
                num: parseInt(leftM[1]),
                left: leftM[2].trim(),
              });
            }
            targets.push({
              key: targetKey,
              text: targetText,
            });
          } else if (parts.length >= 2 && parts[0].includes('**') && parts[1] === '?') {
            const leftRaw = parts[0].replace(/\*\*/g, '').trim();
            const leftM = leftRaw.match(/^(\d+)\.\s*(.*)/);
            if (leftM) {
              pairs.push({
                num: parseInt(leftM[1]),
                left: leftM[2].trim(),
              });
            }
          }
        });

        pairs.forEach(p => {
          const matchSol = detailsText.match(new RegExp(`\\*\\*${p.num}\\s*[➔\\->]+\\s*([A-E])\\*\\*`, 'i'));
          p.correctKey = matchSol ? matchSol[1].toUpperCase() : '';
        });

        if (targets.length === 0) {
          const optMatch = qText.match(/\*\*A\s*\(([^)]+)\)\*\*\s*o\s*\*\*B\s*\(([^)]+)\)\*\*/i);
          if (optMatch) {
            targets.push({ key: 'A', text: optMatch[1].trim() });
            targets.push({ key: 'B', text: optMatch[2].trim() });
          }
        }

        qObj.pairs = pairs;
        qObj.targets = targets;
      } else {
        const options = [];
        bodyLines.forEach(bl => {
          const optM = bl.trim().match(/^-\s*\[([A-E])\]\s*(.+)/);
          if (optM) {
            options.push({
              key: optM[1].toUpperCase(),
              text: optM[2].trim(),
              textEn: null,
            });
          }
        });

        const isMulti = tag === 'Selección Múltiple' || 
                        qText.includes('Seleccione DOS') || 
                        qText.includes('Seleccione TRES') || 
                        detailsText.includes('Respuestas correctas:');

        if (isMulti) {
          qObj.format = 'multi';
          qObj.type = 'multi';
          let reqCount = 2;
          if (qText.includes('TRES')) reqCount = 3;
          qObj.requiredCount = reqCount;
          const ansMatch = detailsText.match(/\*\*Respuestas correctas:\s*([^*]+)\*\*/i);
          const correctKeys = [];
          if (ansMatch) {
            const raw = ansMatch[1];
            const letters = raw.match(/[A-E]/g);
            if (letters) correctKeys.push(...letters);
          }
          qObj.options = options;
          qObj.correctAnswers = [...new Set(correctKeys)];
          qObj.correctAnswer = qObj.correctAnswers.join(', ');
        } else {
          qObj.format = 'single';
          qObj.type = 'single';
          const ansMatch = detailsText.match(/\*\*Respuesta correcta:\s*([A-E])\*\*/i);
          qObj.correctAnswer = ansMatch ? ansMatch[1].toUpperCase() : '';
          qObj.options = options;
        }
      }

      moduleMap.get(currentModuleName).push(qObj);
      continue;
    }

    i++;
  }

  // Convert map to exam objects
  const exams = [];
  let modIndex = 1;
  for (const [modName, questions] of moduleMap.entries()) {
    exams.push({
      id: `${subjectId}_modulo_${modIndex}`,
      name: `${modName} (${questions.length} preguntas)`,
      year: 2026,
      questions,
    });
    modIndex++;
  }

  return exams;
}

// ===== PARSE SOLUTIONS =====
function parseSolutions(content) {
  const solutions = {};
  let currentExamId = null;
  const lines = content.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    // Exam header: ### 2020 Modelo B
    const examMatch = trimmed.match(/^###\s+(.+)/);
    if (examMatch) {
      currentExamId = slugify(examMatch[1].trim());
      solutions[currentExamId] = {};
      continue;
    }

    // Solution line: 1. A  or  1. 3
    const solMatch = trimmed.match(/^(\d+)\.\s+(.+)/);
    if (solMatch && currentExamId) {
      const num = parseInt(solMatch[1]);
      solutions[currentExamId][num] = solMatch[2].trim();
    }
  }

  return solutions;
}

// ===== PARSE QUESTIONS (LEGACY FORMAT) =====
function parseQuestions(content, solutions, subjectId) {
  const exams = [];
  let currentExam = null;
  let currentQuestion = null;
  let currentOptions = [];
  const lines = content.split(/\r?\n/);

  function saveCurrentQuestion() {
    if (currentQuestion && currentExam) {
      currentExam.questions.push({
        number: currentQuestion.number,
        text: currentQuestion.text.trim(),
        textEn: currentQuestion.textEn ? currentQuestion.textEn.trim() : null,
        options: [...currentOptions],
      });
    }
    currentQuestion = null;
    currentOptions = [];
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines
    if (!trimmed) continue;

    // Skip top-level headers (# and ##)
    if (/^#{1,2}\s/.test(trimmed) && !/^###/.test(trimmed)) continue;

    // Exam header: ### 2020 Modelo B
    const examMatch = trimmed.match(/^###\s+(.+)/);
    if (examMatch) {
      saveCurrentQuestion();
      const examName = examMatch[1].trim();
      const examId = slugify(examName);
      currentExam = {
        id: examId,
        name: examName,
        year: parseInt(examName.match(/\d{4}/)?.[0] || '0'),
        questions: [],
      };
      exams.push(currentExam);
      continue;
    }

    // Question start: 1. Question text here
    const questionMatch = trimmed.match(/^(\d+)\.\s+(.+)/);
    if (questionMatch && currentExam && !trimmed.startsWith('-')) {
      saveCurrentQuestion();
      currentQuestion = {
        number: parseInt(questionMatch[1]),
        text: questionMatch[2].trim(),
        textEn: null,
      };
      continue;
    }

    // Check for English translation line: [EN] English question text
    const enMatch = trimmed.match(/^\[EN\]\s*(.+)/i);
    if (enMatch && currentQuestion && currentOptions.length === 0) {
      currentQuestion.textEn = enMatch[1].trim();
      continue;
    }

    // Option line with letter: - A. text  or  - A.text  or  A. text
    const letterOption = trimmed.match(/^(?:-\s*)?([A-E])\s*[\.\)]\s*(.+)/);
    if (letterOption && currentQuestion) {
      const fullText = letterOption[2].trim();
      const parts = fullText.split('||');
      const textEs = parts[0].trim();
      const textEn = parts.length > 1 ? parts[1].trim() : null;

      currentOptions.push({
        key: letterOption[1].toUpperCase(),
        text: textEs,
        textEn: textEn,
      });
      continue;
    }

    // Option line with number: - 1. text  or  - 1.text  or  - 3 .text
    const numberOption = trimmed.match(/^-\s*(\d)\s*[\.\)]\s*(.+)/);
    if (numberOption && currentQuestion) {
      const fullText = numberOption[2].trim();
      const parts = fullText.split('||');
      const textEs = parts[0].trim();
      const textEn = parts.length > 1 ? parts[1].trim() : null;

      currentOptions.push({
        key: numberOption[1],
        text: textEs,
        textEn: textEn,
      });
      continue;
    }

    // Additional text lines for multi-line questions
    if (currentQuestion && currentOptions.length === 0 && trimmed) {
      if (currentQuestion.textEn) {
        currentQuestion.textEn += '\n' + trimmed;
      } else {
        currentQuestion.text += '\n' + trimmed;
      }
    }
  }

  // Save the last question
  saveCurrentQuestion();

  // Assign correct answers from solutions and generate IDs
  for (const exam of exams) {
    const examSolutions = solutions[exam.id];
    if (!examSolutions) {
      console.warn(`  ⚠️  Sin soluciones para examen: ${exam.name} (id: ${exam.id})`);
    }

    for (const q of exam.questions) {
      // Assign correct answer
      if (examSolutions && examSolutions[q.number] !== undefined) {
        q.correctAnswer = examSolutions[q.number];
      } else {
        console.warn(`  ⚠️  Sin solución para pregunta ${q.number} del examen ${exam.name}`);
        q.correctAnswer = null;
      }

      // Generate unique ID
      q.id = `${subjectId}_${exam.id}_${q.number}`;
    }
  }

  return exams;
}

// ===== UTILS =====
function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Run
console.log('🔍 Parseando archivos de preguntas...\n');
main();
