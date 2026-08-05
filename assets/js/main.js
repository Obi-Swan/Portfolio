
const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) root.dataset.theme = savedTheme;

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('portfolio-theme', next);
  });
}
if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => {
    mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
  });
}
document.querySelectorAll('[data-lightbox]').forEach(btn => {
  btn.addEventListener('click', () => {
    const box = document.getElementById('lightbox');
    const img = box.querySelector('img');
    img.src = btn.dataset.lightbox;
    img.alt = btn.querySelector('img')?.alt || '';
    box.classList.add('open');
  });
});
const lb = document.getElementById('lightbox');
if (lb) {
  lb.querySelector('button').addEventListener('click', () => lb.classList.remove('open'));
  lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
}
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
