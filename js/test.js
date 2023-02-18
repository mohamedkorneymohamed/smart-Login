// //////////////////////////variable signup //////////////////////////

// var userName = document.getElementById("userName");
// var email = document.getElementById("email");
// var password = document.getElementById("password");
// var btnSignUp = document.getElementById("signUp");
// var containerUsers = [];

// //////////signUp Condition////////

// if (localStorage.getItem("accounts") != null) {
//   containerUsers = JSON.parse(localStorage.getItem("accounts"));
// }
// function addUsers() {
//   var allUsers = {
//     clientName: userName.value,
//     clientEmail: email.value,
//     clientPassword: password.value,
//   };
//   if(containerUsers.length<1){
//     containerUsers.push(allUsers);
//     localStorage.setItem("accounts", JSON.stringify(containerUsers));
//   }
//   else if(containerUsers.length>=1){
//       if(containerUsers.find(({ clientName }) => clientName === userName.value)!= undefined){
//         password.nextElementSibling.classList.replace('d-none','d-block')
//         password.nextElementSibling.innerHTML= "email already exists"
//         password.nextElementSibling.nextElementSibling.classList.replace('d-block','d-none')
//       }
//       else{
//         containerUsers.push(allUsers);
//         localStorage.setItem("accounts", JSON.stringify(containerUsers));
//         password.nextElementSibling.classList.replace('d-block','d-none')
//         password.nextElementSibling.nextElementSibling.classList.replace('d-none','d-block')
//         password.nextElementSibling.nextElementSibling.innerHTML="succes"
//       }

// }}
// btnSignUp.addEventListener("click", function () {
//     addUsers();
// });
// //////////variable login////////

// var nameLogin = document.getElementById("nameLogin");
// var pwLogin = document.getElementById("pwLogin");
// var btnLogin = document.getElementById("btnLogin");

// //////////login Condition////////

// function loginUser() {
//   if(containerUsers.length>=1){
//     if(containerUsers.find(({ clientName }) => clientName === nameLogin.value)!= undefined){
//         btnLogin.parentElement.setAttribute('href', "Home.html");
//         pwLogin.nextElementSibling.classList.replace('d-block','d-none')
//         sessionStorage.setItem('nameLogin',nameLogin.value)
       
//       }
//     else{
// pwLogin.nextElementSibling.classList.replace('d-none','d-block')
// pwLogin.nextElementSibling.innerHTML='incorrect name or password'
//     }
//   }
//   else if((containerUsers.length<1)){
//     pwLogin.nextElementSibling.classList.replace('d-none','d-block')
//   pwLogin.nextElementSibling.innerHTML='incorrect name or password'
//   }
// }

// btnLogin.addEventListener("click", function () {
//   loginUser();
  
// });
// //////////////////////home condition////////////////////////////// 
// (function(){
//   if(document.getElementById('title')!=null){
//     document.getElementById('title').innerHTML=(`welcome ${sessionStorage.getItem('nameLogin')}`)
//   }
// }())

