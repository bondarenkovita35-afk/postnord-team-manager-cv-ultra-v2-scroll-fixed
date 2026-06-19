const intro = document.querySelector('.intro');

// IMPORTANT:
// Do not block scrolling on CV / Personligt brev pages.
// The loading lock is only used on the start page where the 3D intro exists.
if (intro) {
  document.body.classList.add('loading');

  window.addEventListener('load', () => {
    setTimeout(() => {
      intro.classList.add('hide');
      document.body.classList.remove('loading');
    }, 15000);
  });
} else {
  document.body.classList.remove('loading');
}

const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - .5) * -6;
    const ry = ((x / rect.width) - .5) * 6;
    card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});
