/**
 * az900Questions.js
 * Specialized renderers and interactive handlers for multi-format AZ-900 questions:
 * - Selección Múltiple (multi-select)
 * - Serie Sí / No (Verdadero / Falso)
 * - Arrastrar y Soltar / Emparejamiento
 * - Escenario Empresarial (Business Case Badging)
 */

import { icons } from './icons.js';

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Returns formatted HTML badges for question categories & formats
 */
export function getQuestionTypeBadge(q) {
  const badges = [];

  if (q.module) {
    badges.push(`<span class="quiz__question-badge quiz__question-badge--module">${escapeHtml(q.module)}</span>`);
  } else if (q.examName) {
    badges.push(`<span class="quiz__question-badge">${escapeHtml(q.examName)}</span>`);
  }

  if (q.tag === 'Escenario Empresarial') {
    badges.push(`<span class="quiz__question-badge quiz__question-badge--scenario">🏢 Caso Práctico: Escenario Empresarial</span>`);
  } else if (q.tag === 'Selección Múltiple' || q.format === 'multi') {
    badges.push(`<span class="quiz__question-badge quiz__question-badge--multi">☑️ Selección Múltiple (${q.requiredCount || 2} respuestas)</span>`);
  } else if (q.tag === 'Serie Sí / No (Verdadero / Falso)' || q.format === 'yesno') {
    badges.push(`<span class="quiz__question-badge quiz__question-badge--yesno">⚖️ Serie Sí / No (3 afirmaciones)</span>`);
  } else if (q.tag === 'Arrastrar y Soltar / Emparejamiento' || q.format === 'matching') {
    badges.push(`<span class="quiz__question-badge quiz__question-badge--matching">🔄 Emparejamiento de Conceptos</span>`);
  }

  return badges.join(' ');
}

/**
 * Render Interactive Multi-Select Options
 */
export function renderMultiQuestionInteractive(q, currentAnswers) {
  const selectedArr = Array.isArray(currentAnswers) ? currentAnswers : [];
  const reqCount = q.requiredCount || 2;

  return `
    <div class="quiz__multi-header">
      <span class="quiz__multi-instruction">
        ${icons.clipboard('ui-icon ui-icon--sm')} Seleccione <strong>${reqCount}</strong> respuestas:
      </span>
      <span class="quiz__multi-counter ${selectedArr.length === reqCount ? 'quiz__multi-counter--complete' : ''}">
        ${selectedArr.length} / ${reqCount} seleccionadas
      </span>
    </div>
    <div class="quiz__options quiz__options--multi" role="group" aria-label="Opciones de respuesta múltiple">
      ${(q.options || []).map(opt => {
        const isSelected = selectedArr.includes(opt.key);
        return `
          <label class="quiz__option quiz__option--checkbox ${isSelected ? 'quiz__option--selected' : ''}" id="option-${opt.key}">
            <input type="checkbox" name="answer-multi" value="${opt.key}" ${isSelected ? 'checked' : ''}>
            <span class="quiz__option-indicator quiz__option-indicator--checkbox">
              <span class="quiz__option-key">${opt.key}</span>
            </span>
            <span class="quiz__option-text">${escapeHtml(opt.text)}</span>
          </label>
        `;
      }).join('')}
    </div>
  `;
}

/**
 * Render Interactive Yes / No Series
 */
