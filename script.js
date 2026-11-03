// NOVAI STUDIO RU - логика
console.log("NOVAÏ STUDIO RU loaded");

// Плавный скролл по якорям
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Легкий параллакс круга как на референсе
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const circle = document.querySelector('.circle');
      if (circle) {
        circle.style.transform = `translateY(${window.scrollY * 0.06}px)`;
      }
      ticking = false;
    });
    ticking = true;
  }
});

// Hover для кнопки LET'S TALK -> меняем стрелку
const talkBtns = document.querySelectorAll('.talk');
talkBtns.forEach(btn => {
  btn.addEventListener('mouseenter', () => btn.style.transform = 'translateY(-1px)');
  btn.addEventListener('mouseleave', () => btn.style.transform = 'translateY(0)');
});
