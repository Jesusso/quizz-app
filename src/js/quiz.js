/**
 * Select random questions from the full pool.
 */
export function selectQuestions(allQuestions, count = 15) {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Select questions prioritizing previously failed ones.
 * Fills remaining slots with random questions if not enough failed.
 */
export function selectReviewQuestions(allQuestions, failedIds, count = 15) {
  if (failedIds.length === 0) return [];

  const failedQuestions = allQuestions.filter(q => failedIds.includes(q.id));
  const shuffledFailed = [...failedQuestions].sort(() => Math.random() - 0.5);

  if (shuffledFailed.length >= count) {
    return shuffledFailed.slice(0, count);
  }

  // Fill remaining with non-failed questions
  const remaining = allQuestions
    .filter(q => !failedIds.includes(q.id))
    .sort(() => Math.random() - 0.5)
    .slice(0, count - shuffledFailed.length);

  return [...shuffledFailed, ...remaining];
}

/**
 * Calculate quiz results from questions and user answers.
 */
export function calculateResults(questions, answers) {
  let earnedPoints = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  const details = [];

  for (const question of questions) {
    const userAnswer = answers[question.id] || null;
    let isCorrect = false;
    let questionScore = 0;

    if (question.type === 'code-fill') {
      const userGapAnswers = userAnswer && typeof userAnswer === 'object' ? userAnswer : {};
      let correctGaps = 0;
      for (const gap of question.gaps) {
        const val = userGapAnswers[gap.id] || '';
        const clean = String(val).trim();
        if (gap.acceptable.some(acc => acc.toLowerCase() === clean.toLowerCase())) {
          correctGaps++;
        }
      }
      isCorrect = correctGaps === question.gaps.length;
      questionScore = isCorrect ? 1 : 0;
    } else if (question.type === 'essay') {
      const selfScore = (userAnswer && typeof userAnswer === 'object' && userAnswer.selfScore !== undefined)
        ? userAnswer.selfScore
        : 0;
      questionScore = Number(selfScore) || 0;
      isCorrect = questionScore === 1.0;
    } else {
      isCorrect = userAnswer !== null && userAnswer === question.correctAnswer;
      questionScore = isCorrect ? 1 : 0;
    }

    earnedPoints += questionScore;
    if (isCorrect) correctCount++;
    else incorrectCount++;

    details.push({
      questionId: question.id,
      question,
      userAnswer,
      correctAnswer: question.correctAnswer || null,
      isCorrect,
      questionScore,
    });
  }

  return {
    correct: correctCount,
    incorrect: incorrectCount,
    total: questions.length,
    earnedPoints,
    score: questions.length > 0 ? Math.round((earnedPoints / questions.length) * 100) : 0,
    details,
  };
}

/**
 * Create a stopwatch (cronómetro count-up starting from 0).
 */
export function createStopwatch(onTick) {
  let elapsed = 0;
  let intervalId = null;
  let running = false;

  function tick() {
    elapsed++;
    if (onTick) onTick(elapsed);
  }

  function start() {
    if (running) return;
    running = true;
    if (onTick) onTick(elapsed);
    intervalId = setInterval(tick, 1000);
  }

  function pause() {
    if (!running) return;
    running = false;
    clearInterval(intervalId);
  }

  function resume() {
    start();
  }

  function stop() {
    running = false;
    if (intervalId) clearInterval(intervalId);
    intervalId = null;
  }

  function getElapsed() {
    return elapsed;
  }

  return { start, pause, resume, stop, getElapsed, getRemaining: getElapsed };
}

/**
 * Backward compatibility alias
 */
export const createTimer = createStopwatch;

/**
 * Format seconds as MM:SS (or HH:MM:SS if >= 1 hour).
 */
export function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours > 0) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
