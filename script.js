const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}});
const menu=document.querySelector('.menu'), nav=document.querySelector('.desktop-nav');
if(menu&&nav){menu.addEventListener('click',()=>{nav.classList.toggle('mobile-open');menu.textContent=nav.classList.contains('mobile-open')?'×':'☰'})}
