import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postPasswordRecoveryTheater } from "../../redux/actions/index.js";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo a sala llena-sinfondo.png";
import style from "./LoginTheaters.module.css";

function validate(input) {
  let errors = {};
  if (input.email === "") {
    errors.email = "e-mail no puede estar vacio";
  }
  if (!input.email.includes("@")) {
    errors.email = "No es un email valido";
  }
  return errors;
}
const PasswordRecoveryTheater = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ email: "" });
  const [errors, setErrors] = useState({});

  function inputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postPasswordRecoveryTheater(input.email));
    window.location.href = `http://localhost:3000`;
    alert("Email enviado!");
    setInput({ email: "" });
  }

  return (
    <div className={style.loginContainer}>
      <div className={style.header}>
        <Link to="/">
          <img className={style.logo} src={logo} alt="A sala llena" />
        </Link>
      </div>
      <div className={style.formContainer}>
        <h2>Ingresa tu correo electronico</h2>
        <form className={style.inputs} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email..."
            value={input.email}
            name="email"
            onChange={inputChange}
          />
          {errors.email && <p>{errors.email}</p>}

          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default PasswordRecoveryTheater;
