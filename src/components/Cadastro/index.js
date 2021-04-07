
const btnSubmit = document.getElementById('btnSubmit');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
let resultConfirm = document.getElementById('resultConfirm');
let resultPassword = document.getElementById('resultPassword');
let strong = document.getElementById('strong');
let progress = document.getElementById('progress');
var resultCEP;
var errorPassword;

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  let nome = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let cpf = document.getElementById('cpf').value;
  let cep = document.getElementById('cep').value;
  let state = document.getElementById('estado').value;
  let city = document.getElementById('city').value;
  let sex = document.getElementById('sex').value;
  let civil = document.getElementById('civil').value;
  let data = document.getElementById('date');


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

async function getCEP(url) {
  console.log(url)
  if(url === '' || cep === ''){
    result.innerText = "CEP inválido!";
    result.style.color = "red";
  }
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  const json = await response.json()
  console.log(json)
  if(json.uf !== state){
    result.innerText = "CEP e Estado não conferem!";
    result.style.color = "red";
  }else{
    result.innerText = "";
    return true;
  }
}

function validState(){
  console.log(state)
  if(state === '' || state == state.toLowerCase()){
    console.log('adsa')
    result.innerText = "Estado inválido!";
    result.style.color = "red";
  }else{
    return true;
  }
}

function validCity(){
  console.log(city);
  if(city === '' ){
    result.innerText = "Cidade inválida!";
    result.style.color = "red";
  }else{
    return true;
  }
}

function validSex(){
  if(sex === ''){
    result.innerText = "Sexo inválido!";
    result.style.color = "red";
  }else{
    result.innerText = "";
    return true;
  }
}

function validCivil(){
  if(civil === ''){
    result.innerText = "Estado Civil inválido!";
    result.style.color = "red";
  }else{
    return true;
  }
}

function ValidaDtNasc(data){
  const date = new Date();
  const formatter = new Intl.DateTimeFormat('pt-BR');
  const dataFormated = formatter.format(date);

  const dtNascFormat = new Date(data.value);
  const dtNascFormated = formatter.format(dtNascFormat);
  
  var strData = dtNascFormated;
  var partesData = strData.split("/");
  var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);

  if(data.value === '' || data < new Date('01/01/1900') || data > new Date()){
      return false;
  }
}


function validCPFResult(){
  if(cpf === '' || validaCPF(cpf) === false){
    console.log('caiu')
    result.innerText = "CPF inválido!";
    result.style.color = "red";
  }else{
    return true;
  }
}

function validDate(){
  console.log(validDatePrev(data));
  console.log(data.value);
   if(ValidaDtNasc(data) === false || data.value === ''){
      result.innerText = "Data de nascimento inválida!";
      result.style.color = "red";
    }
}

  function validEmail(){
    if (email == email.toLowerCase() && resultSplit === true && email !== "" && emailSplit.indexOf('@') !== -1 && 
    !email.endsWith('@') && (emailSplit.indexOf('.') !== -1 && email.indexOf('@') < email.indexOf('.') && !email.endsWith('.'))){
      return true;
    }else{
      result.style.marginTop = '-25px';
      result.innerText = "Email inválido!";
      result.style.color = "red";
    }
  }

  function validName(){
    if(nome == ''){
      result.style.marginTop = '-25px';
      result.innerText = "Nome inválido!";
      result.style.color = "red";
    }else{
      return true;
    }
  }
  
  function validPassword(){
    if(password.value === '' || errorPassword === true){
      resultPassword.innerText = "Senha inválida!";
      resultPassword.style.color = "red";
      return false;
    }else{
      resultPassword.innerText = "";
      return true;
    }
  }

  if( validName() === true && validEmail() === true && validState() === true && validCity() === true && validSex() === true && validCivil() === true
  && validCPFResult(cpf) === true && validPassword() === true && errorPassword === false){
    getCEP(cep).then(result => {
      if(result === true){
      window.location.href = "/src/components/Reserva/index.html";
    }})
    }
})

password.addEventListener('keyup', (e) => {

  function getMedium(){
    return regex.test(password.value);
  }

  function getStrong(){
    return regexStrong.test(password.value);
  }

  e.preventDefault();

  let regex = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{8,20}$/;
  let regexStrong = /(?=.*([}{,.^?#@~=+\-_\/*\-+.\|]).{2,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}/;

  if(password.value.length < 6 || password.value.length > 12){
    resultPassword.innerText = "Senha inválida!";
    resultPassword.style.color = "red";
    strong.innerText = "";
    progress.style.backgroundColor = '';
    errorPassword = true;
    if(password.value !== confirmPassword.value ){
      errorPassword = true;
    }
    console.log(errorPassword);
  }else{
    resultPassword.innerText = "";
    resultPassword.style.color = "red";
    if(password.value.lenght == 6 || regex.test(password.value) === false){
      strong.innerText = "Senha Fraca!";
      strong.style.color = "red";
      progress.style.width = '50px';
      progress.style.height = '4px';
      progress.style.backgroundColor = 'red';
    }else if(password.value.length > 6 && getMedium() === true && getStrong() === false){
      strong.innerText = "Senha Média!";
      strong.style.color = "green";
      progress.style.width = '100px';
      progress.style.height = '4px';
      progress.style.backgroundColor = 'green';
    } else if(password.value.length > 6 && getStrong() === true){
      strong.innerText = "Senha Forte!";
      strong.style.color = "blue";
      progress.style.width = '200px';
      progress.style.height = '4px';
      progress.style.backgroundColor = 'blue';
    }
  }
})

confirmPassword.addEventListener('keyup', (e) => {
  e.preventDefault();

  if(confirmPassword.value === '' || confirmPassword.value !== password.value){
    errorPassword = true;
    resultConfirm.innerText = "Senhas Diferentes!";
    resultConfirm.style.color = "red";
  }else{
    errorPassword = false;
    resultConfirm.innerText = "";
  }
})