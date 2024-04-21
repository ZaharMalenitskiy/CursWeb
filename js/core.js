function showPasswordForm() {
  // Получаем значение логина (необязательно, если не нужно его использовать)
  var login = document.getElementById("login").value; 

  // Скрываем форму ввода логина
  document.getElementById("login-form").style.display = "none";

  // Показываем форму ввода пароля
  document.getElementById("password-form").style.display = "block";
}
