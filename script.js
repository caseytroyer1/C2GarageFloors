// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// Nav scroll effect
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('nav-scrolled', window.scrollY > 40);
});

// Quote form - redirect to Google Form
document.querySelector('.quote-form').addEventListener('submit', function(e) {
  e.preventDefault();
  window.open('https://docs.google.com/forms/d/e/1FAIpQLSfMvR1zNs_UolW2_5A9qH6h6My1h-8G58hn94s8CTj6aFTfgg/viewform?usp=dialog', '_blank');
});
