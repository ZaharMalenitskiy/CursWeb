import React, { useState } from "react";
import Popup from "./Popup";
import "./App.css";

function App() {
  // Состояние для отслеживания текущего шага регистрации
  const [step, setStep] = useState(1);
  // Состояние для хранения значения логина
  const [loginValue, setLoginValue] = useState("");
  // Состояние для хранения значения логина
  const [passwordValue, setPasswordValue] = useState("");
  // Состояние для отображения всплывающего окна
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  // Состояние для отображения всплывающего окна
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);

  // Запрет ввода пробелов в поля ввода
  const handleInputKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  // Функция для обновления значения логина и проверки валидности
  const handleLoginChange = (e) => {
    setLoginValue(e.target.value);
  };
  // Функция для обновления значения логина и проверки валидности
  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  // Функция для перехода на следующий шаг
  const goToNextStep = () => {
    // Проверяем, введен ли логин
    if (loginValue.trim() !== "") {
      document.getElementById("username").innerText = document.getElementById("login-input").value
      setStep(2);
    } else {
      setShowLoginPopup(true); // Показываем всплывающее окно при пустом логине
      setTimeout(() => setShowLoginPopup(false), 1000);
    }
  };

  const checkPassword = () => {
    if (passwordValue.trim() !== "") {
      alert("DONE!");
    } else {
      setShowPasswordPopup(true); // Показываем всплывающее окно при пустом логине
      setTimeout(() => setShowPasswordPopup(false), 1000);
    }
  };

  // Функция для перехода на предыдущий шаг
  const goToPreviousStep = () => {
    setStep(1);
  };

  // Функция для закрытия всплывающего окна
  const closePopup = () => {
    setShowLoginPopup(false);
  };

  return (
    <div className="registration-container">
      {/* Форма Входа */}
      <div className={`registration-form ${step === 1 ? "fade-in" : "fade-out"}`}>
        <div className="titlelogin1">Авторизация</div><div className="titlelogin2">MusicForYou</div>
        <div className={`input-container`}>
          <input id="login-input" type="text" placeholder="Введите логин..." value={loginValue} onChange={handleLoginChange} onKeyDown={handleInputKeyDown} />
        </div>
        <button className="loginbtn" type="button" onClick={goToNextStep}>Продолжить</button>
        <button className="regbtn" type="button">Регистрация</button>
      </div>

      {/* Форма Регистрации */}
      <div className={`registration-form ${step === 2 ? "fade-in" : "fade-out"}`}>
        <div className="titlepass1">Авторизация</div><div className="titlepass2">MusicForYou</div>
        <div className="avatar"></div>
        <div id="username">UserName</div>
        <div className={`input-container`}>
          <input id="register-input" type="password" placeholder="Введите пароль..." value={passwordValue} onChange={handlePasswordChange} onKeyDown={handleInputKeyDown} />
        </div>
        <button className="submitbtn" type="button" onClick={checkPassword} >Подтвердить вход</button>
        <button id="backbutton" onClick={goToPreviousStep}>Назад</button>
        <div id="forgot-pass">Забыли пароль?</div>
      </div>

      {/* Всплывающее окно */}
      <Popup message="Пожалуйста, введите логин" onClose={closePopup} visible={showLoginPopup} />
      <Popup message="Пожалуйста, введите пароль" onClose={closePopup} visible={showPasswordPopup} />
    </div>
  );
}

export default App;