export function renderYesNoQuestionInteractive(q, currentAnswers) {
  const answersObj = currentAnswers && typeof currentAnswers === 'object' ? currentAnswers : {};

  return `
    <div class="quiz__yesno-container">
      <div class="quiz__yesno-instructions">
        Indique para cada afirmación si es correcta (<strong>Sí</strong>) o incorrecta (<strong>No</strong>):
      </div>
      <div class="quiz__yesno-list">
        ${(q.statements || []).map(st => {
          const val = answersObj[st.id] || null;
          return `
            <div class="quiz__yesno-row" data-statement-id="${st.id}">
              <div class="quiz__yesno-text">
                <span class="quiz__yesno-num">${st.id}.</span>
                <span class="quiz__yesno-stmt">${escapeHtml(st.text)}</span>
              </div>
              <div class="quiz__yesno-actions" role="group" aria-label="Respuesta a afirmación ${st.id}">
                <button type="button" class="btn-yesno btn-yesno--yes ${val === 'Sí' ? 'btn-yesno--active-yes' : ''}" data-stmt="${st.id}" data-val="Sí">
                  ${icons.check('ui-icon ui-icon--sm')} Sí
                </button>
                <button type="button" class="btn-yesno btn-yesno--no ${val === 'No' ? 'btn-yesno--active-no' : ''}" data-stmt="${st.id}" data-val="No">
                  ${icons.xCircle('ui-icon ui-icon--sm')} No
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

/**
 * Render Interactive Matching (Arrastrar y Soltar / Emparejamiento)
 */
export function renderMatchingQuestionInteractive(q, currentAnswers) {
  const answersObj = currentAnswers && typeof currentAnswers === 'object' ? currentAnswers : {};

  return `
    <div class="quiz__matching-container">
      <div class="quiz__matching-grid">
        <div class="quiz__matching-col quiz__matching-col--pairs">
          <h4 class="quiz__matching-col-title">1. Relacione cada elemento:</h4>
          <div class="quiz__matching-list">
            ${(q.pairs || []).map(p => {
              const selectedKey = answersObj[p.num] || '';
              return `
                <div class="quiz__matching-row" data-pair-num="${p.num}">
                  <div class="quiz__matching-left">
                    <span class="quiz__matching-num">${p.num}.</span>
                    <span class="quiz__matching-name">${escapeHtml(p.left)}</span>
                  </div>
                  <div class="quiz__matching-select-wrap">
                    <span class="quiz__matching-arrow">➔</span>
                    <select class="quiz__matching-select" data-pair-num="${p.num}" aria-label="Emparejar elemento ${p.num}">
                      <option value="">Elegir opción...</option>
                      ${(q.targets || []).map(t => `
                        <option value="${t.key}" ${selectedKey === t.key ? 'selected' : ''}>
                          ${t.key} — ${escapeHtml(t.text.length > 55 ? t.text.substring(0, 52) + '...' : t.text)}
                        </option>
                      `).join('')}
                    </select>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="quiz__matching-col quiz__matching-col--targets">
          <h4 class="quiz__matching-col-title">2. Opciones disponibles:</h4>
          <div class="quiz__matching-targets-list">
            ${(q.targets || []).map(t => `
              <div class="quiz__matching-target-card">
                <span class="quiz__matching-target-badge">${t.key}</span>
                <span class="quiz__matching-target-text">${escapeHtml(t.text)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Render Multi-Select Review in Results
 */
export function renderMultiQuestionReview(q, userAnswer) {
  const userArr = Array.isArray(userAnswer) ? userAnswer : [];
  const correctArr = Array.isArray(q.correctAnswers) ? q.correctAnswers : [];

  const optionsHtml = (q.options || []).map(opt => {
    const isCorrect = correctArr.includes(opt.key);
    const isSelected = userArr.includes(opt.key);

    let optClass = 'result-option--neutral';
    let badge = '';

    if (isCorrect && isSelected) {
      optClass = 'result-option--correct result-option--user-correct';
      badge = `<span class="result-option__badge result-option__badge--correct">${icons.check('ui-icon ui-icon--sm')} Correcta seleccionada</span>`;
    } else if (isCorrect) {
      optClass = 'result-option--correct';
      badge = `<span class="result-option__badge result-option__badge--correct">${icons.check('ui-icon ui-icon--sm')} Respuesta correcta</span>`;
    } else if (isSelected) {
      optClass = 'result-option--wrong';
      badge = `<span class="result-option__badge result-option__badge--wrong">${icons.xCircle('ui-icon ui-icon--sm')} Tu selección (Incorrecta)</span>`;
    }

    return `
      <div class="result-option ${optClass}">
        <span class="result-option__indicator">${opt.key}</span>
        <span class="result-option__text">${escapeHtml(opt.text)}</span>
        ${badge}
      </div>
    `;
  }).join('');

  return `<div class="result-card__options">${optionsHtml}</div>`;
}

/**
 * Render Yes/No Review in Results
 */
export function renderYesNoQuestionReview(q, userAnswer) {
  const userObj = userAnswer && typeof userAnswer === 'object' ? userAnswer : {};

  const rowsHtml = (q.statements || []).map(st => {
    const userVal = userObj[st.id] || null;
    const isCorrect = userVal === st.correct;

    return `
      <div class="result-yesno-row ${isCorrect ? 'result-yesno-row--correct' : 'result-yesno-row--incorrect'}">
        <div class="result-yesno-stmt">
          <span class="result-yesno-num">${st.id}.</span>
          <span>${escapeHtml(st.text)}</span>
        </div>
        <div class="result-yesno-comparison">
          <span class="result-yesno-tag ${userVal === 'Sí' ? 'result-yesno-tag--yes' : userVal === 'No' ? 'result-yesno-tag--no' : 'result-yesno-tag--unanswered'}">
            Tu respuesta: <strong>${userVal || 'Sin responder'}</strong>
          </span>
          <span class="result-yesno-tag result-yesno-tag--correct">
            Correcta: <strong>${st.correct}</strong>
          </span>
          <span class="result-yesno-status">
            ${isCorrect ? icons.checkCircle('ui-icon text--success') : icons.xCircle('ui-icon text--error')}
          </span>
        </div>
      </div>
    `;
  }).join('');

  return `<div class="result-yesno-list">${rowsHtml}</div>`;
}

/**
 * Render Matching Review in Results
 */
export function renderMatchingQuestionReview(q, userAnswer) {
  const userObj = userAnswer && typeof userAnswer === 'object' ? userAnswer : {};

  const rowsHtml = (q.pairs || []).map(p => {
    const userKey = userObj[p.num] || '';
    const isCorrect = userKey === p.correctKey;
    const targetObj = (q.targets || []).find(t => t.key === p.correctKey);

    return `
      <div class="result-matching-row ${isCorrect ? 'result-matching-row--correct' : 'result-matching-row--incorrect'}">
        <div class="result-matching-pair">
          <span class="result-matching-num">${p.num}.</span>
          <strong class="result-matching-title">${escapeHtml(p.left)}</strong>
        </div>
        <div class="result-matching-comparison">
          <span class="result-matching-tag ${isCorrect ? 'result-matching-tag--correct' : 'result-matching-tag--wrong'}">
            Tu emparejamiento: <strong>${userKey ? userKey : 'Sin responder'}</strong>
          </span>
          <span class="result-matching-tag result-matching-tag--solution">
            Correcto: <strong>${p.correctKey}</strong> ${targetObj ? `(${escapeHtml(targetObj.text.substring(0, 45))}...)` : ''}
          </span>
          <span class="result-matching-icon">
            ${isCorrect ? icons.checkCircle('ui-icon text--success') : icons.xCircle('ui-icon text--error')}
          </span>
        </div>
      </div>
    `;
  }).join('');

  return `<div class="result-matching-list">${rowsHtml}</div>`;
}

/**
 * Render Official Explanation & Discards Block
 */
export function renderExplanationBlock(q) {
  if (!q.explanation && !q.discards) return '';

  return `
    <div class="result-explanation">
      <div class="result-explanation__header">
        <span class="result-explanation__badge">${icons.clipboard('ui-icon ui-icon--sm')} Explicación Oficial</span>
      </div>
      ${q.explanation ? `<p class="result-explanation__text">${escapeHtml(q.explanation)}</p>` : ''}
      ${q.discards ? `
        <div class="result-explanation__discards">
          <strong>Descartes y justificación:</strong> ${escapeHtml(q.discards)}
        </div>
      ` : ''}
    </div>
  `;
}
