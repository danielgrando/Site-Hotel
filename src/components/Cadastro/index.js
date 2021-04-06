
const btnSubmit = document.getElementById('btnSubmit');
let password = document.getElementById('password').value;
let resultPassword = document.getElementById('resultPassword');
var resultCEP;
btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  let nome = document.getElementById('name');
  let email = document.getElementById('email').value;
  let cpf = document.getElementById('cpf').value;
  let cep = document.getElementById('cep').value;
  let state = document.getElementById('estado').value;
  let city = document.getElementById('city').value;
  let sex = document.getElementById('sex').value;
  let civil = document.getElementById('civil').value;
  let data = document.getElementById('date');



  console.log(cpf);
  let emailSplit = email.split("");

  let resultSplit = isNaN(emailSplit[0]);

  function validaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

function callback_cep(conteudo) {
  console.log(conteudo);
  if (!("erro" in conteudo)) {
    console.log(conteudo)
      resultCEP = conteudo.uf;
  }
}

function validaCEP(cep){
  console.log(cep);
  var script = document.createElement('script');
  script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=callback_cep';
  document.body.appendChild(script);
}

function validState(){
  if(state === '' || state == state.toLowerCase()){
    console.log('adsa')
    result.innerText = "Estado inválido!";
    result.style.color = "red";
  }
}

function validCity(){
  if(city === '' ){
    result.innerText = "Cidade inválida!";
    result.style.color = "red";
  }
}

function validCEP(cep){
  if(cep === ''){
    result.innerText = "CEP inválido!";
    result.style.color = "red";
    }else{
      validaCEP(cep);
      console.log(state,resultCEP)
        if(state !== resultCEP){
          result.innerText = "CEP e Estado não conferem!";
          result.style.color = "red";
        }
    }
}
function validSex(){
  if(sex === ''){
    result.innerText = "Sexo inválido!";
    result.style.color = "red";
  }
}

function validCivil(){
  if(civil === ''){
    result.innerText = "Estado Civil inválido!";
    result.style.color = "red";
  }
}

function validDatePrev(data){
  const date = new Date();
  const formatter = new Intl.DateTimeFormat('pt-BR');
  const dataFormated = formatter.format(date);

  const dtNascFormat = new Date(data.value);
  const dtNascFormated = formatter.format(dtNascFormat);
  
  var strData = dtNascFormated;
  var partesData = strData.split("/");
  var data2 = new Date(partesData[2], partesData[1] - 1, partesData[0]);

  if(data.value === '' || data2 < new Date('01/01/1900') || data2 > new Date()){
      return false;
  }
}


function validCPFResult(){
  console.log('caiu')
  if(cpf === '' || validaCPF(cpf) === false){
    console.log('caiu')
    res.innerText = "CPF inválido!";
    result.style.color = "red";
  }
}

function validDate(){
   if(validDatePrev(data) === false || data.value === ''){
      result.innerText = "Data de nascimento inválida!";
      result.style.color = "red";
    }
}


  if (email == email.toLowerCase() && resultSplit === true && email !== "" && emailSplit.indexOf('@') !== -1 && 
  !email.endsWith('@') && (emailSplit.indexOf('.') !== -1 && email.indexOf('@') < email.indexOf('.') && !email.endsWith('.'))){
    validCEP(cep);
    validState();
    validCity();
    validSex();
    validCivil();
    validDate();
    validCPFResult();


      // window.location.href = "/components/Reserva/index.html";
  }else{
    result.innerText = "Email inválido!";
    result.style.color = "red";
  }
})
