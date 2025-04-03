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
