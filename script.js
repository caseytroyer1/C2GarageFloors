// ── Scroll Reveal ──
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
reveals.forEach(el => revealObserver.observe(el));

// ── Nav scroll effect ──
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('nav-scrolled', window.scrollY > 40);
});

// ── Mobile Nav Toggle ──
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close nav when a link is clicked
document.querySelectorAll('.nav-close-link').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ── Expandable Service Cards ──
document.querySelectorAll('.service-expand-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.service-card');
    const isExpanded = card.classList.contains('expanded');

    // Close all other cards
    document.querySelectorAll('.service-card.expanded').forEach(c => {
      if (c !== card) c.classList.remove('expanded');
    });

    // Toggle this card
    card.classList.toggle('expanded', !isExpanded);
    btn.setAttribute('aria-expanded', !isExpanded);

    // Scroll card into view smoothly
    if (!isExpanded) {
      setTimeout(() => {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  });
});
