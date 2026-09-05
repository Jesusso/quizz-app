import { navigate, setState, getState } from './router.js';
import {
  selectQuestions,
  selectReviewQuestions,
  calculateResults,
  createTimer,
  formatTime,
} from './quiz.js';
import {
  saveQuizResult,
  getQuizHistory,
  updateQuestionStats,
  getFailedQuestionIds,
  getQuestionStats,
} from './db.js';
import {
  renderScoreChart,
  calculateOverallStats,
  getMostFailedQuestions,
  getSubjectStatsSummary,
} from './stats.js';
import {
  PYSPARK_CODE_QUESTION,
  renderCodeQuestionInteractive,
  renderCodeQuestionReview,
} from './codeQuestion.js';
import { selectEssayQuestions } from '../data/essayQuestions.js';
import {
  renderEssayQuestionInteractive,
  renderEssayQuestionReview,
} from './essayQuestion.js';
import {
  getLanguage,
  setLanguage,
  getQuestionText,
  getOptionText,
  getUiString,
} from './i18n.js';
import { icons, getSubjectIconSvg } from './icons.js';
import questionsData from '../data/questions.json';

// =====================================================================
// HELPERS
// =====================================================================

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function getAllQuestions(subjectId) {
  const subject = questionsData.subjects.find(s => s.id === subjectId);
  if (!subject) return [];
  return subject.exams.flatMap(exam =>
    exam.questions.map(q => ({ ...q, examName: exam.name }))
  );
}

function prepareQuizQuestions(subjectId, mode = 'exam', failedIds = [], examId = null) {
  const subject = questionsData.subjects.find(s => s.id === subjectId);
  if (!subject) return [];

  // If a specific exam / model was chosen:
  if (examId) {
    const exam = subject.exams.find(e => e.id === examId);
    if (exam) {
      const examQuestions = exam.questions.map(q => ({ ...q, examName: exam.name }));
      if (subjectId === 'ipmd') {
        const essayQ = selectEssayQuestions(subjectId, 3);
        return [...examQuestions, ...essayQ, PYSPARK_CODE_QUESTION];
      }
      return examQuestions;
    }
  }

  const allQ = getAllQuestions(subjectId);

  // AZ-900 Certification: Full simulated exam mode (30 questions)
  if (subjectId.includes('az900')) {
    const qCount = 30;
    return mode === 'review'
      ? selectReviewQuestions(allQ, failedIds, qCount)
      : selectQuestions(allQ, qCount);
  }

  // IPMD Master Subject: 15 multiple-choice + 3 essay + 1 PySpark code
  if (subjectId === 'ipmd') {
    let questions = mode === 'review'
      ? selectReviewQuestions(allQ, failedIds, 15)
      : selectQuestions(allQ, 15);
    const essayQ = selectEssayQuestions(subjectId, 3);
    return [...questions, ...essayQ, PYSPARK_CODE_QUESTION];
  }

  // Other Master Subjects (GDTD, HV: 15 pure multiple choice)
  return mode === 'review'
    ? selectReviewQuestions(allQ, failedIds, 15)
    : selectQuestions(allQ, 15);
}

function getAllSubjectQuestions() {
  return questionsData.subjects.flatMap(s =>
    s.exams.flatMap(exam =>
      exam.questions.map(q => ({
        ...q,
        examName: exam.name,
        subjectId: s.id,
        subjectName: s.name,
      }))
    )
  );
}

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.remove('toast--visible');
  void toast.offsetWidth;
  toast.classList.add('toast--visible');
  setTimeout(() => toast.classList.remove('toast--visible'), 3000);
}

