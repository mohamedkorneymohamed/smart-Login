
var userName = document.getElementById("userName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var btnSignUp = document.getElementById("signUp");
var containerUsers = [];

//////////signUp Condition////////

if (localStorage.getItem("accounts") != null) {
  containerUsers = JSON.parse(localStorage.getItem("accounts"));
}
function addUsers() {
  var allUsers = {
    clientName: userName.value,
    clientEmail: email.value,
    clientPassword: password.value,
  };
  if(containerUsers.length<1){
    containerUsers.push(allUsers);
    localStorage.setItem("accounts", JSON.stringify(containerUsers));
  }
  else if(containerUsers.length>=1){
      if(containerUsers.find(({ clientName }) => clientName === userName.value)!= undefined){
        password.nextElementSibling.classList.replace('d-none','d-block')
        password.nextElementSibling.innerHTML= "email already exists"
        password.nextElementSibling.nextElementSibling.classList.replace('d-block','d-none')
      }
      else{
        containerUsers.push(allUsers);
        localStorage.setItem("accounts", JSON.stringify(containerUsers));
        password.nextElementSibling.classList.replace('d-block','d-none')
        password.nextElementSibling.nextElementSibling.classList.replace('d-none','d-block')
        password.nextElementSibling.nextElementSibling.innerHTML="succes"
      }

}}
btnSignUp.addEventListener("click", function () {
    addUsers();
});