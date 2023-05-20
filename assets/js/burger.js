const burgerBtn = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.burger__open');
const body = document.querySelector('body');
const exitIcon = document.querySelector('.burger__exit-icon');

function closeBurger() {
  burgerBtn.classList.remove('active');
  burgerMenu.classList.remove('active');
  body.classList.remove('body-fixed');
}

burgerBtn.addEventListener('click', function() {
  burgerBtn.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  body.classList.toggle('body-fixed');
});

exitIcon.addEventListener('click', function() {
  closeBurger();
});

