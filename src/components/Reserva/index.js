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
  const crianças3anos = document.getElementById('crianças3').value;
  const crianças12anos = document.getElementById('crianças12').value; 
  const resultReserva = document.getElementById('resultReserva');

  let data = new Date();
  let dataMais2 = data.setDate(data.getDate() + 1);

  var formatter = new Intl.DateTimeFormat('pt-BR');

  let dataFormated = formatter.format(dataMais2);

  let dataInicio = new Date(dateStart);
  let dataFinal = new Date(dateEnd);
  let dateStartFormated = formatter.format(dataInicio);
  let dateEndFormated = formatter.format(dataFinal);

  let adultosNumber = parseInt(adultos);
  let criançasNumber = parseInt(crianças3anos);
  let crianças12Number = parseInt(crianças12anos);

  function error(){
    resultReserva.innerText = "Reserva indisponível!";
    resultReserva.style.color = "red"; 
    resultReserva.style.margin = "2rem auto";
    btnReservar.style.marginTop = "-4.6rem"
  }

  function success(){
    resultReserva.innerText = "Reserva Solicitada!";
    resultReserva.style.color = "#adff29";
    resultReserva.style.margin = "2rem auto";
    btnReservar.style.marginTop = "-4.6rem"
  }

if((dateStartFormated && dateEndFormated < dataFormated) || (dateStartFormated >= dateEndFormated) ||(adultosNumber < 1 || adultosNumber > 4) ||
  (criançasNumber < 0 || criançasNumber > 3) || (crianças12Number < 0 || crianças12Number > 4) || 
  isNaN(adultosNumber) === true || isNaN(criançasNumber) === true || isNaN(crianças12Number) === true){
    error();
  }else{
    success();
  }
})
