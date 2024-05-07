import React, {useState, useRef, useEffect} from "react";
import "./confirm.scss";
import logo from "../../../assets/images/modal_logo.webp";
import close_icon from "../../../assets/icons/close.svg";
import loader from "../../../assets/icons/loader.svg";

export default function Confirm({modal, setModal, setSmsSended}) {
  const [seconds, setSeconds] = useState(59);

  const [disabled, setDisabled] = useState(true);
  const [submiting, setSubmiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const [inputs, setInputs] = useState(["", "", "", "", "", ""]);
  const refs = Array.from({length: 6}).map(() => useRef());

  const handleChange = (index, value) => {
    value = value.replace(/\D/g, "");
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    if (value && index < 5) {
      refs[index + 1].current.focus();
    }
    if (index === 5 && value) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleBackspace = (index, event) => {
    if (event.key === "Backspace" && !inputs[index] && index > 0) {
      event.preventDefault();
      refs[index - 1].current.focus();
    }
  };

  const handleClick = () => {
    setSubmiting(true);
  };

  const handleClose = () => {
    setModal(!modal);
  };

  return (
    <div className="confirm">
      <button className="confirm__close_btn" onClick={handleClose}>
        <img src={close_icon} />
      </button>
      <img src={logo} className="confirm__logo" />
      <h3>Подтвердите номер телефона</h3>
      <p className="text">
        Отправим сообщение с 6-ти значным кодом <br /> на номер
        <span>+7 983 540-49-43</span>
        <a>Изменить</a>
      </p>

      <div className="confirm__input">
        {inputs.map((value, index) => (
          <input
            key={index}
            type="text"
            value={value}
            maxLength={1}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleBackspace(index, e)}
            ref={refs[index]}
          />
        ))}
      </div>

      <button
        className={disabled ? "confirm__enter disabled" : "confirm__enter"}
        onClick={handleClick}
      >
        {submiting ? <img src={loader} /> : " Подтвердить"}

        <div className="loader"></div>
      </button>
      {!submiting && (
        <div className="confirm__bottom">
          <p className="text">Отправить снова через 00:{seconds}</p>
        </div>
      )}
    </div>
  );
}
