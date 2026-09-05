/**
 * icons.js — Professional SVG Icon System
 * Modern, clean, theme-aware vector icons based on Lucide design.
 */

function svg(paths, className = 'ui-icon') {
  return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
}

export const icons = {
  // Brand & Navigation
  logo: (cls = 'ui-icon') => svg('<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>', cls),
  home: (cls = 'ui-icon') => svg('<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>', cls),
  stats: (cls = 'ui-icon') => svg('<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>', cls),
  sun: (cls = 'ui-icon') => svg('<circle cx="12" cy="12" r="4" fill="currentColor"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>', cls),
  moon: (cls = 'ui-icon') => svg('<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>', cls),

  // Action & Status
  clock: (cls = 'ui-icon') => svg('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>', cls),
  clipboard: (cls = 'ui-icon') => svg('<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 14h6"/><path d="M9 18h6"/>', cls),
  rotateCcw: (cls = 'ui-icon') => svg('<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>', cls),
  check: (cls = 'ui-icon') => svg('<polyline points="20 6 9 17 4 12"/>', cls),
  checkCircle: (cls = 'ui-icon') => svg('<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>', cls),
  xCircle: (cls = 'ui-icon') => svg('<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>', cls),
  minusCircle: (cls = 'ui-icon') => svg('<circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/>', cls),
  alertTriangle: (cls = 'ui-icon') => svg('<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>', cls),
  trophy: (cls = 'ui-icon') => svg('<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>', cls),
  trendingUp: (cls = 'ui-icon') => svg('<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>', cls),
  arrowLeft: (cls = 'ui-icon') => svg('<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>', cls),
  arrowRight: (cls = 'ui-icon') => svg('<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>', cls),
  eye: (cls = 'ui-icon') => svg('<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>', cls),
  eyeOff: (cls = 'ui-icon') => svg('<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" y1="2" x2="22" y2="22"/>', cls),
  list: (cls = 'ui-icon') => svg('<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>', cls),

  // Subjects & Topics
  globe: (cls = 'ui-icon') => svg('<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>', cls),
  cloud: (cls = 'ui-icon') => svg('<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>', cls),
  database: (cls = 'ui-icon') => svg('<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>', cls),
  shieldCheck: (cls = 'ui-icon') => svg('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>', cls),
  pieChart: (cls = 'ui-icon') => svg('<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>', cls),
  award: (cls = 'ui-icon') => svg('<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>', cls),
};

/**
 * Returns the matching professional SVG icon for a subject ID.
 */
export function getSubjectIconSvg(subjectId, className = 'ui-icon') {
  if (!subjectId) return icons.clipboard(className);
  if (subjectId.includes('az900')) return icons.cloud(className);
  if (subjectId === 'ipmd') return icons.database(className);
  if (subjectId === 'gdtd') return icons.shieldCheck(className);
  if (subjectId === 'hv') return icons.pieChart(className);
  return icons.clipboard(className);
}
