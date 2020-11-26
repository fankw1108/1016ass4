function yesOrNo() {
  var x = document.getElementById("Yes");
  var y = document.getElementById("No");

  if (x.checked == true) {
    document.getElementById("if_no").disabled = true;
  } else if (y.checked == true) {
    document.getElementById("if_no").disabled = false;
  }
}

//submit the report
var modal = document.getElementById("myModal");
var btn = document.getElementById("submit");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}