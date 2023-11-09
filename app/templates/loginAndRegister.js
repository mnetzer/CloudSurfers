var user = new Map([["123", "123"]])

function login() {
  var username = document.getElementById("login-un").value;
  var password = document.getElementById("login-pw").value;

  if(user.get(username)==password) {
    window.location.href="dashboard.html";
  }else {
    alert("Username or password incorrect!");
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
