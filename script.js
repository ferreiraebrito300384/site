// Animações ao rolar a página
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -50px 0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Menu mobile toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle?.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.setAttribute('aria-label', 
    navMenu.classList.contains('active') ? 'Fechar menu' : 'Abrir menu'
  );
});

// Fechar menu ao clicar em link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => navMenu?.classList.remove('active'));
});

// Header com scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
});
