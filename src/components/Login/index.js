
const btnSubmit = document.getElementById('btnSubmit');

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let resultEmail = document.getElementById('resultEmail');
  let resultPassword = document.getElementById('resultPassword');

  let emailSplit = email.split("");

  let resultSplit = isNaN(emailSplit[0]);

  if (email == email.toLowerCase() && resultSplit === true && email !== ""){
    if(emailSplit.indexOf('@') !== -1 && !email.endsWith('@') && (emailSplit.indexOf('.') !== -1 && email.indexOf('@') < email.indexOf('.') && !email.endsWith('.'))){
        if(password == ""){
          resultPassword.innerText = "Senha inválida!";
          resultPassword.style.color = "red";
        }else{
          window.location.href = "/src/components/Reserva/index.html";
        }
    }else{
        resultEmail.innerText = "Email inválido!";
        resultEmail.style.color = "red";
      }
  }else{
      resultEmail.innerText = "Email inválido!";
      resultEmail.style.color = "red";
    }
})