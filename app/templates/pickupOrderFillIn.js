function checkInput(id,nc) {
  var newContent = document.getElementById(id);
  newContent.value = nc;
}

function checkReset(id) {
  var newContent = document.getElementById(id);
  newContent.value = "";
}

var adressInput = document.getElementById("cbAddress");

adressInput.addEventListener("change", function() {
    if (this.checked) {
      checkInput("tw9", "Model Street XX");
      checkInput("tw10", "00000");
      checkInput("tw11", "Model City");
    } else {
      checkReset("tw9");
      checkReset("tw10");
      checkReset("tw11");
    }
});

function returnToDashboard() {
  window.location.href="dashboard_loggedin.html";
}

function submitOrder() {
  window.location.href="orderSubmitted.html";
}

function cancelOrder() {
  window.location.href="orderCancelled.html";
}
