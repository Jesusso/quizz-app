let routes = {};
const state = {};

export function initRouter(routeConfig) {
  routes = { ...routeConfig };
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

export function navigate(path) {
  window.location.hash = path;
}

function handleRoute() {
  const hash = window.location.hash || '#/';
  const path = hash.slice(1) || '/';
  const app = document.getElementById('app');
  const route = routes[path];

  if (route) {
    app.innerHTML = '';
    // Trigger fade-in animation
    app.classList.remove('view-enter');
    void app.offsetWidth;
    app.classList.add('view-enter');
    route(app);

    // Update active nav link
    document.querySelectorAll('.nav__link').forEach(link => {
      const linkView = link.getAttribute('data-view');
      link.classList.toggle('nav__link--active',
        (path === '/' && linkView === 'dashboard') ||
        (path === '/stats' && linkView === 'stats')
      );
    });

    // Scroll to top
    window.scrollTo(0, 0);
  } else {
    navigate('/');
  }
}

export function setState(key, value) {
  state[key] = value;
}

export function getState(key) {
  return state[key];
}
