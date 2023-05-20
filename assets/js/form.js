 const closeIcon = document.querySelector('.close-icon');

 function openForm() {
   document.body.classList.add("body-fixed");
   document.getElementById("myForm").style.display = "block";
 }

 function closeForm() {   document.body.classList.remove("body-fixed");
   document.getElementById("myForm").style.display = "none";
 }

 closeIcon.addEventListener('click', function() {
   closeForm();
 });




