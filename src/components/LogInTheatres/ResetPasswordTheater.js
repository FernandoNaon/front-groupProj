import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { editProfileT, theaterDetail } from "../../redux/actions/index.js";
import { useParams, useHistory } from "react-router-dom";
import style from "./ResetPasswordTheater.module.css";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { Navbar, Container } from "react-bootstrap";

const ResetPasswordTheater = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  useEffect(() => {
    dispatch(theaterDetail(id));
  }, [dispatch]);

  function onSubmit(data) {
    const input = {
      password: data.password,
    };
    console.log(input);
    dispatch(editProfileT(id, input));
    swal("Contraseña actualizada!", "", "success");
    history.push("/loginteatres");
  }

  return (
    <div className={style.ResetTheaterContainer}>
      <Navbar
        className={style.heigthConfig}
        bg="dark"
        variant="dark"
        expand={false}
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <p className={style.logo}>A Sala Llena</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div>
        <h2>Actualizar contraseña</h2>
      </div>

      <div className={style.ResetTheaterPut}>
        <form onSubmit={handleSubmit(onSubmit)} className={style.formContainer}>
          <label>Nueva Contraseña</label>
          <input
            title="Debe tener una letra minúscula, una letra mayúscula, un número, mínimo 8 dígitos."
            type="password"
            name="password"
            placeholder="Nueva Contraseña"
            className="form-control my-2"
            {...register("password", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
            })}
          />
          {
            <span className="text-danger text-small d-block mb-2">
              {errors.password && errors.password.message}
            </span>
          }
          <br />
          <label>Repite tu contraseña</label>
          <input
            title="Debe tener una letra minúscula, una letra mayúscula, un número, mínimo 8 dígitos."
            type="password"
            name="passwordrepeat"
            placeholder="Repita la contraseña"
            className="form-control my-2"
            {...register("passwordrepeat", {
              required: {
                value: true,
                message: "El campo es requerido",
              },

              validate: (value) =>
                value === password.current || "La contraseña debe coincidir",
            })}
          />
          {
            <span className="text-danger text-small d-block mb-2">
              {errors.passwordrepeat && errors.passwordrepeat.message}
            </span>
          }
          <div className={style.btnContainer}>
            <button type="submit" className="btn btn-dark">
              Actualizar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ResetPasswordTheater;
