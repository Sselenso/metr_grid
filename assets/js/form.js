function openForm() {
  document.body.classList.add("body-fixed");
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.body.classList.remove("body-fixed");
  document.getElementById("myForm").style.display = "none";
}

const closeIcon = document.querySelector('.close-icon');
closeIcon.addEventListener('click', closeForm);


// JS код для бургер-меню
// const burgerBtn = document.querySelector('.header__burger');
// const burgerMenu = document.querySelector('.burger__open');
// При клике на кнопку, добавляем/удаляем классы для открытия/закрытия бургер-меню
// burgerBtn.addEventListener('click', function() {
// burgerBtn.classList.toggle('active');
// burgerMenu.classList.toggle('active');
// });