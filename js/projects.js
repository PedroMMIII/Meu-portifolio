let currentIndex = 0; // Índice atual dos projetos exibidos
const allProjects = Array.from(document.querySelectorAll('#allProjects .projects-card'));
const projectsGrid = document.getElementById('projectsGrid');

function showProjects() {
  projectsGrid.innerHTML = ''; // Limpa os projetos exibidos

  const wrapper = document.createElement('div');
  wrapper.classList.add('projects-grid');

  // Exibe apenas 3 projetos a partir do índice atual
  allProjects.slice(currentIndex, currentIndex + 3).forEach((project) => {
    wrapper.appendChild(project.cloneNode(true));
  });

  projectsGrid.appendChild(wrapper);
}

function changeProjects(direction) {
  const maxIndex = allProjects.length - 3;

  currentIndex += direction * 3;

  if (currentIndex < 0) currentIndex = 0;
  else if (currentIndex > maxIndex) currentIndex = maxIndex;

  showProjects();
}

showProjects(); // Exibe os primeiros 3 projetos ao carregar a página
