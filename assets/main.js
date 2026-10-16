
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    toggle.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); toggle.textContent='☰';
  }));
}
const categories = document.querySelectorAll('.category-link');
categories.forEach(link => link.addEventListener('click', () => {
  categories.forEach(item => item.classList.remove('selected'));
  link.classList.add('selected');
}));
document.getElementById('year').textContent = new Date().getFullYear();