function openExamPickerModal(subjectId) {
  const subject = questionsData.subjects.find(s => s.id === subjectId);
  if (!subject) return;

  const existingModal = document.getElementById('exam-picker-modal');
  if (existingModal) existingModal.remove();

  // Group exams by year
  const groups = {};
  for (const exam of subject.exams) {
    let year = 'Temáticos';
    const yearMatch = exam.name.match(/\b(202[0-9])\b/);
    if (yearMatch) {
      year = yearMatch[1];
    } else if (exam.id.startsWith('202')) {
      year = exam.id.substring(0, 4);
    }
    if (!groups[year]) groups[year] = [];
    groups[year].push(exam);
  }

  const sortedYears = Object.keys(groups).sort((a, b) => {
    if (a === 'Temáticos') return 1;
    if (b === 'Temáticos') return -1;
    return b.localeCompare(a);
  });

  const modalHtml = `
    <div class="modal-overlay" id="exam-picker-modal" role="dialog" aria-modal="true" aria-labelledby="modal-exam-title">
      <div class="modal-card">
        <div class="modal-card__header">
          <div class="modal-card__title-group">
            <h2 class="modal-card__title" id="modal-exam-title">${icons.clipboard('ui-icon ui-icon--md')} Elegir Convocatoria / Modelo</h2>
            <p class="modal-card__subtitle">${escapeHtml(subject.name)} · ${subject.exams.length} exámenes disponibles</p>
          </div>
          <button class="modal-close-btn" id="modal-close" aria-label="Cerrar modal">&times;</button>
        </div>
        
        <div class="modal-card__body">
          <div class="modal-filter-tabs">
            <button class="chip chip--active" data-year-filter="all">Todos (${subject.exams.length})</button>
            ${sortedYears.map(yr => `
              <button class="chip" data-year-filter="${yr}">${yr} (${groups[yr].length})</button>
            `).join('')}
          </div>

          <div class="modal-exams-grid" id="modal-exams-container">
            ${subject.exams.map(exam => {
              let year = 'Temáticos';
              const yearMatch = exam.name.match(/\b(202[0-9])\b/);
              if (yearMatch) year = yearMatch[1];
              else if (exam.id.startsWith('202')) year = exam.id.substring(0, 4);

              const isOrdinaria = exam.name.toLowerCase().includes('ordinaria');
              const isExtraordinaria = exam.name.toLowerCase().includes('extraordinaria');
              const tag = isOrdinaria ? 'Ordinaria' : isExtraordinaria ? 'Extraordinaria' : '';

              return `
                <div class="modal-exam-card" data-exam-id="${exam.id}" data-exam-year="${year}">
                  <div class="modal-exam-card__info">
                    <h3 class="modal-exam-card__name">${escapeHtml(exam.name)}</h3>
                    <div class="modal-exam-card__tags">
                      <span class="modal-exam-tag">${exam.questions.length} preguntas</span>
                      ${tag ? `<span class="modal-exam-tag modal-exam-tag--${isOrdinaria ? 'ord' : 'extra'}">${tag}</span>` : ''}
                    </div>
                  </div>
                  <button class="btn btn--primary btn--sm btn-start-exam-model" data-exam-id="${exam.id}">
                    Iniciar ${icons.arrowRight('ui-icon ui-icon--sm')}
                  </button>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const modalEl = document.getElementById('exam-picker-modal');

  function closeModal() {
    if (modalEl) modalEl.remove();
    document.removeEventListener('keydown', handleEsc);
  }

  function handleEsc(e) {
    if (e.key === 'Escape') closeModal();
  }

  document.addEventListener('keydown', handleEsc);

  modalEl.querySelector('#modal-close').addEventListener('click', closeModal);
  modalEl.addEventListener('click', e => {
    if (e.target === modalEl) closeModal();
  });

  // Filter tabs inside modal
  modalEl.querySelectorAll('[data-year-filter]').forEach(chip => {
    chip.addEventListener('click', () => {
      modalEl.querySelectorAll('[data-year-filter]').forEach(c => c.classList.remove('chip--active'));
      chip.classList.add('chip--active');
      const yr = chip.dataset.yearFilter;

      modalEl.querySelectorAll('.modal-exam-card').forEach(card => {
        if (yr === 'all' || card.dataset.examYear === yr) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Start specific exam
  modalEl.querySelectorAll('.modal-exam-card').forEach(card => {
    card.addEventListener('click', () => {
      const examId = card.dataset.examId;
      const questions = prepareQuizQuestions(subjectId, 'exam', [], examId);
      const chosenExam = subject.exams.find(ex => ex.id === examId);
      closeModal();

      setState('quizQuestions', questions);
      setState('quizSubjectId', subjectId);
      setState('quizMode', 'exam');
      setState('quizExamId', examId);
      setState('quizExamName', chosenExam ? chosenExam.name : '');
      navigate('/quiz');
    });
  });
}

// =====================================================================
// DASHBOARD VIEW
// =====================================================================

export async function renderDashboard(container) {
  const history = await getQuizHistory();

  const subjectCards = questionsData.subjects
    .map(subject => {
      const subjectHistory = history.filter(h => h.subjectId === subject.id);
      const stats = calculateOverallStats(subjectHistory);
      const totalQ = subject.exams.reduce((t, e) => t + e.questions.length, 0);
      const lastResult = subjectHistory.length > 0
        ? subjectHistory.sort((a, b) => new Date(b.date) - new Date(a.date))[0]
        : null;

      return `
        <div class="subject-card" id="subject-${subject.id}">
          <div class="subject-card__header">
            <div class="subject-card__icon-wrap">
              ${getSubjectIconSvg(subject.id, 'ui-icon ui-icon--xl subject-card__icon')}
            </div>
            <div class="subject-card__info">
              <h2 class="subject-card__name">${escapeHtml(subject.name)}</h2>
              <p class="subject-card__meta">${totalQ} preguntas · ${subject.exams.length} exámenes ${subject.id.includes('az900') ? `<span class="subject-badge-cert">${icons.award('ui-icon ui-icon--sm')} Certificación Bilingüe</span>` : ''}</p>
            </div>
          </div>

          <div class="subject-card__stats">
            <div class="stat-mini">
              <span class="stat-mini__value">${stats.totalExams}</span>
              <span class="stat-mini__label">Tests</span>
            </div>
            <div class="stat-mini">
              <span class="stat-mini__value">${stats.totalExams > 0 ? stats.avgScore + '%' : '—'}</span>
              <span class="stat-mini__label">Media</span>
            </div>
            <div class="stat-mini">
              <span class="stat-mini__value">${stats.totalExams > 0 ? stats.bestScore + '%' : '—'}</span>
              <span class="stat-mini__label">Mejor</span>
            </div>
          </div>

          ${lastResult ? `
            <div class="subject-card__last">
              <span class="subject-card__last-label">Último test:</span>
              <span class="subject-card__last-score ${lastResult.score >= 70 ? 'text--success' : lastResult.score >= 50 ? 'text--warning' : 'text--error'}">${lastResult.score}%</span>
              <span class="subject-card__last-date">${new Date(lastResult.date).toLocaleDateString('es-ES')}</span>
            </div>
          ` : ''}

          <div class="subject-card__actions">
            <button class="btn btn--primary btn--lg" data-action="exam" data-subject="${subject.id}" id="btn-exam-${subject.id}">
              ${icons.clipboard('ui-icon')} ${subject.id === 'ipmd' ? 'Examen Aleatorio' : 'Nuevo Examen'}
            </button>
            <button class="btn btn--outline btn--lg" data-action="review" data-subject="${subject.id}" id="btn-review-${subject.id}">
              ${icons.rotateCcw('ui-icon')} Modo Repaso
            </button>
            ${subject.exams.length > 1 ? `
              <button class="btn btn--secondary btn--lg btn--full btn--model-picker" data-action="select-model" data-subject="${subject.id}" id="btn-model-${subject.id}">
                ${icons.list('ui-icon')} Elegir Convocatoria / Modelo (${subject.exams.length})
              </button>
            ` : ''}
          </div>
        </div>
      `;
    })
    .join('');

  container.innerHTML = `
    <div class="view dashboard">
      <div class="dashboard__hero">
        <h1 class="dashboard__title">¡Hora de estudiar!</h1>
        <p class="dashboard__subtitle">Selecciona una asignatura para comenzar un test</p>
      </div>
      <div class="dashboard__grid">
        ${subjectCards}
      </div>
    </div>
  `;

  // Bind exam buttons
  container.querySelectorAll('[data-action="exam"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const subjectId = btn.dataset.subject;
      setState('quizExamId', null);
      setState('quizExamName', null);
      const questions = prepareQuizQuestions(subjectId, 'exam');
      setState('quizQuestions', questions);
      setState('quizSubjectId', subjectId);
      setState('quizMode', 'exam');
      navigate('/quiz');
    });
  });

  // Bind model picker buttons
  container.querySelectorAll('[data-action="select-model"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const subjectId = btn.dataset.subject;
      openExamPickerModal(subjectId);
    });
  });

  // Bind review buttons
  container.querySelectorAll('[data-action="review"]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const subjectId = btn.dataset.subject;
      const failedIds = await getFailedQuestionIds(subjectId);

      if (failedIds.length === 0) {
        showToast('No hay preguntas falladas todavía. ¡Haz un examen primero!');
        return;
      }

      setState('quizExamId', null);
      setState('quizExamName', null);
      const questions = prepareQuizQuestions(subjectId, 'review', failedIds);
      setState('quizQuestions', questions);
      setState('quizSubjectId', subjectId);
      setState('quizMode', 'review');
      navigate('/quiz');
    });
  });
}

