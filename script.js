fetch('data.json')
  .then(res => res.json())
  .then(data => {
    // Update name and about
    document.getElementById('displayName').textContent = data.name;
    document.getElementById('aboutText').textContent = data.about;
    document.getElementById('footerName').textContent = data.name;

    // Update skills
    const skillsList = document.getElementById('skillsList');
    data.skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      skillsList.appendChild(li);
    });

    // Update projects
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

    // Update contact
    document.getElementById('contactEmail').textContent = data.contact.email;
    document.getElementById('contactLinkedIn').href = data.contact.linkedin;
    document.getElementById('contactGitHub').href = data.contact.github;
  })
  .catch(err => console.error('Error loading data:', err));
