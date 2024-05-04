import React, { useState } from "react";
import Popup from "./Popup";
import DatePicker from "./DatePicker";
import "./LoginPage.css";

function LoginPage() {
  const [step, setStep] = useState(1);
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [showRegisterPopup, setshowRegisterPopup] = useState(false);
  const [showEmailPopup, setshowEmailPopup] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInputChange = (setState) => (e) => {
    setState(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  const goToNextStep = () => {
    const value = loginValue.trim();
    if (value !== "") {
      setStep(2);
      document.getElementById("username").innerText = value;
    } else {
      setShowLoginPopup(true);
      setTimeout(() => setShowLoginPopup(false), 1000);
    }
  };

  const goToPreviousStep = () => {
    setStep(1);
  };

  const checkPassword = () => {
    const value = passwordValue.trim();
    if (value !== "") {
      alert("DONE!");
    } else {
      setShowPasswordPopup(true);
      setTimeout(() => setShowPasswordPopup(false), 1000);
    }
  };

  const checkRegistrationData = () => {
    if (loginValue.trim() === "" || passwordValue.trim() === "" || emailValue.trim() === "" || genderValue.trim() === "") {
      setshowRegisterPopup(true);
      setTimeout(() => setshowRegisterPopup(false), 1000);
    }
    else if (!validateEmail(emailValue.trim())) {
      setIsValidEmail(false);
    }
    else {
      setIsValidEmail(true);
      alert("DONE!")
    }
  };

  const checkEmail = () => {
    if (emailValue.trim() === "") {
      setshowEmailPopup(true);
      setTimeout(() => setshowEmailPopup(false), 1000);
    }
    else if (!validateEmail(emailValue.trim())) {
      setIsValidEmail(false);
    }
    else {
      setIsValidEmail(true);
      alert("DONE!")
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const goToThirdStep = () => {
    setStep(3);
  };

  const goToFourthStep = () => {
    setStep(4);
  }

  const closePopup = () => {
    setShowLoginPopup(false);
    setShowPasswordPopup(false);
    setshowRegisterPopup(false);
    setIsValidEmail(true); // Reset email validation on popup close
  };

  return (
    <div className="registration-container">
      <div className={`registration-form ${step === 1 ? "fade-in" : "fade-out"}`}>
        <div className="titlelogin1">Авторизация</div>
        <div className="titlelogin2">MusicForYou</div>
        <div className={`input-container`}>
          <input id="login-input" type="text" placeholder="Введите логин..." value={loginValue} onChange={handleInputChange(setLoginValue)} onKeyDown={handleInputKeyDown} />
        </div>
        <button className="loginbtn" type="button" onClick={goToNextStep}>Продолжить</button>
        <button className="regbtn" type="button" onClick={goToThirdStep}>Регистрация</button>
      </div>

      <div className={`registration-form ${step === 2 ? "fade-in" : "fade-out"}`}>
        <div className="titlepass1">Авторизация</div>
        <div className="titlepass2">MusicForYou</div>
        <div className="avatar"></div>
        <div id="username">{loginValue}</div>
        <div className={`input-container`}>
          <input id="register-input" type="password" placeholder="Введите пароль..." value={passwordValue} onChange={handleInputChange(setPasswordValue)} onKeyDown={handleInputKeyDown} />
        </div>
        <button className="submitbtn" type="button" onClick={checkPassword}>Подтвердить вход</button>
        <button id="backbutton" onClick={goToPreviousStep}>Назад</button>
        <div id="forgot-pass" onClick={goToFourthStep}>Забыли пароль?</div>
      </div>

      <div className={`registration-form ${step === 3 ? "fade-in" : "fade-out"}`}>
        {/* Код для третьего шага */}
        <div className="titlepass1">Регистрация</div>
        <div className="titlepass2">MusicForYou</div>
        <div className={`input-container ${!isValidEmail ? "invalid" : ""}`}>
          <div>Логин</div>
          <input type="login" placeholder="Введите логин..." value={loginValue} onChange={handleInputChange(setLoginValue)} onKeyDown={handleInputKeyDown} />
        </div>
        <div className={`input-container ${!isValidEmail ? "invalid" : ""}`}>
          <div>Пароль</div>
          <input type="pass" placeholder="Введите пароль..." value={passwordValue} onChange={handleInputChange(setPasswordValue)} onKeyDown={handleInputKeyDown} />
        </div>
        <div className={`input-container ${!isValidEmail ? "invalid" : ""}`}>
          <div>EMail</div>
          <input type="email" placeholder="Введите email..." value={emailValue} onChange={handleInputChange(setEmailValue)} onKeyDown={handleInputKeyDown} />
        </div>
        {!isValidEmail && <div className="error-message">Введен некорректный email</div>}
        <div className={`input-container ${!isValidEmail ? "invalid" : ""}`}>
          <div>Пол</div>
          <input type="gender" placeholder="Укажите пол..." value={genderValue} onChange={handleInputChange(setGenderValue)} onKeyDown={handleInputKeyDown} />
        </div>
        <DatePicker />
        <button className="submitbtn" type="button" onClick={checkRegistrationData}>Подтвердить регистрацию</button>
        <button id="backbutton" onClick={goToPreviousStep}>Назад</button>
      </div>

      <div className={`registration-form ${step === 4 ? "fade-in" : "fade-out"}`}>
        <div className="titlepass1">Восстановление пароля</div>
        <div className="titlepass2">MusicForYou</div>
        <div className={`input-container ${!isValidEmail ? "invalid" : ""}`}>
          <div style={{ marginBottom: "1rem" }}>EMail</div>
          <input type="text" placeholder="Введите email..." value={emailValue} onChange={handleInputChange(setEmailValue)} onKeyDown={handleInputKeyDown} />
          {!isValidEmail && <div className="error-message">Введен некорректный email</div>}
        </div>
        <button className="submitbtn" type="button" onClick={checkEmail}>Отправить</button>
        <button id="backbutton" onClick={goToPreviousStep}>Назад</button>
      </div>
      
      <Popup message="Пожалуйста, заполните все поля" onClose={closePopup} visible={showRegisterPopup} />
      <Popup message="Пожалуйста, введите логин" onClose={closePopup} visible={showLoginPopup} />
      <Popup message="Пожалуйста, введите пароль" onClose={closePopup} visible={showPasswordPopup} />
      <Popup message="Пожалуйста, введите email" onClose={closePopup} visible={showEmailPopup} />
    </div>
  );
}

export default LoginPage;
