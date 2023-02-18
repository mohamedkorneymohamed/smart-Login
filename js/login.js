//////////variable login////////
var containerUsers = [];
if (localStorage.getItem("accounts") != null) {
  containerUsers = JSON.parse(localStorage.getItem("accounts"));
}
var nameLogin = document.getElementById("nameLogin");
var pwLogin = document.getElementById("pwLogin");
var btnLogin = document.getElementById("btnLogin");

//////////login Condition////////

function loginUser() {
  if(containerUsers.length>=1){
    if(containerUsers.find(({ clientName }) => clientName === nameLogin.value)!= undefined){
        btnLogin.parentElement.setAttribute('href', "Home.html");
        pwLogin.nextElementSibling.classList.replace('d-block','d-none')
        sessionStorage.setItem('nameLogin',nameLogin.value)
       
      }
    else{
pwLogin.nextElementSibling.classList.replace('d-none','d-block')
pwLogin.nextElementSibling.innerHTML='incorrect name or password'
    }
  }
  else if((containerUsers.length<1)){
    pwLogin.nextElementSibling.classList.replace('d-none','d-block')
  pwLogin.nextElementSibling.innerHTML='incorrect name or password'
  }
}

btnLogin.addEventListener("click", function () {
  loginUser();
  
});