// =====================================================================
// QUIZ VIEW
// =====================================================================

export function renderQuiz(container) {
  const questions = getState('quizQuestions');
  if (!questions || questions.length === 0) {
    navigate('/');
    return;
  }

  let currentIndex = 0;
  const answers = {};

  const timer = createTimer(elapsed => {
    const timerEl = document.getElementById('quiz-timer-value');
    if (timerEl) {
      timerEl.textContent = formatTime(elapsed);
    }
  });

  function renderQuestion() {
    const q = questions[currentIndex];
    const progress = ((currentIndex + 1) / questions.length) * 100;

    container.innerHTML = `
      <div class="view quiz">
        <div class="quiz__header">
          <div class="quiz__progress-section">
            <span class="quiz__progress-text">${getLanguage() === 'en' ? 'Question' : 'Pregunta'} <strong>${currentIndex + 1}</strong> ${getLanguage() === 'en' ? 'of' : 'de'} ${questions.length}</span>
            <div class="progress-bar">
              <div class="progress-bar__fill" style="width: ${progress}%"></div>
            </div>
          </div>
          <div class="quiz__header-controls">
            <div class="lang-toggle" role="group" aria-label="Idioma / Language">
              <button class="lang-btn ${getLanguage() === 'es' ? 'lang-btn--active' : ''}" data-lang="es" title="Español">🇪🇸 ES</button>
              <button class="lang-btn ${getLanguage() === 'en' ? 'lang-btn--active' : ''}" data-lang="en" title="English">🇬🇧 EN</button>
            </div>
            <div class="quiz__timer" id="quiz-timer" title="Tiempo transcurrido">
              <span class="quiz__timer-icon">${icons.clock('ui-icon ui-icon--sm')}</span>
              <span class="quiz__timer-value" id="quiz-timer-value">${formatTime(timer.getElapsed())}</span>
            </div>
          </div>
        </div>

        <div class="quiz__body">
          <div class="quiz__question-card">
            <div class="quiz__question-meta">
              <span class="quiz__question-badge">${q.examName || ''}</span>
            </div>
            <p class="quiz__question-text">${escapeHtml(getQuestionText(q))}</p>
          </div>

          ${
            q.type === 'code-fill'
              ? renderCodeQuestionInteractive(q, answers[q.id] || {})
              : q.type === 'essay'
              ? renderEssayQuestionInteractive(q, answers[q.id] || {})
              : `
            <div class="quiz__options" role="radiogroup" aria-label="Opciones de respuesta">
              ${q.options
                .map(
                  opt => `
                <label class="quiz__option ${answers[q.id] === opt.key ? 'quiz__option--selected' : ''}" id="option-${opt.key}">
                  <input type="radio" name="answer" value="${opt.key}"
                    ${answers[q.id] === opt.key ? 'checked' : ''}>
                  <span class="quiz__option-indicator">
                    <span class="quiz__option-key">${opt.key}</span>
                  </span>
                  <span class="quiz__option-text">${escapeHtml(getOptionText(opt))}</span>
                </label>
              `
                )
                .join('')}
            </div>
          `
          }
        </div>

        <div class="quiz__footer">
          <div class="quiz__indicators">
            ${questions
              .map((qItem, i) => {
                const isAnswered =
                  qItem.type === 'code-fill'
                    ? answers[qItem.id] && Object.values(answers[qItem.id]).some(v => String(v).trim().length > 0)
                    : qItem.type === 'essay'
                    ? answers[qItem.id] && (answers[qItem.id].selfScore !== undefined || (answers[qItem.id].text || '').trim().length > 0)
                    : !!answers[qItem.id];
                return `
                  <button class="indicator ${i === currentIndex ? 'indicator--current' : ''} ${isAnswered ? 'indicator--answered' : ''}"
                    data-index="${i}" aria-label="Ir a pregunta ${i + 1}">${i + 1}</button>
                `;
              })
              .join('')}
          </div>
          <div class="quiz__nav">
            <button class="btn btn--ghost" id="btn-prev" ${currentIndex === 0 ? 'disabled' : ''}>
              ${icons.arrowLeft('ui-icon ui-icon--sm')} ${getUiString('prev')}
            </button>
            ${
              currentIndex < questions.length - 1
                ? `<button class="btn btn--primary" id="btn-next">${getUiString('next')} ${icons.arrowRight('ui-icon ui-icon--sm')}</button>`
                : `<button class="btn btn--accent" id="btn-finish">${icons.check('ui-icon ui-icon--sm')} ${getUiString('finish')}</button>`
            }
          </div>
        </div>
      </div>
    `;

    // Language button listeners
    container.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        const targetLang = btn.dataset.lang;
        if (targetLang !== getLanguage()) {
          setLanguage(targetLang);
          renderQuestion();
        }
      });
    });

    // Bind inputs for code-fill, essay, or radio selection
    if (q.type === 'code-fill') {
      container.querySelectorAll('.code-gap-input').forEach(input => {
        input.addEventListener('input', e => {
          const gapId = parseInt(e.target.dataset.gap);
          if (!answers[q.id]) answers[q.id] = {};
          answers[q.id][gapId] = e.target.value;

          const hasVal = Object.values(answers[q.id]).some(v => String(v).trim().length > 0);
          const ind = container.querySelector(`.indicator[data-index="${currentIndex}"]`);
          if (ind) {
            if (hasVal) ind.classList.add('indicator--answered');
            else ind.classList.remove('indicator--answered');
          }
        });
      });
    } else if (q.type === 'essay') {
      const textarea = container.querySelector(`#essay-input-${q.id}`);
      if (textarea) {
        textarea.addEventListener('input', e => {
          if (!answers[q.id]) answers[q.id] = {};
          answers[q.id].text = e.target.value;

          const hasVal = (answers[q.id].text || '').trim().length > 0;
          const ind = container.querySelector(`.indicator[data-index="${currentIndex}"]`);
          if (ind) {
            if (hasVal || answers[q.id].selfScore !== undefined) ind.classList.add('indicator--answered');
            else ind.classList.remove('indicator--answered');
          }
        });
      }

      const toggleBtn = container.querySelector(`.btn-toggle-model[data-question-id="${q.id}"]`);
      const modelSection = container.querySelector(`#essay-model-${q.id}`);
      if (toggleBtn && modelSection) {
        toggleBtn.addEventListener('click', () => {
          if (!answers[q.id]) answers[q.id] = {};
          answers[q.id].isRevealed = !answers[q.id].isRevealed;
          modelSection.classList.toggle('essay-model-section--hidden', !answers[q.id].isRevealed);
          toggleBtn.innerHTML = answers[q.id].isRevealed
            ? `${icons.eyeOff('ui-icon ui-icon--sm')} Ocultar Respuesta Modelo`
            : `${icons.eye('ui-icon ui-icon--sm')} Ver Respuesta Modelo y Evaluar`;
        });
      }

      const evalContainer = container.querySelector(`.essay-eval-buttons[data-question-id="${q.id}"]`);
      if (evalContainer) {
        evalContainer.querySelectorAll('.btn-eval').forEach(btn => {
          btn.addEventListener('click', () => {
            const score = parseFloat(btn.dataset.score);
            if (!answers[q.id]) answers[q.id] = {};
            answers[q.id].selfScore = score;

            evalContainer.querySelectorAll('.btn-eval').forEach(b => b.classList.remove('btn-eval--selected'));
            btn.classList.add('btn-eval--selected');

            const ind = container.querySelector(`.indicator[data-index="${currentIndex}"]`);
            if (ind) ind.classList.add('indicator--answered');
          });
        });
      }
    } else {
      container.querySelectorAll('input[name="answer"]').forEach(input => {
        input.addEventListener('change', e => {
          answers[q.id] = e.target.value;
          container
            .querySelectorAll('.quiz__option')
            .forEach(opt => opt.classList.remove('quiz__option--selected'));
          input.closest('.quiz__option').classList.add('quiz__option--selected');

          const ind = container.querySelector(`.indicator[data-index="${currentIndex}"]`);
          if (ind) ind.classList.add('indicator--answered');
        });
      });
    }

    // Navigation
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');
    const finishBtn = document.getElementById('btn-finish');

    if (prevBtn) prevBtn.addEventListener('click', () => { currentIndex--; renderQuestion(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { currentIndex++; renderQuestion(); });
    if (finishBtn) {
      finishBtn.addEventListener('click', () => {
        const unanswered = questions.length - Object.keys(answers).length;
        if (unanswered > 0) {
          if (confirm(`Tienes ${unanswered} pregunta(s) sin responder. ¿Deseas finalizar de todos modos?`)) {
            finishQuiz();
          }
        } else {
          finishQuiz();
        }
      });
    }

    // Indicator jump navigation
    container.querySelectorAll('.indicator').forEach(ind => {
      ind.addEventListener('click', () => {
        currentIndex = parseInt(ind.dataset.index);
        renderQuestion();
      });
    });
  }

  async function finishQuiz() {
    timer.stop();
    const results = calculateResults(questions, answers);
    const subjectId = getState('quizSubjectId');

    // Save quiz result
    await saveQuizResult({
      subjectId,
      mode: getState('quizMode'),
      totalQuestions: results.total,
      correctAnswers: results.correct,
      score: results.score,
      timeSpent: timer.getElapsed(),
      answers: results.details.map(d => ({
        questionId: d.questionId,
        selected: d.userAnswer,
        correct: d.isCorrect,
      })),
    });

    // Update per-question stats
    for (const detail of results.details) {
      await updateQuestionStats(detail.questionId, detail.isCorrect);
    }

    setState('quizResults', results);
    navigate('/results');
  }

  renderQuestion();
  timer.start();
}

