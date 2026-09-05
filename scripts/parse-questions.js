import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const preguntasDir = path.join(rootDir, 'Preguntas');
const solucionesDir = path.join(rootDir, 'Soluciones');
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
    const exams = parseQuestions(preguntasContent, solutions, prefix.toLowerCase());

    const totalQuestions = exams.reduce((t, e) => t + e.questions.length, 0);

    subjects.push({
      id: prefix.toLowerCase(),
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

// ===== PARSE QUESTIONS =====
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
    // Only append if we have a current question and no options yet
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
