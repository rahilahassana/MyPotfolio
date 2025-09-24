// set footer year
document.getElementById('year').textContent = new Date().getFullYear();

// nav toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

navToggle.addEventListener('click', () => {
  siteNav.classList.toggle('open');
});

// skill bar animation
const skillLevels = {
  'unity-level': 85,
  'csharp-level': 80,
  'ar-level': 60
  // add others as needed
};
const skillLevels2 = {
  'teamwork-level': 85,
  'Adaptability-level': 80,
  'Time-level': 60
  // add others as needed
};

function animateSkills() {
  const skillsSection = document.querySelector('.skills');
  const offset = skillsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (offset < windowHeight - 100) {
    // Animate technical skills
    Object.entries(skillLevels).forEach(([cls, val]) => {
      const el = document.querySelector(`.${cls}`);
      if (el) {
        el.style.width = val + '%';
      }
    });

    // Animate soft skills
    Object.entries(skillLevels2).forEach(([cls, val]) => {
      const el = document.querySelector(`.${cls}`);
      if (el) {
        el.style.width = val + '%';
      }
    });

    // Remove event listener after animation
    window.removeEventListener('scroll', animateSkills);
  }
}

window.addEventListener('scroll', animateSkills);
animateSkills();