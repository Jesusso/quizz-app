import { initRouter } from './router.js';
import { initTheme } from './theme.js';
import { initDB } from './db.js';
import { renderDashboard, renderQuiz, renderResults, renderStats } from './views.js';

async function init() {
  try {
    // Initialize theme first (synchronous, no flash)
    initTheme();

    // Initialize database
    await initDB();

    // Set up routes
    initRouter({
      '/': renderDashboard,
      '/quiz': renderQuiz,
      '/results': renderResults,
      '/stats': renderStats,
    });
  } catch (error) {
    console.error('Error initializing app:', error);
    document.getElementById('app').innerHTML = `
      <div style="padding: 2rem; text-align: center; color: var(--color-text-primary);">
        <h2>Error al iniciar la aplicación</h2>
        <p>${error.message}</p>
      </div>
    `;
  }
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
