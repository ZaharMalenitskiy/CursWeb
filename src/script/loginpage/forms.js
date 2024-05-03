document.getElementById("loginbtn").addEventListener("click", function () {
  var inputField = document.getElementById("login");
  var inputValue = inputField.value;

  if (inputValue === "") { 
    inputField.placeholder = "Пожалуйста, заполните поле ввода!";   
  } 
  else {
    showPasswordForm()
  }
});

document.getElementById("login").addEventListener('keydown', function(event) {
  var keyCode = event.keyCode || event.which;

  if (keyCode === 32) {
      event.preventDefault();
  }
});

function showPasswordForm() {
  removeMainForm();
  login = document.getElementById("login");
  document.getElementById("login-regform").textContent = login.value;
  setTimeout(function () {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("password-form").style.display = "block";
    showMainForm();
  }, 500);

}

function showLoginForm() {
  removeMainForm();
  login = document.getElementById("login");
  login.placeholder = "Введите логин..."; 
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
