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
      checkInput("tw9", "Werner-Heisenberg-Straße 20");
      checkInput("tw10", "68169");
      checkInput("tw11", "Germany");
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
