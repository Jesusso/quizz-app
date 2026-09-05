import { icons } from './icons.js';

export function renderEssayQuestionInteractive(question, userAnswer = {}) {
  const textVal = typeof userAnswer === 'object' ? (userAnswer.text || '') : (typeof userAnswer === 'string' ? userAnswer : '');
  const selfScore = typeof userAnswer === 'object' ? userAnswer.selfScore : null;
  const isRevealed = typeof userAnswer === 'object' ? !!userAnswer.isRevealed : false;

  const keyPointsHtml = question.keyPoints.map((kp, idx) => `
    <li class="essay-key-point">
      <span class="essay-key-point__badge">Punto ${idx + 1}</span>
      <span class="essay-key-point__text">${escapeHtml(kp)}</span>
    </li>
  `).join('');

  return `
    <div class="essay-container" id="essay-container-${question.id}">
      <div class="essay-header">
        <span class="essay-badge">${icons.clipboard('ui-icon ui-icon--sm')} Pregunta de Desarrollo Breve</span>
        <span class="essay-meta">Máximo ${question.maxLines} líneas de respuesta</span>
      </div>

      <div class="essay-input-section">
        <label for="essay-input-${question.id}" class="essay-label">Escribe tu respuesta aquí:</label>
        <textarea id="essay-input-${question.id}" class="essay-textarea" data-question-id="${question.id}" rows="5" placeholder="Redacta aquí tu explicación justificando tus argumentos...">${escapeHtml(textVal)}</textarea>
      </div>

      <div class="essay-toggle-bar">
        <button type="button" class="btn btn--outline btn--sm btn-toggle-model" data-question-id="${question.id}">
          ${isRevealed ? `${icons.eyeOff('ui-icon ui-icon--sm')} Ocultar Respuesta Modelo` : `${icons.eye('ui-icon ui-icon--sm')} Ver Respuesta Modelo y Evaluar`}
        </button>
      </div>

      <div class="essay-model-section ${isRevealed ? '' : 'essay-model-section--hidden'}" id="essay-model-${question.id}">
        <div class="essay-model-card">
          <div class="essay-model-card__header">
            <span class="essay-model-card__title">Respuesta Modelo del Profesor</span>
          </div>
          <p class="essay-model-card__text">${escapeHtml(question.modelAnswer)}</p>

          <div class="essay-key-points-title">Puntos clave esperados:</div>
          <ul class="essay-key-points-list">
            ${keyPointsHtml}
          </ul>
        </div>

        <div class="essay-eval-card">
          <div class="essay-eval-card__title">Auto-evalúa tu respuesta:</div>
          <p class="essay-eval-card__subtitle">Compara lo que escribiste con la respuesta modelo y los puntos clave:</p>
          <div class="essay-eval-buttons" data-question-id="${question.id}">
            <button type="button" class="btn-eval btn-eval--good ${selfScore === 1.0 ? 'btn-eval--selected' : ''}" data-score="1.0">
              ${icons.checkCircle('ui-icon ui-icon--sm text--success')} Correcto (100%)
            </button>
            <button type="button" class="btn-eval btn-eval--ok ${selfScore === 0.5 ? 'btn-eval--selected' : ''}" data-score="0.5">
              ${icons.minusCircle('ui-icon ui-icon--sm text--warning')} Parcial (50%)
            </button>
            <button type="button" class="btn-eval btn-eval--bad ${selfScore === 0.0 ? 'btn-eval--selected' : ''}" data-score="0.0">
              ${icons.xCircle('ui-icon ui-icon--sm text--error')} Incorrecto (0%)
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function renderEssayQuestionReview(question, userAnswer = {}) {
  const textVal = typeof userAnswer === 'object' ? (userAnswer.text || '') : (typeof userAnswer === 'string' ? userAnswer : '');
  const selfScore = typeof userAnswer === 'object' ? userAnswer.selfScore : null;

  let scoreBadge = '';
  if (selfScore === 1.0) {
    scoreBadge = `<span class="score-pill score-pill--good">${icons.checkCircle('ui-icon ui-icon--sm text--success')} Auto-evaluación: Correcto (100%)</span>`;
  } else if (selfScore === 0.5) {
    scoreBadge = `<span class="score-pill score-pill--ok">${icons.minusCircle('ui-icon ui-icon--sm text--warning')} Auto-evaluación: Parcial (50%)</span>`;
  } else if (selfScore === 0.0) {
    scoreBadge = `<span class="score-pill score-pill--bad">${icons.xCircle('ui-icon ui-icon--sm text--error')} Auto-evaluación: Incorrecto (0%)</span>`;
  } else {
    scoreBadge = '<span class="score-pill score-pill--bad">Sin evaluar</span>';
  }

  const keyPointsHtml = question.keyPoints.map((kp, idx) => `
    <li class="essay-key-point">
      <span class="essay-key-point__badge">Punto ${idx + 1}</span>
      <span class="essay-key-point__text">${escapeHtml(kp)}</span>
    </li>
  `).join('');

  return {
    html: `
      <div class="essay-review-container">
        <div class="essay-review__score-bar">
          ${scoreBadge}
        </div>

        <div class="essay-review__user-card">
          <span class="essay-review__label">Tu redacción:</span>
          <p class="essay-review__user-text">${textVal ? escapeHtml(textVal) : '<em>(Sin respuesta escrita)</em>'}</p>
        </div>

        <div class="essay-review__model-card">
          <span class="essay-review__label">Respuesta Modelo:</span>
          <p class="essay-review__model-text">${escapeHtml(question.modelAnswer)}</p>
          <div class="essay-key-points-title">Puntos clave:</div>
          <ul class="essay-key-points-list">
            ${keyPointsHtml}
          </ul>
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
