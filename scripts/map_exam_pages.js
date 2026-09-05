import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const rawExamsText = fs.readFileSync(path.join(rootDir, 'Examenes', 'Ingenieria para el Procesado Masivo de Datos', '_IPMD_Examenes.txt'), 'utf-8');
const md2026 = fs.readFileSync(path.join(rootDir, 'Examenes', 'Ingenieria para el Procesado Masivo de Datos', 'IPMD_Examen_2026.md'), 'utf-8');

function normalize(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Split into pages with 1-based index
const rawPages = rawExamsText.split(/--- Page (\d+) ---/);
const pages = {};
for (let i = 1; i < rawPages.length; i += 2) {
  pages[parseInt(rawPages[i])] = rawPages[i+1];
}

// Let's identify the exam title active on each page
// We scan page by page looking for exam headers like "2022 – A – Ordinaria", "2023 – B– Ordinaria", etc.
const examHeadersOnPages = [];
for (let p = 1; p <= Object.keys(pages).length; p++) {
  const text = pages[p] || '';
  const headerMatches = text.match(/(20\d{2}\s*[–-]\s*[A-Z]?(?:\s*[–-]\s*(?:Ordinaria|Extraordinaria))?)/g);
  if (headerMatches) {
    examHeadersOnPages.push({ page: p, headers: headerMatches });
  }
}

console.log('Exam headers found across pages:');
examHeadersOnPages.forEach(h => console.log(`  Page ${h.page}:`, h.headers.join(' | ')));

// Map each page to its containing Exam
function getExamForPage(pageNum, isDevelopment = false) {
  // Let's search backwards from pageNum to find the closest exam header
  for (let p = pageNum; p >= 1; p--) {
    const text = pages[p] || '';
    // Look for lines like "2024 – E – Ordinaria" or "2021 – A"
    const m = text.match(/(20\d{2}\s*[–-]\s*[A-Z]?(?:\s*[–-]\s*(?:Ordinaria|Extraordinaria))?)/);
    if (m) {
      return m[1].replace(/\s+/g, ' ').trim();
    }
  }
  return 'Desconocido';
}

// Also check code exercises on pages 75 to 94
console.log('\nChecking code exercises in past exams (pages 74-94):');
for (let p = 74; p <= 94; p++) {
  const text = pages[p] || '';
  if (text.toLowerCase().includes('bucketizer') || text.toLowerCase().includes('pipeline') || text.toLowerCase().includes('linearregression') || text.toLowerCase().includes('vectorassembler') || text.toLowerCase().includes('pyspark')) {
    console.log(`  Page ${p} has PySpark/MLlib code exercise! Exam: ${getExamForPage(p)}`);
  }
}
