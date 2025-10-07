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
  'unity-level': 90,
  'csharp-level': 80,
  'ar-level': 50
  // add others as needed
};
const skillLevels2 = {
  'teamwork-level': 90,
  'Adaptability-level': 85,
  'Time-level': 80
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
// Get elements
const modal = document.getElementById('videoModal');
const videoElement = document.getElementById('projectVideo');
const closeBtn = document.querySelector('.close');

// Attach click event to all "View Project" buttons
document.querySelectorAll('.view-btn').forEach(button => {
  button.addEventListener('click', () => {
    const videoSrc = button.getAttribute('data-video');
    videoElement.src = videoSrc;
    modal.style.display = 'block';
  });
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  videoElement.pause();
  videoElement.src = "";
});

// Close on outside click
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    videoElement.pause();
    videoElement.src = "";
  }
});
