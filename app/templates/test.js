function myFunction(id, nc) {
  var newContent = document.getElementById(id);
  newContent.value = nc;
}

function myFunction2(id) {
  var newContent = document.getElementById(id);
  newContent.value = "";
}

var checkbox = document.getElementById("switch1");

checkbox.addEventListener("change", function() {
    if (this.checked) {
      myFunction("demo2"; "Test Text");

    } else {
      myFunction2("demo2");
    }
});
