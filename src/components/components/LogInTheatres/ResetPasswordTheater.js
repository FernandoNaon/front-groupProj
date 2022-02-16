import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfileT, theaterDetail } from "../../redux/actions/index.js";
import { useParams } from "react-router-dom";
import style from "./ResetPasswordTheater.module.css";

const ResetPasswordTheater = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detail = useSelector((state) => state.TheaterDetail);

  useEffect(() => {
    dispatch(theaterDetail(id));
  }, [dispatch]);

  const [input, setInput] = useState({
    password: "",
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  function handleSubmit(e) {
    console.log(input);
    e.preventDefault();
    dispatch(editProfileT(id, input));
    alert("Contraseña actualizada!");
    window.location.href = `http://localhost:3000/loginteatres`;
  }

  return (
    <div className={style.editContainer}>
      <div className={style.title}>
        <h1>Actualizar contraseña</h1>
      </div>

      <div>
        <form onSubmit={handleSubmit} className={style.formContainer}>
          <label>Contraseña:</label>

          <input
            type="text"
            name="password"
            placeholder="Ingresa una nueva contraseña"
            value={input.password}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />

          <button type="submit" className={style.btn}>
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
};
export default ResetPasswordTheater;
