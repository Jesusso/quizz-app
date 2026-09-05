import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pdfDir = path.resolve(__dirname, '..', 'Examenes', 'Herramientas de visualizacion');
const outputDir = path.resolve(__dirname, '..', 'Examenes', 'Herramientas de visualizacion', '_extracted');

async function extractText(filePath) {
  const data = new Uint8Array(fs.readFileSync(filePath));
  const doc = await getDocument({ data }).promise;
  const pages = [];

  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const text = content.items.map(item => item.str).join(' ');
    pages.push(`--- Page ${i} ---\n${text}`);
  }

  return pages.join('\n\n');
}

async function main() {
  fs.mkdirSync(outputDir, { recursive: true });

  const pdfFiles = fs.readdirSync(pdfDir).filter(f => f.endsWith('.pdf'));
  console.log(`Found ${pdfFiles.length} PDF files\n`);

  for (const file of pdfFiles) {
    const filePath = path.join(pdfDir, file);
    const outputFile = path.join(outputDir, file.replace('.pdf', '.txt'));

    try {
      const text = await extractText(filePath);
      fs.writeFileSync(outputFile, text, 'utf-8');
      console.log(`✅ ${file} → ${text.length} chars`);
    } catch (err) {
      console.error(`❌ ${file}: ${err.message}`);
    }
  }

  console.log(`\nDone! Files saved to: ${outputDir}`);
}

main();
