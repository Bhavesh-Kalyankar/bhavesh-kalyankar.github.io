const menu = document.querySelector('.menu');
const nav = document.querySelector('.desktop-nav');
if (menu) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('mobile-open');
    menu.textContent = open ? '×' : '☰';
  });
}
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', () => nav && nav.classList.remove('mobile-open'));
});
