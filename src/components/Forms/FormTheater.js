import React, { useRef, useEffect } from "react";
import { createTheater } from "../../redux/actions";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import style from "./FormTheater.module.css";
import { Navbar, Container } from "react-bootstrap";
import { allTheaters } from "../../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";

const FormTheater = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const email = useRef({});
  email.current = watch("email", "");
  let history = useHistory();
  const theaters = useSelector((state) => state.theaters);
  useEffect(() => {
    dispatch(allTheaters());
  }, [dispatch]);
  let valido;
  valido = theaters?.find((e) => e.email === email.current);

  const onSubmit = (data) => {
    let inputs = {
      name: data.name,
      //image: data.image,
      CUIT: data.CUIT,
      adress: data.adress,
      email: data.email,
      password: data.password,
      province: data.province,
      phoneNumber: data.phoneNumber,
    };
    createTheater(inputs);
    swal("Teatro creado con éxito", "", "success");
    history.push("/loginteatres");
  };
  return (
    <div className={style.formTheaterContainer}>
      <div className={style.navDetail}>
        <Navbar
          className={style.heigthConfig}
          bg="dark"
          variant="dark"
          expand={false}
        >
          <Container fluid>
            <div className={style.left}>
              <Navbar.Brand href="/">
                <p className={style.logo}>A Sala Llena</p>
              </Navbar.Brand>
            </div>
          </Container>
        </Navbar>
      </div>

      <div className={style.formTheaterCreate}>
        <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
          <h3 className={style.title}>Registrá tu Teatro</h3>
          <div className="col-md-12">
            <label className="form-label col-lg-12">Nombre</label>
            <input
              title="Ingrese el Nombre del Teatro"
              type="text"
              name="name"
              placeholder="Nombre del Teatro"
              className="form-control my-2"
              {...register("name", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.name && errors.name.message}
            </span>
          </div>

          <div className="col-md-12">
            <label>Email</label>
            <input
              title="ejemplo: usuario@nombre.com"
              type="text"
              name="email"
              placeholder="Ingrese su Correo Electrónico"
              className="form-control my-2"
              {...register("email", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Este formato de correo no es el adecuado",
                },
                validate: () => valido === undefined || "Este correo ya existe",
              })}
            />
            {
              <span className="text-danger text-small d-block mb-2">
                {errors.email && errors.email.message}
              </span>
            }
          </div>

          <div className="col-md-12">
            <label className="form-label col-lg-12">CUIT</label>
            <input
              type="text"
              name="CUIT"
              placeholder="CUIT"
              className="form-control my-2"
              {...register("CUIT", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.CUIT && errors.CUIT.message}
            </span>
          </div>

          <div className="col-md-6">
            <label>Contraseña</label>
            <input
              title="Debe tener una letra minúscula, una letra mayúscula, un número, mínimo 8 dígitos."
              type="password"
              name="password"
              placeholder="Ingrese su Contraseña"
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
          </div>

          <div className="col-md-6">
            <label>Repite tu contraseña</label>
            <input
              title="Debe tener una letra minúscula, una letra mayúscula, un número, mínimo 8 dígitos."
              type="password"
              name="newpassword"
              placeholder="Repita la contraseña"
              className="form-control my-2"
              {...register("newpassword", {
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
                {errors.newpassword && errors.newpassword.message}
              </span>
            }
          </div>

          <div className="col-md-6">
            <label>Provincia</label>
            <select
              className="form-control my-2"
              name="province"
              {...register("province", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
              })}
            >
              <option selected disabled="disabled" value="">
                Seleccione una Provincia
              </option>
              <option>Buenos Aires</option>
              <option>Cordoba</option>
              <option>Santa Fe</option>
              <option>Catamarca</option>
              <option>Chaco</option>
              <option>Chubut</option>
              <option>Entre Rios</option>
              <option>Corrientes</option>
              <option>Formosa</option>
              <option>Jujuy</option>
              <option>La Pampa</option>
              <option>La Rioja</option>
              <option>Mendoza</option>
              <option>Misiones</option>
              <option>Neuquen</option>
              <option>Rio Negro</option>
              <option>Salta</option>
              <option>San Juan</option>
              <option>San Luis</option>
              <option>Santa Cruz</option>
              <option>Santiago del Estero</option>
              <option>Tierra del Fuego</option>
              <option>Tucuman</option>
              <option>CABA</option>
            </select>
            <span className="text-danger text-small d-block mb-2">
              {errors.province && errors.province.message}
            </span>
          </div>

          <div className="col-md-6">
            <label className="form-label col-lg-12">Número de teléfono</label>
            <input
              title="No se pueden número negativos ni decimales"
              type="text"
              name="phoneNumber"
              placeholder="Número de teléfono"
              className="form-control "
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
                pattern: {
                  value: /^(0|[1-9][0-9]*)$/,
                  message: "No se pueden usar números negativos ni decimales",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.phoneNumber && errors.phoneNumber.message}
            </span>
          </div>

          <div className="col-md-12">
            <label className="form-label ">Dirección</label>
            <input
              type="text"
              name="adress"
              placeholder="Dirección del Teatro"
              className="form-control "
              {...register("adress", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.adress && errors.adress.message}
            </span>
          </div>

          {/*<div className="col-md-12">
            <label>Imagen de perfil</label>
            <input
              type="url"
              width="100"
              height="30"
              name="image"
              alt="perfil"
              placeholder="Inserte una URL de imagen"
              className="form-control my-2"
              {...register("image", {})}
            />
            </div>*/}
          <div>
            <button className="btn btn-dark" type="submit">
              Registra Teatro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormTheater;
