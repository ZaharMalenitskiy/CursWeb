function showPasswordForm() {
  removeMainForm();
  setTimeout(function () {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("password-form").style.display = "block";
    showMainForm();
  }, 500);

}

function showLoginForm() {
  removeMainForm();
  setTimeout(function () {
    document.getElementById("password-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
    showMainForm();
  }, 500);

}

function removeMainForm() {
  var mainForm = document.getElementById("mainform");
  mainForm.classList.remove("show")
  mainForm.classList.add("hide")
}

function showMainForm() {
  var mainForm = document.getElementById("mainform");
  mainForm.classList.remove("hide")
  mainForm.classList.add("show")
}