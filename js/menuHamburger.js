document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu-button');
  // MUDANÇA AQUI: Selecionando pela CLASSE 'nav-links'
  const navMenu = document.querySelector('.nav-links');

  if (!menuButton || !navMenu) {
    console.error(
      'Erro: Elementos do menu não encontrados! Verifique se os seletores .menu-button e .nav-links estão corretos no HTML.',
    );
    return;
  }

  menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Opcional: Fechar o menu quando um link é clicado (útil para Single Page Applications)
  navMenu.querySelectorAll('li a').forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });
  });
});
