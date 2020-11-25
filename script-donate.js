//price slide bar
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function enableInput() {
  var checkBox = document.getElementById("same_address");
  if (checkBox.checked == true) {
    document.getElementById("address1").disabled = true;
    document.getElementById("optional1").disabled = true;
    document.getElementById("city1").disabled = true;
    document.getElementById("state1").disabled = true;
    document.getElementById("postcode1").disabled = true;
    document.getElementById("country1").disabled = true;
  } else {
    document.getElementById("address1").disabled = false;
    document.getElementById("optional1").disabled = false;
    document.getElementById("city1").disabled = false;
    document.getElementById("state1").disabled = false;
    document.getElementById("postcode1").disabled = false;
    document.getElementById("country1").disabled = false;
  }
}

function cardOrPaypal() {
  var x = document.getElementById("card");
  var y = document.getElementById("paypal");
  var c = document.getElementById("carddetail")
  var p = document.getElementById("linktopaypal")
  if (x.checked == true) {
    c.style.display = "block";
    p.style.display = "none";
  } else if (y.checked == true) {
    c.style.display = "none";
    p.style.display = "block";
  }

}