import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.resolve(__dirname, '..', 'Examenes', 'Ingenieria para el Procesado Masivo de Datos');

// Read extracted texts
const examText = fs.readFileSync(path.join(dataDir, '_IPMD_Examenes.txt'), 'utf-8');
const answersText = fs.readFileSync(path.join(dataDir, '_IPMD_RespuestasTests.txt'), 'utf-8');
const exam2026 = fs.readFileSync(path.join(dataDir, 'IPMD_Examen_2026.md'), 'utf-8');

// ==================== PARSE ANSWERS ====================
function parseAnswers(text) {
  const clean = text.replace(/--- Page \d+ ---/g, '').replace(/Respuestas Tests\s*/g, '');
  const answers = {};
  // Match exam headers and their answers
  const examPattern = /(20\d{2})\s*[–-]\s*([A-Z](?:\s*[–-]\s*\w+)?|)\s*/g;
  
  // Simpler approach: split by year patterns
  const lines = clean.replace(/\n/g, ' ').trim();
  // Find all exam sections
  const sections = lines.split(/(20\d{2}\s*(?:[–-]\s*[A-Z](?:\s*[–-]\s*\w+)?)?)/);
  
  for (let i = 1; i < sections.length; i += 2) {
    const header = sections[i].trim();
    const content = sections[i + 1] || '';
    
    // Extract answers like "1.B" or "1. B" 
    const answerMatches = content.match(/(\d+)\s*\.?\s*([A-D])/g);
    if (answerMatches && answerMatches.length > 0) {
      const examAnswers = {};
      for (const m of answerMatches) {
        const [, num, letter] = m.match(/(\d+)\s*\.?\s*([A-D])/);
        examAnswers[parseInt(num)] = letter;
      }
      if (Object.keys(examAnswers).length > 0) {
        answers[header] = examAnswers;
      }
    }
  }
  return answers;
}

