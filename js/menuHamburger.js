document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const navMenu = document.getElementById('nav-links');
  
    if (!menuButton || !navMenu) {
      console.error('Erro: Elementos do menu não encontrados!');
      return;
    }
  
    menuButton.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  });
  