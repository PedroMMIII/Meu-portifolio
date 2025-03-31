let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.querySelector('.theme-switch');

function enableDarkmode() {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
}

function disableDarkmode() {
  document.body.classList.remove('darkmode');
  localStorage.removeItem('darkmode'); // remove a chave
}

if (darkmode === 'active') enableDarkmode();

themeSwitch.addEventListener('click', () => {
  darkmode = localStorage.getItem('darkmode');
  darkmode !== 'active' ? enableDarkmode() : disableDarkmode();
});
// -------------------------------------------------------------------

// Índice atual dos projetos que estão sendo exibidos
let currentIndex = 0;

// Pegamos todos os projetos dentro da div escondida "#allProjects"
const allProjects = Array.from(document.querySelectorAll('#allProjects .projects-card'));

// Pegamos a div onde os projetos serão mostrados
const projectsGrid = document.getElementById('projectsGrid');

function showProjects() {
  // Limpa o conteúdo atual de `projectsGrid`
  projectsGrid.innerHTML = '';

  // Criamos um novo container `div` para manter a organização dos projetos
  const wrapper = document.createElement('div');
  wrapper.classList.add('projects-grid');

  // Pegamos apenas os próximos 3 projetos (de acordo com o `currentIndex`)
  allProjects.slice(currentIndex, currentIndex + 3).forEach((project) => {
    // Clonamos o projeto e adicionamos no wrapper
    wrapper.appendChild(project.cloneNode(true));
  });

  // Adicionamos a nova lista de projetos ao projectsGrid
  projectsGrid.appendChild(wrapper);
}

function changeProjects(direction) {
  // Definimos o total de projetos disponíveis
  const totalProjects = allProjects.length;

  // Definimos o índice máximo para evitar que ultrapasse os limites
  const maxIndex = totalProjects - 3;

  // Atualizamos o índice atual com base na direção do botão pressionado
  currentIndex += direction * 3;

  // Garantimos que `currentIndex` nunca fique menor que 0
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  // Garantimos que `currentIndex` não passe do último grupo de projetos disponíveis
  else if (currentIndex > maxIndex) {
    currentIndex = maxIndex;
  }

  // Chamamos a função para atualizar a exibição dos projetos
  showProjects();
}

// Chamamos a função pela primeira vez para exibir os primeiros 3 projetos na tela
showProjects();