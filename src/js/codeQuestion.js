import { icons } from './icons.js';

export const PYSPARK_CODE_QUESTION = {
  id: 'ipmd-code-fill-2026',
  type: 'code-fill',
  examName: 'Práctica Código PySpark (2026)',
  subjectId: 'ipmd',
  text: 'Completar el siguiente fragmento de código Python (PySpark) rellenando los 20 huecos correctamente:',
  gaps: [
    { id: 1, expected: 'read', acceptable: ['read'] },
    { id: 2, expected: '"header"', acceptable: ['"header"', "'header'", 'header', 'head', '"head"', "'head'"] },
    { id: 3, expected: '"inferSchema"', acceptable: ['"inferSchema"', "'inferSchema'", 'inferSchema'] },
    { id: 4, expected: '0, 900, 1800, 2400', acceptable: ['0, 900, 1800, 2400', '0,900,1800,2400', '[0, 900, 1800, 2400]', '[0,900,1800,2400]'] },
    { id: 5, expected: 'Bucketizer', acceptable: ['Bucketizer'] },
    { id: 6, expected: 'puntos_corte', acceptable: ['puntos_corte'] },
    { id: 7, expected: '"dep_time"', acceptable: ['"dep_time"', "'dep_time'", 'dep_time'] },
    { id: 8, expected: '"dep_dis"', acceptable: ['"dep_dis"', "'dep_dis'", 'dep_dis'] },
    { id: 9, expected: 'OneHotEncoder', acceptable: ['OneHotEncoder', 'OneHotEncoding'] },
    { id: 10, expected: '"dep_dis"', acceptable: ['"dep_dis"', "'dep_dis'", 'dep_dis'] },
    { id: 11, expected: '"dep_cod"', acceptable: ['"dep_cod"', "'dep_cod'", 'dep_cod'] },
    { id: 12, expected: 'VectorAssembler', acceptable: ['VectorAssembler'] },
    { id: 13, expected: '["dep_cod", "Distance"]', acceptable: ['["dep_cod", "Distance"]', "['dep_cod', 'Distance']", '["dep_cod","Distance"]', "['dep_cod','Distance']"] },
    { id: 14, expected: '"features"', acceptable: ['"features"', "'features'", 'features'] },
    { id: 15, expected: '"features"', acceptable: ['"features"', "'features'", 'features'] },
    { id: 16, expected: '"ArrDelay"', acceptable: ['"ArrDelay"', "'ArrDelay'", 'ArrDelay'] },
    { id: 17, expected: 'Pipeline', acceptable: ['Pipeline'] },
    { id: 18, expected: '[discretizador, codificador, colapsador, lr]', acceptable: ['[discretizador, codificador, colapsador, lr]', '[discretizador,codificador,colapsador,lr]'] },
    { id: 19, expected: 'pieza', acceptable: ['pieza'] },
    { id: 20, expected: 'fit', acceptable: ['fit'] }
  ],
  codeTemplate: `flights_df = spark.__GAP_1__\\
                  .option(__GAP_2__, "true")\\
                  .option(__GAP_3__, "true")\\
                  .csv("gs://contenedor/datos/flights.csv")

# Discretizar la columna dep_time en los intervalos [0, 900),  [900, 1800), [1800, 2400)
puntos_corte = [__GAP_4__]
discretizador = __GAP_5__(splits=__GAP_6__,
                                inputCol=__GAP_7__,
                                outputCol=__GAP_8__)

# Codificar con one hot la columna creada en el discretizador
codificador = __GAP_9__(inputCol=__GAP_10__,
                              outputCol=__GAP_11__)

#  Colapsar en columna de vectores la columna codificada con one hot y la columna Distance
colapsador = __GAP_12__(inputCols=__GAP_13__,
                             outputCol=__GAP_14__)

# Modelo de regresión lineal sin entrenar, para predecir ArrDelay
lr = LinearRegression(featuresCol=__GAP_15__, 
                      labelCol=__GAP_16__)

# Crear una pieza que una todo y entrenarla. Cuidado al orden de los stages
pieza = __GAP_17__(stages=__GAP_18__)
pieza_entrenada = __GAP_19__.__GAP_20__(flights_df)`
};

/**
 * Check if a gap answer is correct.
 */
export function checkGapAnswer(gap, userVal) {
  if (!userVal) return false;
  const clean = String(userVal).trim();
  return gap.acceptable.some(acc => acc.toLowerCase() === clean.toLowerCase());
}

/**
 * Render the interactive HTML for the code question during quiz taking.
 */
export function renderCodeQuestionInteractive(question, userAnswers = {}) {
  let codeHtml = question.codeTemplate;

  // Replace each __GAP_X__ with an input element
  for (const gap of question.gaps) {
    const val = userAnswers[gap.id] || '';
    const placeholder = `[${gap.id}]`;
    const inputHtml = `<input type="text" class="code-gap-input" data-gap="${gap.id}" id="gap-input-${gap.id}" value="${escapeHtml(val)}" placeholder="${placeholder}" autocomplete="off" spellcheck="false" />`;
    codeHtml = codeHtml.replace(`__GAP_${gap.id}__`, inputHtml);
  }

  return `
    <div class="code-question-container">
      <div class="code-question__info">
        <span class="code-question__badge">${icons.clipboard('ui-icon ui-icon--sm')} PySpark / Python</span>
        <span class="code-question__count">20 huecos a completar</span>
      </div>
      <div class="code-editor">
        <pre class="code-editor__pre"><code>${codeHtml}</code></pre>
      </div>
    </div>
  `;
}

/**
 * Render the review HTML for the code question in results view.
 */
export function renderCodeQuestionReview(question, userAnswers = {}) {
  let codeHtml = question.codeTemplate;
  let correctCount = 0;

  for (const gap of question.gaps) {
    const val = userAnswers[gap.id] || '';
    const isCorrect = checkGapAnswer(gap, val);
    if (isCorrect) correctCount++;

    const displayVal = val || '___';
    let badgeHtml = '';

    if (isCorrect) {
      badgeHtml = `<span class="code-gap-result code-gap-result--correct" title="Correcto">${escapeHtml(displayVal)} ${icons.check('ui-icon ui-icon--sm text--success')}</span>`;
    } else {
      badgeHtml = `<span class="code-gap-result code-gap-result--wrong" title="Tu respuesta: ${escapeHtml(displayVal)} | Esperado: ${escapeHtml(gap.expected)}">${escapeHtml(displayVal)} ${icons.xCircle('ui-icon ui-icon--sm text--error')} <span class="code-gap-expected font-mono">(${escapeHtml(gap.expected)})</span></span>`;
    }

    codeHtml = codeHtml.replace(`__GAP_${gap.id}__`, badgeHtml);
  }

  return {
    correctCount,
    totalGaps: question.gaps.length,
    html: `
      <div class="code-question-container code-question-container--review">
        <div class="code-question__info">
          <span class="code-question__badge">${icons.clipboard('ui-icon ui-icon--sm')} PySpark / Python</span>
          <span class="code-question__score ${correctCount === question.gaps.length ? 'text--success' : 'text--warning'}">
            ${correctCount}/${question.gaps.length} huecos correctos (${Math.round((correctCount / question.gaps.length) * 100)}%)
          </span>
        </div>
        <div class="code-editor code-editor--review">
          <pre class="code-editor__pre"><code>${codeHtml}</code></pre>
        </div>
      </div>
    `
  };
}

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
