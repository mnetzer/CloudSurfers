//show login pannel
var btnLogin = document.getElementById('tw3_2');
var boxLogin = document.getElementById('pop0');
var btnhide = document.getElementById('btn2');


btnLogin.onclick = function () {
  var info_tw4 = document.getElementById("tw4");
  var info_tw4_2 = document.getElementById("tw4_2");
  if(document.getElementById("tw3_2_1").innerHTML == "Login"){
    boxLogin.className = 'popout';
  }else{
    document.getElementById("tw3_2_1").innerHTML = "Login";
    info_tw4.className = "text-wrapper-4";
    info_tw4_2.className = "hidden";
  }
}

btnhide.onclick = function () {
  boxLogin.className = 'hidden';
}


var user = new Map([["123", "123"]])

function login() {
  var username = document.getElementById("login-un").value;
  var password = document.getElementById("login-pw").value;
  var info_tw4 = document.getElementById("tw4");
  var info_tw4_2 = document.getElementById("tw4_2");
  var info_un = document.getElementById("tw4_2_un");

  if(username== "" || password=="") {
    alert("Username or password incorrect!");
  }else {
    boxLogin.className = 'hidden';
    document.getElementById("tw3_2_1").innerHTML = "Log Out";
    info_tw4_2.className = "text-wrapper-4_2";
    info_un.innerHTML = username;
    info_tw4.className = "hidden";
  }
}

function register() {
  var username = document.getElementById("reg-un").value;
  var password = document.getElementById("reg-pw").value;

  user.set(username, password);
  alert("Registration successful. Please login!");
  document.getElementById("reg-un").value="";
  document.getElementById("reg-pw").value="";
  document.getElementById("reg-email").value="";
}
