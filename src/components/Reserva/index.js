const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const inputs = document.querySelector('.inputs');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
  inputs.classList.toggle('active');
})