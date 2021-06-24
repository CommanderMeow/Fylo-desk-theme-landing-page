function emailValidation () {
  const email = document.getElementById("email");
  if (!email.checkValidity()) {
    document.getElementById("invalid-message").style.visibility = "visible";
  } else {
    document.getElementById("invalid-message").style.visibility = "hidden";
  }


}
