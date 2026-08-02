// Mobile nav overlay toggle

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navlinks');
const closeOverlay = document.getElementById('closeOverlay');
const desktopQuery = window.matchMedia('(min-width: 43.75rem)');

function openMenu() {
  navLinks.classList.add('is-open');
  hamburger.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  navLinks.classList.remove('is-open');
  hamburger.setAttribute('aria-expanded', 'false');
}

if (hamburger && navLinks && closeOverlay) {
  hamburger.addEventListener('click', openMenu);
  closeOverlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  desktopQuery.addEventListener('change', (e) => {
    if (e.matches) closeMenu();
  });
}