// ==================== PARSE EXAM QUESTIONS ====================
function parseExamQuestions(text) {
  // Clean up text
  let clean = text
    .replace(/--- Page \d+ ---/g, ' ')
    .replace(/Ingeniería para el Procesado Masivo de Datos/g, ' ')
    .replace(/\r?\n/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // Find where tests end and development begins
  // Development sections typically start with "Ensayo" or "Desarrollo" or longer question texts
  // Tests section starts at the beginning
  // Look for the transition point - the development questions section
  
  const testExams = [];
  
  // Split by exam year headers
  const examHeaders = [];
  const headerRegex = /(20\d{2})\s*(?:[–-]\s*([A-Z]))?(?:\s*[–-]\s*(Ordinaria|Extraordinaria))?\s+(?=\d+[\.\s])/g;
  let match;
  
  while ((match = headerRegex.exec(clean)) !== null) {
    examHeaders.push({
      index: match.index,
      fullMatch: match[0].trim(),
      year: match[1],
      model: match[2] || '',
      type: match[3] || '',
    });
  }
  
  // Process each exam section
  for (let i = 0; i < examHeaders.length; i++) {
    const start = examHeaders[i].index + examHeaders[i].fullMatch.length;
    const end = (i + 1 < examHeaders.length) ? examHeaders[i + 1].index : clean.length;
    const section = clean.substring(start, end).trim();
    
    // Build exam name
    let examName = examHeaders[i].year;
    if (examHeaders[i].model) examName += ` Modelo ${examHeaders[i].model}`;
    if (examHeaders[i].type) examName += ` ${examHeaders[i].type}`;
    
    // Extract questions from this section
    const questions = extractQuestions(section);
    
    if (questions.length > 0) {
      // Check if these are test questions (have options A/B/C/D) vs development
      const hasOptions = questions.some(q => q.options && q.options.length >= 2);
      if (hasOptions) {
        testExams.push({ name: examName, questions });
      }
    }
  }
  
  return testExams;
}

function extractQuestions(sectionText) {
  const questions = [];
  
  // Split by question numbers: "1." "2." etc
  // Use regex to find question boundaries
  const parts = sectionText.split(/(?=(?:^|\s)(\d{1,2})\.\s{1,})/);
  
  // Better approach: use regex to match each question
  const qRegex = /(?:^|\s)(\d{1,2})\.\s{1,}([\s\S]*?)(?=(?:\s\d{1,2}\.\s{1,})|$)/g;
  let qMatch;
  
  while ((qMatch = qRegex.exec(sectionText)) !== null) {
    const num = parseInt(qMatch[1]);
    let body = qMatch[2].trim();
    
    // Extract options (A. B. C. D. or E. F. G. H.)
    const optionRegex = /([A-H])\.\s{1,}(.*?)(?=\s[A-H]\.\s{1,}|$)/g;
    const options = [];
    let optMatch;
    let questionText = body;
    
    // Find where the first option starts
    const firstOptMatch = body.match(/\s([A-H])\.\s{1,}/);
    if (firstOptMatch) {
      questionText = body.substring(0, firstOptMatch.index).trim();
      const optionsText = body.substring(firstOptMatch.index).trim();
      
      while ((optMatch = optionRegex.exec(optionsText)) !== null) {
        let key = optMatch[1];
        // Map E-H to A-D for 2022 C Extraordinaria
        if (['E', 'F', 'G', 'H'].includes(key)) {
          key = String.fromCharCode(key.charCodeAt(0) - 4); // E->A, F->B, G->C, H->D
        }
        options.push({ key, text: optMatch[2].trim() });
      }
    }
    
    if (options.length >= 2) {
      questions.push({ number: num, text: questionText, options });
    }
  }
  
  return questions;
}

// ==================== PARSE 2026 EXAM ====================
function parse2026Exam(mdText) {
  const questions = [];
  const testSection = mdText.split('## Hadoop Ensayo')[0];
  const qBlocks = testSection.split(/### Pregunta (\d+)/);
  
  for (let i = 1; i < qBlocks.length; i += 2) {
    const num = parseInt(qBlocks[i]);
    const body = qBlocks[i + 1].trim();
    const lines = body.split('\n').filter(l => l.trim());
    
    const questionText = lines[0].trim();
    const options = [];
    let correctAnswer = null;
    
    for (const line of lines.slice(1)) {
      const optMatch = line.match(/^([A-D])\.\s+(.*)/);
      const ansMatch = line.match(/Respuesta correcta:\s*([A-D])/);
      if (optMatch) {
        options.push({ key: optMatch[1], text: optMatch[2].trim() });
      } else if (ansMatch) {
        correctAnswer = ansMatch[1];
      }
    }
    
    if (options.length >= 2) {
      questions.push({ number: num, text: questionText, options, correctAnswer });
    }
  }
  
  return questions;
}

// ==================== MAIN ====================
function main() {
  console.log('Parsing answers...');
  const answers = parseAnswers(answersText);
  console.log(`Found answers for ${Object.keys(answers).length} exams:`);
  for (const [name, ans] of Object.entries(answers)) {
    console.log(`  ${name}: ${Object.keys(ans).length} answers`);
  }
  
  console.log('\nParsing exam questions...');
  const exams = parseExamQuestions(examText);
  console.log(`Found ${exams.length} test exams:`);
  for (const exam of exams) {
    console.log(`  ${exam.name}: ${exam.questions.length} questions`);
  }
  
  console.log('\nParsing 2026 exam...');
  const exam2026Questions = parse2026Exam(exam2026);
  console.log(`  2026: ${exam2026Questions.length} questions`);
  
  // Normalize answer keys for matching
  function normalizeKey(name) {
    return name.replace(/\s+/g, '').replace(/[–-]/g, '').replace(/Modelo/gi, '').toLowerCase();
  }
  
  const answerKeys = {};
  for (const [rawName, ans] of Object.entries(answers)) {
    answerKeys[normalizeKey(rawName)] = ans;
  }
  
  // Remove exams from 2025 (no answers available) and duplicates
  const seen = new Set();
  const filteredExams = exams.filter(e => {
    if (e.name.startsWith('2025')) return false; // No answers for 2025
    const key = e.name;
    if (seen.has(key)) return false; // Remove duplicates
    seen.add(key);
    return true;
  });
  
  // Generate IPMD_Preguntas.md and IPMD_Soluciones.md
  let preguntasMd = '\n# Preguntas de los exámenes\n\n## Asignatura "Ingeniería para el Procesado Masivo de Datos"\n\n';
  let solucionesMd = '\n# Soluciones de los exámenes\n\n## Asignatura "Ingeniería para el Procesado Masivo de Datos"\n\n';
  
  // Match answer key using normalized keys
  function findAnswerKey(examName) {
    const norm = normalizeKey(examName);
    if (answerKeys[norm]) return answerKeys[norm];
    // Fuzzy: find the key with the most overlap
    for (const [key, val] of Object.entries(answerKeys)) {
      if (norm.includes(key) || key.includes(norm)) return val;
    }
    return null;
  }
  
  let totalQuestions = 0;
  let totalWithAnswers = 0;
  
  // Process filtered exams
  for (const exam of filteredExams) {
    const ansKey = findAnswerKey(exam.name);
    
    preguntasMd += `### ${exam.name}\n\n`;
    solucionesMd += `### ${exam.name}\n\n`;
    
    for (const q of exam.questions) {
      preguntasMd += `${q.number}. ${q.text}\n`;
      for (const opt of q.options) {
        preguntasMd += `- ${opt.key}. ${opt.text}\n`;
      }
      preguntasMd += '\n';
      
      const answer = ansKey ? ansKey[q.number] : null;
      if (answer) {
        solucionesMd += `${q.number}. ${answer}\n`;
        totalWithAnswers++;
      } else {
        solucionesMd += `${q.number}. ???\n`;
      }
      totalQuestions++;
    }
    solucionesMd += '\n';
  }
  
  // Add 2026 exam
  preguntasMd += `### 2026 Marzo\n\n`;
  solucionesMd += `### 2026 Marzo\n\n`;
  for (const q of exam2026Questions) {
    preguntasMd += `${q.number}. ${q.text}\n`;
    for (const opt of q.options) {
      preguntasMd += `- ${opt.key}. ${opt.text}\n`;
    }
    preguntasMd += '\n';
    solucionesMd += `${q.number}. ${q.correctAnswer}\n`;
    totalQuestions++;
    totalWithAnswers++;
  }
  solucionesMd += '\n';
  
  // Write output files
  const preguntasPath = path.resolve(__dirname, '..', 'Preguntas', 'IPMD_Preguntas.md');
  const solucionesPath = path.resolve(__dirname, '..', 'Soluciones', 'IPMD_Soluciones.md');
  
  fs.writeFileSync(preguntasPath, preguntasMd, 'utf-8');
  fs.writeFileSync(solucionesPath, solucionesMd, 'utf-8');
  
  console.log(`\n✅ Generated:`);
  console.log(`  ${preguntasPath}`);
  console.log(`  ${solucionesPath}`);
  console.log(`  Total questions: ${totalQuestions}`);
  console.log(`  With answers: ${totalWithAnswers}`);
  console.log(`  Missing answers: ${totalQuestions - totalWithAnswers}`);
}

main();
