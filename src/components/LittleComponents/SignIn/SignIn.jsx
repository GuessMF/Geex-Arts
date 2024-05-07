import React, {useState, useEffect} from "react";
import "./signIn.scss";
import logo from "../../../assets/images/modal_logo.webp";
import close_icon from "../../../assets/icons/close.svg";
import flag_icon from "../../../assets/icons/flag.svg";

export default function SignIn({modal, setModal, setSmsSended}) {
  const [phoneNumber, setPhoneNumber] = useState("");

  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.slice(0, 11);
    if (value.length >= 11) {
      value = `+7 ${value.slice(1, 4)} ${value.slice(4, 7)} ${value.slice(
        7,
        9
      )} ${value.slice(9, 11)}`;

      setDisabled(false);
    } else {
      setDisabled(true);
    }
    setPhoneNumber(value);
  };

  const handleClick = () => {
    setModal(!modal);
  };

  const nextPage = () => {
    if (!disabled) {
      setSmsSended(true);
    }
  };
  return (
    <div className="signIn">
      <button className="signIn__close_btn" onClick={handleClick}>
        <img src={close_icon} />
      </button>
      <img src={logo} className="signIn__logo" />
      <h3>Вход на платформу</h3>
      <p className="text">
        Код будет автоматически отправлен на Ваш номер телефона с помощью SMS
      </p>
      <p className="info">Номер телефона </p>
      <div className="signIn__input">
        <img src={flag_icon} />

        <input
          type="tel"
          placeholder="+7"
          pattern="[0-9]*"
          value={phoneNumber}
          onChange={handleChange}
        />
      </div>

      <button
        onClick={nextPage}
        className={disabled ? "signIn__enter disabled" : "signIn__enter"}
      >
        Получить код
      </button>

      <div className="signIn__bottom">
        <p className="text">Нет аккаунта?</p>
        <button className="signIn__registration">Зарегистрироваться</button>
      </div>
    </div>
  );
}
