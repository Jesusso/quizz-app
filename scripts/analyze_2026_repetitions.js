import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const md2026 = fs.readFileSync(path.join(rootDir, 'Examenes', 'Ingenieria para el Procesado Masivo de Datos', 'IPMD_Examen_2026.md'), 'utf-8');
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

// Let's inspect each question of 2026 individually against rawExamsText
const questions2026 = [
  { num: 1, text: "Sobre cómo almacena HDFS los archivos más pequeños que el tamaño de bloque, seleccione la respuesta correcta" },
  { num: 2, text: "¿Cuál es el propósito del DAG en Spark?" },
  { num: 3, text: "¿Qué caso de uso NO está indicado para Hive?" },
  { num: 4, text: "Entre los servicios big data que ofrecen las plataformas de cloud computing estudiadas (eliija la respuesta correcta)" },
  { num: 5, text: "En HDFS, ¿qué fallo es menos problemático?" },
  { num: 6, text: "¿Cuál de estas afirmaciones es cierta respecto a Spark Structured Streaming?" },
  { num: 7, text: "Dado un grupo de consumidores de Kafka suscritos a un topic con 3 particiones" },
  { num: 8, text: "Los servicios de almacenamiento proporcionados por las plataformas de cloud computing estudiadas" },
  { num: 9, text: "La librería Structured Streaming de Spark:" },
  { num: 10, text: "En una plataforma de Cloud Computing podemos..." },
  { num: 11, text: "En Spark, si no cacheamos un DataFrame que utilizaremos en varias operaciones independientes" },
  { num: 12, text: "La herramienta Dataproc de Google Cloud..." },
  { num: 13, text: "Uno de los principales problemas de los RDD es que..." },
  { num: 14, text: "El módulo Spark MLlib permite:" },
  { num: 15, text: "Elija la respuesta INCORRECTA sobre Impala:" },
  // Essay questions
  { num: 16, text: "Se dispone del histórico de calificaciones de todas las actividades de evaluación" },
  { num: 17, text: "Imagine que usted tiene un perfil de desarrollador de software empresarial. Está diseñando una aplicación que, en un momento dado, requiere que la voz del usuario sea transcrita a texto" },
  { num: 18, text: "Explicar el concepto de shuffle de datos en un cluster de ordenadores" },
  { num: 19, text: "Explicar en menos de 5 líneas dos casos uso CONCRETOS de ajuste de un modelo predictivo" },
  { num: 20, text: "Acaba de crear su propia empresa orientada al procesamiento de datos de marketing de empresas de comercio online" },
  // Code question
  { num: 21, text: "flights_df = spark" }
];

// Split rawExamsText into pages or exam sections to identify which exam contains which text
const pages = rawExamsText.split(/--- Page \d+ ---/);

console.log(`Analyzing ${questions2026.length} questions across ${pages.length} pages of past exams...\n`);

for (const q of questions2026) {
  const normQ = normalize(q.text).substring(0, 45);
  const foundPages = [];
  
  pages.forEach((pageText, pageIdx) => {
    const normPage = normalize(pageText);
    if (normPage.includes(normQ)) {
      // Find which exam header is on or before this page
      foundPages.push(pageIdx + 1);
    }
  });

  console.log(`P${q.num}: "${q.text.substring(0, 50)}..." -> Found on pages: ${foundPages.join(', ') || 'NONE'}`);
}
