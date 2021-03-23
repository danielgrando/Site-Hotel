
const btnSubmit = document.getElementById('btnSubmit');

jQuery("#phone")
        .mask("(99) 9999-9999?9")
        .focusout(function (event) {  
            var target, phone, element;  
            target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
            phone = target.value.replace(/\D/g, '');
            element = $(target);  
            element.unmask();  
            if(phone.length > 10) {  
                element.mask("(99) 99999-999?9");  
            } else {  
                element.mask("(99) 09999-9999?9");  
            }  
        });

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  let nome = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let resultNome = document.getElementById('resultNome');
  let resultEmail = document.getElementById('resultEmail');

  let text = document.getElementById('text').value;


  let nomeSplit = nome.split("");

  let validName = isNaN(nomeSplit[0]);

  let emailSplit = email.split("");

  let resultSplit = isNaN(emailSplit[0]);
  console.log(resultSplit)

  console.log(validName);
  
  if (email == email.toLowerCase() && resultSplit === true && email !== ""){
    if(emailSplit.indexOf('@') !== -1 && !email.endsWith('@') && (emailSplit.indexOf('.') !== -1 && email.indexOf('@') < email.indexOf('.') && !email.endsWith('.'))){
      resultEmail.innerText = "Email inválido!";
      resultEmail.style.color = "red";
    }
  }

  if(validName === true && nome.length >= 3){
    // window.location.href = "/src/";
  }else{
    resultNome.innerText = "Nome inválido!";
    resultNome.style.color = "red";
  }if(text == ''){
    resultText.innerText = "Texto inválido!";
    resultText.style.color = "red";
  }
 
})
