
const btnSubmit = document.getElementById('btnSubmit');

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  let nome = document.getElementById('name');
  let email = document.getElementById('email').value;


  let resultNome = document.getElementById('resultNome');
  let resultEmail = document.getElementById('resultEmail');

  let emailSplit = email.split("");

  let resultSplit = isNaN(emailSplit[0]);
  
  if (email == email.toLowerCase() && resultSplit === true && email !== "" && emailSplit.indexOf('@') !== -1 && 
  !email.endsWith('@') && (emailSplit.indexOf('.') !== -1 && email.indexOf('@') < email.indexOf('.') && !email.endsWith('.'))){
    
    
  }else{
    resultEmail.innerText = "Email inválido!";
    resultEmail.style.color = "red";
  }

})