// =====================================================================
// RESULTS VIEW
// =====================================================================

export function renderResults(container) {
  const results = getState('quizResults');
  if (!results) {
    navigate('/');
    return;
  }

  const scoreClass =
    results.score >= 70 ? 'results__score-ring--good'
    : results.score >= 50 ? 'results__score-ring--ok'
    : 'results__score-ring--bad';

  const message =
    results.score >= 90 ? '¡Excelente trabajo!'
    : results.score >= 70 ? '¡Buen resultado!'
    : results.score >= 50 ? 'Puedes mejorar, ¡sigue practicando!'
    : 'Necesitas repasar, ¡ánimo!';

  const currentLang = getLanguage();
  const reviewCards = results.details
    .map((d, i) => {
      if (d.question.type === 'code-fill') {
        const reviewData = renderCodeQuestionReview(d.question, d.userAnswer || {});
        return `
          <div class="result-card ${d.isCorrect ? 'result-card--correct' : 'result-card--incorrect'}" id="result-${i}">
            <div class="result-card__header">
              <span class="result-card__number">${i + 1}</span>
              <span class="result-card__status">${d.isCorrect ? icons.checkCircle('ui-icon text--success') : icons.xCircle('ui-icon text--error')}</span>
              <span class="result-card__exam">${d.question.examName || ''}</span>
            </div>
            <p class="result-card__question">${escapeHtml(getQuestionText(d.question, currentLang))}</p>
            ${reviewData.html}
          </div>
        `;
      } else if (d.question.type === 'essay') {
        const reviewData = renderEssayQuestionReview(d.question, d.userAnswer || {});
        return `
          <div class="result-card ${d.isCorrect ? 'result-card--correct' : 'result-card--incorrect'}" id="result-${i}">
            <div class="result-card__header">
              <span class="result-card__number">${i + 1}</span>
              <span class="result-card__status">${d.isCorrect ? icons.checkCircle('ui-icon text--success') : d.questionScore === 0.5 ? icons.minusCircle('ui-icon text--warning') : icons.xCircle('ui-icon text--error')}</span>
              <span class="result-card__exam">${d.question.examName || ''}</span>
            </div>
            <p class="result-card__question">${escapeHtml(getQuestionText(d.question, currentLang))}</p>
            ${reviewData.html}
          </div>
        `;
      }

      const optionsHtml = (d.question.options || []).map(opt => {
        const isCorrectOpt = opt.key === d.correctAnswer;
        const isUserSelected = opt.key === d.userAnswer;

        let optClass = 'result-option--neutral';
        let badge = '';

        if (isCorrectOpt && isUserSelected) {
          optClass = 'result-option--correct result-option--user-correct';
          badge = `<span class="result-option__badge result-option__badge--correct">${icons.check('ui-icon ui-icon--sm')} ${getUiString('correctSelected', currentLang)}</span>`;
        } else if (isCorrectOpt) {
          optClass = 'result-option--correct';
          badge = `<span class="result-option__badge result-option__badge--correct">${icons.check('ui-icon ui-icon--sm')} ${getUiString('correctMissed', currentLang)}</span>`;
        } else if (isUserSelected) {
          optClass = 'result-option--wrong';
          badge = `<span class="result-option__badge result-option__badge--wrong">${icons.xCircle('ui-icon ui-icon--sm')} ${getUiString('wrongSelected', currentLang)}</span>`;
        }

        return `
          <div class="result-option ${optClass}">
            <span class="result-option__indicator">${opt.key}</span>
            <span class="result-option__text">${escapeHtml(getOptionText(opt, currentLang))}</span>
            ${badge}
          </div>
        `;
      }).join('');

      return `
        <div class="result-card ${d.isCorrect ? 'result-card--correct' : 'result-card--incorrect'}" id="result-${i}">
          <div class="result-card__header">
            <span class="result-card__number">${i + 1}</span>
            <span class="result-card__status">${d.isCorrect ? icons.checkCircle('ui-icon text--success') : icons.xCircle('ui-icon text--error')}</span>
            <span class="result-card__exam">${d.question.examName || ''}</span>
          </div>
          <p class="result-card__question">${escapeHtml(getQuestionText(d.question, currentLang))}</p>
          ${
            !d.userAnswer
              ? `<div class="result-card__unanswered-notice">${icons.alertTriangle('ui-icon ui-icon--sm text--warning')} ${getUiString('unanswered', currentLang)}</div>`
              : ''
          }
          <div class="result-card__options">
            ${optionsHtml}
          </div>
        </div>
      `;
    })
    .join('');

  container.innerHTML = `
    <div class="view results">
      <div class="results__hero">
        <div class="results__score-ring ${scoreClass}">
          <span class="results__score-percent">${results.score}%</span>
          <span class="results__score-fraction">${results.correct}/${results.total}</span>
        </div>
        <p class="results__message">${message}</p>
        <div class="results__summary-bar">
          <div class="results__bar-segment results__bar-segment--correct" style="width: ${results.score}%">
            <span>${results.correct} ${icons.check('ui-icon ui-icon--sm')}</span>
          </div>
          <div class="results__bar-segment results__bar-segment--incorrect" style="width: ${100 - results.score}%">
            <span>${results.incorrect} ${icons.xCircle('ui-icon ui-icon--sm')}</span>
          </div>
        </div>
      </div>

      <div class="results__actions">
        <button class="btn btn--primary" id="btn-new-exam">${icons.rotateCcw('ui-icon')} Nuevo Examen</button>
        <button class="btn btn--outline" id="btn-go-dashboard">${icons.home('ui-icon')} Dashboard</button>
      </div>

      <div class="results__review">
        <div class="results__review-header">
          <h2 class="results__review-title">${getUiString('reviewTitle', currentLang)}</h2>
          <div class="lang-toggle" role="group" aria-label="Idioma / Language">
            <button class="lang-btn ${currentLang === 'es' ? 'lang-btn--active' : ''}" data-lang="es">🇪🇸 ES</button>
            <button class="lang-btn ${currentLang === 'en' ? 'lang-btn--active' : ''}" data-lang="en">🇬🇧 EN</button>
          </div>
        </div>
        <div class="results__filter">
          <button class="chip chip--active" data-filter="all" id="filter-all">${icons.list('ui-icon ui-icon--sm')} ${currentLang === 'en' ? 'All' : 'Todas'}</button>
          <button class="chip" data-filter="incorrect" id="filter-incorrect">${icons.xCircle('ui-icon ui-icon--sm text--error')} ${currentLang === 'en' ? 'Failed' : 'Falladas'} (${results.incorrect})</button>
          <button class="chip" data-filter="correct" id="filter-correct">${icons.checkCircle('ui-icon ui-icon--sm text--success')} ${currentLang === 'en' ? 'Passed' : 'Acertadas'} (${results.correct})</button>
        </div>
        <div class="results__cards" id="results-cards">
          ${reviewCards}
        </div>
      </div>
    </div>
  `;

  // Language button listeners in results
  container.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const targetLang = btn.dataset.lang;
      if (targetLang !== getLanguage()) {
        setLanguage(targetLang);
        renderResults(container);
      }
    });
  });

  // Bind action buttons
  document.getElementById('btn-new-exam').addEventListener('click', () => {
    const subjectId = getState('quizSubjectId');
    const examId = getState('quizExamId') || null;
    const questions = prepareQuizQuestions(subjectId, 'exam', [], examId);
    setState('quizQuestions', questions);
    setState('quizMode', 'exam');
    navigate('/quiz');
  });

  document.getElementById('btn-go-dashboard').addEventListener('click', () => navigate('/'));

  // Bind filter chips
  container.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      container.querySelectorAll('.chip').forEach(c => c.classList.remove('chip--active'));
      chip.classList.add('chip--active');

      const filter = chip.dataset.filter;
      container.querySelectorAll('.result-card').forEach(card => {
        if (filter === 'all') {
          card.style.display = '';
        } else if (filter === 'correct') {
          card.style.display = card.classList.contains('result-card--correct') ? '' : 'none';
        } else {
          card.style.display = card.classList.contains('result-card--incorrect') ? '' : 'none';
        }
      });
    });
  });
}

