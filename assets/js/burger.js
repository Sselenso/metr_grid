const burgerBtn = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.burger__open');
const body = document.querySelector('body');
const exitIcon = document.querySelector('.burger__exit-icon');
const burgerLinks = document.querySelectorAll('.burger__link');

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

burgerMenu.addEventListener('click', function(event) {
  if (event.target.classList.contains('active')) {
    closeBurger();
  }
});

burgerLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    closeBurger();
  });
});