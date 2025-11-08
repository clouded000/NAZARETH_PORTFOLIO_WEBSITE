/* ===========================================================
   script.js — Shared interactions for all pages
   Sections:
     - LANDING (explore button)
     - MAIN (hero parallax)
     - ABOUT (resume click logging)
     - SKILLS (card hover)
     - PROJECTS (hover class)
     - CONTACT (social button logging)
   =========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* === LANDING PAGE: EXPLORE BUTTON === */
  const explore = document.getElementById('exploreBtn');
  if (explore) {
    explore.addEventListener('click', () => {
      // fade-out then navigate to mainpage
      document.body.style.transition = 'opacity 0.45s ease';
      document.body.style.opacity = '0';
      setTimeout(() => {
        window.location.href = 'mainpage.html';
      }, 450);
    });

    // affordance: keyboard support (Enter)
    explore.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') explore.click();
    });
  }

  /* === MAIN PAGE: HERO PARALLAX (subtle) === */
  const hero = document.querySelector('.hero-section');
  if (hero) {
    window.addEventListener('scroll', () => {
      const sc = window.scrollY;
      // small parallax move on background (if using background-image on body/main)
      hero.style.backgroundPosition = `center ${-sc * 0.12}px`;
      // slight transform on title for parallax feel
      const title = hero.querySelector('.pixel-title');
      if (title) title.style.transform = `translateY(${sc * 0.02}px)`;
    });
  }

  /* === ABOUT PAGE: Resume button logging (placeholder) === */
  const resumeBtn = document.querySelector('.resume-btn');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
      // This is just a placeholder hook — you can add analytics or other behaviors here.
      console.log('Resume button clicked (resume.pdf).');
    });
  }

  /* === SKILLS PAGE: Card micro-interactions === */
  const skillCards = document.querySelectorAll('.pixel-card');
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)';
      card.style.transition = 'transform 0.12s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });

  /* === PROJECTS PAGE: Hover classes for additional logic === */
  const projects = document.querySelectorAll('.project-card');
  projects.forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('hovered'));
    card.addEventListener('mouseleave', () => card.classList.remove('hovered'));
  });

  // === PARALLAX SHOWCASE ===
const layers = document.querySelectorAll('.parallax-layer');
if (layers.length > 0) {
  window.addEventListener('scroll', () => {
    const sc = window.scrollY;
    layers.forEach(layer => {
      const depth = layer.classList.contains('back')
        ? 0.1
        : layer.classList.contains('mid')
        ? 0.3
        : 0.6; // front moves faster
      layer.style.transform = `translateY(${sc * depth}px)`;
    });
  });
}


  /* === CONTACT PAGE: Social buttons (placeholder behavior) === */
  const socials = document.querySelectorAll('.pixel-btn.social');
  socials.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // If the href is '#', prevent default and log (placeholder)
      if (btn.getAttribute('href') === '#') {
        e.preventDefault();
        console.log(`Social button clicked: ${btn.textContent.trim()}`);
        alert(`${btn.textContent.trim()} link not set — replace href with your profile URL.`);
      }
    });
  });

  /* === Accessibility: Keyboard nav for navbar links === */
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => link.setAttribute('tabindex', '0'));
});
