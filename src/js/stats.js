import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

/**
 * Render a line chart showing score evolution over time.
 */
export function renderScoreChart(canvas, quizHistory) {
  // Destroy previous chart instance if exists
  const existingChart = Chart.getChart(canvas);
  if (existingChart) existingChart.destroy();

  const sorted = [...quizHistory].sort((a, b) => new Date(a.date) - new Date(b.date));

  const labels = sorted.map(r => {
    const date = new Date(r.date);
    return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' });
  });

  const scores = sorted.map(r => r.score);

  // Read CSS custom properties for theme-aware colors
  const style = getComputedStyle(document.documentElement);
  const primaryColor = style.getPropertyValue('--color-primary').trim() || '#4F46E5';
  const textColor = style.getPropertyValue('--color-text-secondary').trim() || '#64748B';
  const borderColor = style.getPropertyValue('--color-border').trim() || '#E2E8F0';
  const surfaceColor = style.getPropertyValue('--color-surface').trim() || '#FFFFFF';

  new Chart(canvas, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Puntuación (%)',
          data: scores,
          borderColor: primaryColor,
          backgroundColor: primaryColor + '1A',
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 8,
          pointBackgroundColor: primaryColor,
          pointBorderColor: surfaceColor,
          pointBorderWidth: 2,
          borderWidth: 3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        intersect: false,
        mode: 'index',
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(15, 23, 42, 0.9)',
          titleFont: { family: 'Inter', size: 13, weight: '600' },
          bodyFont: { family: 'Inter', size: 12 },
          padding: 12,
          cornerRadius: 8,
          displayColors: false,
          callbacks: {
            label: ctx => `Puntuación: ${ctx.parsed.y}%`,
          },
        },
      },
      scales: {
        y: {
          min: 0,
          max: 100,
          ticks: {
            callback: v => v + '%',
            color: textColor,
            font: { family: 'Inter', size: 12 },
            stepSize: 20,
          },
          grid: {
            color: borderColor + '80',
            drawBorder: false,
          },
          border: { display: false },
        },
        x: {
          ticks: {
            color: textColor,
            font: { family: 'Inter', size: 11 },
            maxRotation: 45,
          },
          grid: { display: false },
          border: { display: false },
        },
      },
    },
  });
}

/**
 * Calculate overall statistics from quiz history.
 */
export function calculateOverallStats(quizHistory) {
  if (quizHistory.length === 0) {
    return {
      totalExams: 0,
      avgScore: 0,
      bestScore: 0,
      totalQuestions: 0,
      totalCorrect: 0,
    };
  }

  const totalExams = quizHistory.length;
  const avgScore = Math.round(
    quizHistory.reduce((sum, r) => sum + r.score, 0) / totalExams
  );
  const bestScore = Math.max(...quizHistory.map(r => r.score));
  const totalQuestions = quizHistory.reduce((sum, r) => sum + r.totalQuestions, 0);
  const totalCorrect = quizHistory.reduce((sum, r) => sum + r.correctAnswers, 0);

  return { totalExams, avgScore, bestScore, totalQuestions, totalCorrect };
}

/**
 * Get the most frequently failed questions, optionally filtered by subject.
 */
export function getMostFailedQuestions(questionStats, allQuestions, limit = 10, subjectId = null) {
  const filteredStats = subjectId && subjectId !== 'all'
    ? questionStats.filter(s => s.questionId && s.questionId.startsWith(subjectId))
    : questionStats;

  const failed = filteredStats
    .filter(s => s.timesIncorrect > 0)
    .sort((a, b) => {
      const rateA = a.timesIncorrect / a.timesAsked;
      const rateB = b.timesIncorrect / b.timesAsked;
      if (rateB !== rateA) return rateB - rateA;
      return b.timesIncorrect - a.timesIncorrect;
    })
    .slice(0, limit);

  return failed
    .map(s => {
      const question = allQuestions.find(q => q.id === s.questionId);
      return {
        ...s,
        question,
        failRate: Math.round((s.timesIncorrect / s.timesAsked) * 100),
      };
    })
    .filter(s => s.question);
}

/**
 * Calculate per-subject breakdown stats.
 */
export function getSubjectStatsSummary(quizHistory, subjects) {
  return subjects.map(s => {
    const sHistory = quizHistory.filter(h => h.subjectId === s.id);
    const overall = calculateOverallStats(sHistory);
    return {
      subjectId: s.id,
      subjectName: s.name,
      ...overall,
    };
  });
}

