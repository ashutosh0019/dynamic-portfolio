// Load data.json dynamically
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    // Typing effect
    typeEffect(data.name, document.getElementById('displayName'));

    document.getElementById('heroAboutText').textContent = data.about;
    document.getElementById('aboutSectionText').textContent = data.about;
    document.getElementById('footerName').textContent = data.name;

    // Skills
    const skillsList = document.getElementById('skillsList');
    data.skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      skillsList.appendChild(li);
    });

    // Projects
    const projectsContainer = document.getElementById('projectsContainer');
    data.projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;
      projectsContainer.appendChild(card);
    });

    // Contact
    document.getElementById('contactEmail').textContent = data.contact.email;
    document.getElementById('contactLinkedIn').href = data.contact.linkedin;
    document.getElementById('contactGitHub').href = data.contact.github;
  })
  .catch(err => console.error('Error loading data:', err));

// Typing effect
function typeEffect(text, element, delay=100) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, delay);
    }
  }
  typing();
}

// Animate sections on scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); }
  });
}, { threshold: 0.1 });
sections.forEach(section => observer.observe(section));

// Back to top
let topBtn = document.getElementById("topBtn");
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
