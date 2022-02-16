import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { putViewer, getViewerDetail } from "../../redux/actions/index.js";
import { useParams } from "react-router-dom";
import style from "./ResetPasswordViewer.module.css";

const ResetPasswordViewer = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { id } = useParams();
  const detail = useSelector((state) => state.viewerDetail);

  useEffect(() => {
    dispatch(getViewerDetail(id));
  }, [dispatch, id]);

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
    dispatch(putViewer(id, input));
    alert("Contraseña actualizada!");
    window.location.href = `http://localhost:3000/LogInViewer`;
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
export default ResetPasswordViewer;
