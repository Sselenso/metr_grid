const toggle = document.querySelector('.theme-toggle');
const root = document.querySelector(':root');
const body = document.querySelector('body');
const logo = document.querySelector('.header__logo');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('dark');
  root.classList.toggle('dark');
  body.classList.toggle('body_dark');
  
  if (toggle.classList.contains('dark')) {
    logo.src = './assets/img/metrica_logo_light.svg';
    logo.classList.add('logo_light');
  } else {
    logo.src = './assets/img/metrica_logo.svg';
    logo.classList.remove('logo_light');
  }
});