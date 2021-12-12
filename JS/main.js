function hiringValidation() {
  var x = document.getElementById("hiring");
  var form = document.getElementById("hiring_charge");

  if (x.checked) {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}