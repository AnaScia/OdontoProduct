//LOGIN

let btnLogin = document.getElementById("btnLogin");
let emailLog = document.getElementById("email_log");
let passLog = document.getElementById("pass_log");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const data1 = {
    email: emailLog.value,
    password: passLog.value,
  };
  console.log(data1);
  window.location.href = "./index.html";
});

//REGISTER

let btnReg = document.getElementById("btnReg");
let userReg = document.getElementById("user_reg");
let emailReg = document.getElementById("email_reg");
let passReg = document.getElementById("pass_reg");

btnReg.addEventListener("click", (e) => {
  e.preventDefault();
  const data2 = {
    username: userReg.value,
    email: emailReg.value,
    password: passReg.value,
  };
  console.log(data2);
});