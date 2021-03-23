const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const inputs = document.querySelector('.inputs');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
  inputs.classList.toggle('active');
})

const btnReservar = document.getElementById('btnReservar');

btnReservar.addEventListener('click', (e) => {
  e.preventDefault();

  const dateStart = document.getElementById('dateStart').value;
  const dateEnd = document.getElementById('dateEnd').value;
  const adultos = document.getElementById('adultos').value;
  const crianças3 = document.getElementById('crianças3').value;
  const crianças4 = document.getElementById('crianças4').value; 


  let data = new Date();
  let dataMais2 = data.setDate(data.getDate() + 1);

  var formatter = new Intl.DateTimeFormat('pt-BR');

  let dataFormated = formatter.format(dataMais2);

  let dataInicio = new Date(dateStart);
  let dataFinal = new Date(dateEnd);
  let dateStartFormated = formatter.format(dataInicio);
  let dateEndFormated = formatter.format(dataFinal);

  if(dateStartFormated && dateEndFormated < dataFormated){
    console.log('menor')
  }else{
    console.log('maior')
  }

})
