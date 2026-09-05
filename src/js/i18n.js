/**
 * i18n.js — Real-time Language & Translation Manager
 * Supports Spanish (default) and English for bilingual certifications like AZ-900.
 */

let currentLanguage = localStorage.getItem('studyquiz_language') || 'es';

/**
 * Get current active language ('es' | 'en')
 */
export function getLanguage() {
  return currentLanguage;
}

/**
 * Set active language and notify listeners
 */
export function setLanguage(lang) {
  if (lang !== 'es' && lang !== 'en') lang = 'es';
  currentLanguage = lang;
  localStorage.setItem('studyquiz_language', lang);
  window.dispatchEvent(new CustomEvent('languagechange', { detail: { language: lang } }));
}

/**
 * Toggle between 'es' and 'en'
 */
export function toggleLanguage() {
  setLanguage(currentLanguage === 'es' ? 'en' : 'es');
}

/**
 * Get localized question text based on active language
 */
export function getQuestionText(question, lang = getLanguage()) {
  if (!question) return '';
  if (lang === 'en' && question.textEn) {
    return question.textEn;
  }
  return question.text || '';
}

/**
 * Get localized option text based on active language
 */
export function getOptionText(option, lang = getLanguage()) {
  if (!option) return '';
  if (lang === 'en' && option.textEn) {
    return option.textEn;
  }
  return option.text || '';
}

/**
 * Common UI strings localized
 */
export const UI_STRINGS = {
  es: {
    prev: 'Anterior',
    next: 'Siguiente',
    finish: 'Finalizar',
    yourAnswer: 'Tu respuesta:',
    correctAnswer: 'Correcta:',
    correctSelected: 'Tu respuesta (Correcta)',
    correctMissed: 'Respuesta correcta',
    wrongSelected: 'Tu respuesta',
    unanswered: 'Pregunta sin responder',
    reviewTitle: 'Revisión de respuestas',
    switchLang: 'Idioma: ',
  },
  en: {
    prev: 'Previous',
    next: 'Next',
    finish: 'Finish',
    yourAnswer: 'Your answer:',
    correctAnswer: 'Correct:',
    correctSelected: 'Your answer (Correct)',
    correctMissed: 'Correct answer',
    wrongSelected: 'Your answer',
    unanswered: 'Unanswered question',
    reviewTitle: 'Answer Review',
    switchLang: 'Language: ',
  },
};

export function getUiString(key, lang = getLanguage()) {
  const dict = UI_STRINGS[lang] || UI_STRINGS.es;
  return dict[key] || UI_STRINGS.es[key] || '';
}
