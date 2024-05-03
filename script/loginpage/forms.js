function showPasswordForm() {
  var loginForm = document.getElementById("login-form");
  var passwordForm = document.getElementById("password-form");

  removeMainForm();
  setTimeout(function () {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("password-form").style.display = "block";
    showMainForm();
  }, 500);

}

function showLoginForm() {
  var loginForm = document.getElementById("login-form");
  var passwordForm = document.getElementById("password-form");

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


// ... (существующий код) ...

function showRestoreForm() {
  document.getElementById("password-form").style.display = "none";
  document.getElementById("restore-form").style.display = "block";
}

function showLoginForm() {
  document.getElementById("restore-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
}

// ... (существующий код) ...

// Измените обработчик клика по ссылке "Забыл пароль"
document.querySelector('.forgotpassword').addEventListener('click', function(event) {
  event.preventDefault(); // Отменяем переход по ссылке
  showRestoreForm();
});
