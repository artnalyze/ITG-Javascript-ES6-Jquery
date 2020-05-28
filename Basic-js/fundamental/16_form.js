function submitbtn() {
  var fullname = document.myform.fullname.value;
  var address = document.myform.address.value;
  document.getElementById("result").innerHTML = fullname + " " + address;
}
