const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const inputs = document.querySelector('.inputs');
const card = document.querySelector('.card');
const hoteis = document.querySelector('.hoteis');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
  inputs.classList.toggle('active');
})