// =====================================================================
// STATS VIEW
// =====================================================================

export async function renderStats(container) {
  const history = await getQuizHistory();
  const qStats = await getQuestionStats();
  const allQuestions = getAllSubjectQuestions();

  let selectedSubject = 'all';

  function getSubjectShortName(subjectId) {
    if (!subjectId) return '—';
    if (subjectId.includes('az900')) return 'AZ-900';
    if (subjectId === 'ipmd') return 'IPMD';
    if (subjectId === 'gdtd') return 'GDTD';
    if (subjectId === 'hv') return 'HV';
    const s = questionsData.subjects.find(sub => sub.id === subjectId);
    return s ? s.name : subjectId;
  }

  function render() {
    const filteredHistory = selectedSubject === 'all'
      ? history
      : history.filter(h => h.subjectId === selectedSubject);

    const stats = calculateOverallStats(filteredHistory);
    const mostFailed = getMostFailedQuestions(qStats, allQuestions, 10, selectedSubject);
    const subjectSummaries = getSubjectStatsSummary(history, questionsData.subjects);

    container.innerHTML = `
      <div class="view stats">
        <div class="stats__header-section">
          <h1 class="stats__title">${icons.stats('ui-icon ui-icon--lg')} Estadísticas</h1>
          <div class="stats__filter-bar">
            <span class="stats__filter-label">Asignatura:</span>
            <div class="stats__filter-tabs" role="tablist" aria-label="Filtrar por asignatura">
              <button class="chip ${selectedSubject === 'all' ? 'chip--active' : ''}" data-subject="all">
                ${icons.globe('ui-icon ui-icon--sm')} Todas
              </button>
              ${questionsData.subjects.map(s => `
                <button class="chip ${selectedSubject === s.id ? 'chip--active' : ''}" data-subject="${s.id}">
                  ${getSubjectIconSvg(s.id, 'ui-icon ui-icon--sm')} ${getSubjectShortName(s.id)}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="stats__overview">
          <div class="stat-card" id="stat-total">
            <span class="stat-card__icon">${icons.clipboard('ui-icon ui-icon--xl')}</span>
            <span class="stat-card__value">${stats.totalExams}</span>
            <span class="stat-card__label">Tests realizados</span>
          </div>
          <div class="stat-card" id="stat-avg">
            <span class="stat-card__icon">${icons.trendingUp('ui-icon ui-icon--xl')}</span>
            <span class="stat-card__value">${stats.totalExams > 0 ? stats.avgScore + '%' : '—'}</span>
            <span class="stat-card__label">Puntuación media</span>
          </div>
          <div class="stat-card" id="stat-best">
            <span class="stat-card__icon">${icons.trophy('ui-icon ui-icon--xl')}</span>
            <span class="stat-card__value">${stats.totalExams > 0 ? stats.bestScore + '%' : '—'}</span>
            <span class="stat-card__label">Mejor puntuación</span>
          </div>
          <div class="stat-card" id="stat-questions">
            <span class="stat-card__icon">${icons.checkCircle('ui-icon ui-icon--xl text--success')}</span>
            <span class="stat-card__value">${stats.totalCorrect}/${stats.totalQuestions}</span>
            <span class="stat-card__label">Preguntas acertadas</span>
          </div>
        </div>

        ${selectedSubject === 'all' && history.length > 0 ? `
          <div class="stats__section">
            <h2 class="stats__section-title">Resumen por Asignatura</h2>
            <div class="stats__subject-grid">
              ${subjectSummaries.map(item => `
                <div class="subject-stat-card" data-subject="${item.subjectId}">
                  <div class="subject-stat-card__header">
                    <span class="subject-stat-card__icon">${getSubjectIconSvg(item.subjectId, 'ui-icon ui-icon--lg')}</span>
                    <h3 class="subject-stat-card__name">${escapeHtml(item.subjectName)}</h3>
                  </div>
                  <div class="subject-stat-card__metrics">
                    <div class="subject-stat-metric">
                      <span class="subject-stat-metric__val">${item.totalExams}</span>
                      <span class="subject-stat-metric__lbl">Tests</span>
                    </div>
                    <div class="subject-stat-metric">
                      <span class="subject-stat-metric__val ${item.totalExams > 0 && item.avgScore >= 70 ? 'text--success' : item.totalExams > 0 && item.avgScore >= 50 ? 'text--warning' : ''}">${item.totalExams > 0 ? item.avgScore + '%' : '—'}</span>
                      <span class="subject-stat-metric__lbl">Media</span>
                    </div>
                    <div class="subject-stat-metric">
                      <span class="subject-stat-metric__val">${item.totalExams > 0 ? item.bestScore + '%' : '—'}</span>
                      <span class="subject-stat-metric__lbl">Mejor</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${
          filteredHistory.length > 0
            ? `
          <div class="stats__section">
            <h2 class="stats__section-title">Evolución de puntuaciones ${selectedSubject !== 'all' ? `· ${getSubjectShortName(selectedSubject)}` : ''}</h2>
            <div class="stats__chart-container">
              <canvas id="score-chart"></canvas>
            </div>
          </div>
        `
            : `
          <div class="stats__empty-section">
            <p class="stats__empty-text">No hay tests registrados para ${selectedSubject === 'all' ? 'mostrar estadísticas' : getSubjectShortName(selectedSubject)}.</p>
          </div>
        `
        }

        ${
          mostFailed.length > 0
            ? `
          <div class="stats__section">
            <h2 class="stats__section-title">Preguntas más falladas ${selectedSubject !== 'all' ? `· ${getSubjectShortName(selectedSubject)}` : ''}</h2>
            <div class="stats__failed-list">
              ${mostFailed
                .map(
                  item => {
                    const qSubId = item.question?.subjectId || (item.questionId ? item.questionId.split('_')[0] : '');
                    return `
                      <div class="failed-card">
                        <div class="failed-card__header">
                          <span class="failed-card__rate">${item.failRate}% fallos</span>
                          <span class="failed-card__count">${item.timesIncorrect} de ${item.timesAsked}</span>
                          <span class="failed-card__badge badge badge--subject">${getSubjectIconSvg(qSubId, 'ui-icon ui-icon--sm')} ${getSubjectShortName(qSubId)}</span>
                        </div>
                        <p class="failed-card__text">${escapeHtml(item.question?.text || '')}</p>
                      </div>
                    `;
                  }
                )
                .join('')}
            </div>
          </div>
        `
            : ''
        }

        ${
          filteredHistory.length > 0
            ? `
          <div class="stats__section">
            <h2 class="stats__section-title">Historial de tests ${selectedSubject !== 'all' ? `· ${getSubjectShortName(selectedSubject)}` : ''}</h2>
            <div class="stats__history-table-container">
              <table class="stats__table" id="history-table">
                <thead>
                  <tr>
                    <th>Fecha</th>
                    ${selectedSubject === 'all' ? '<th>Asignatura</th>' : ''}
                    <th>Modo</th>
                    <th>Resultado</th>
                    <th>Puntuación</th>
                  </tr>
                </thead>
                <tbody>
                  ${[...filteredHistory]
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .map(
                      r => `
                    <tr>
                      <td>${new Date(r.date).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}</td>
                      ${selectedSubject === 'all' ? `<td><span class="badge badge--subject">${getSubjectIconSvg(r.subjectId, 'ui-icon ui-icon--sm')} ${getSubjectShortName(r.subjectId)}</span></td>` : ''}
                      <td><span class="badge badge--${r.mode === 'review' ? 'review' : 'exam'}">${r.mode === 'review' ? 'Repaso' : 'Examen'}</span></td>
                      <td>${r.correctAnswers}/${r.totalQuestions}</td>
                      <td><span class="score-pill ${r.score >= 70 ? 'score-pill--good' : r.score >= 50 ? 'score-pill--ok' : 'score-pill--bad'}">${r.score}%</span></td>
                    </tr>
                  `
                    )
                    .join('')}
                </tbody>
              </table>
            </div>
          </div>
        `
            : ''
        }
      </div>
    `;

    // Render chart
    if (filteredHistory.length > 0) {
      const canvas = document.getElementById('score-chart');
      if (canvas) {
        renderScoreChart(canvas, filteredHistory);
      }
    }

    // Bind subject filter chips
    container.querySelectorAll('.stats__filter-tabs .chip').forEach(chip => {
      chip.addEventListener('click', () => {
        selectedSubject = chip.dataset.subject;
        render();
      });
    });

    // Bind click on subject summary cards to switch filter
    container.querySelectorAll('.subject-stat-card').forEach(card => {
      card.addEventListener('click', () => {
        selectedSubject = card.dataset.subject;
        render();
      });
    });
  }

  render();
}
