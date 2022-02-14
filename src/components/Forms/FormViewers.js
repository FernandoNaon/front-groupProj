import React, { Fragment } from "react";
import { postViewer } from "../../redux/actions/index.js";
import { useForm } from "react-hook-form";
import Footer from "../Footer/Footer.js";

import { useHistory } from "react-router-dom";
const FormViewers = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const inputs = {
      name: data.name,
      email: data.email,
      password: data.password,
      image: data.image,
      province: data.province,
    };
    postViewer(inputs);
    alert("Usuario creado con exito");
    history.push(`/loginviewer`);
  };

  return (
    <div className="card border-success ">
      <Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            placeholder="Ingrese su Nombre"
            className="form-control my-2"
            {...register("name", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
            })}
          />
          {
            <span className="text-danger text-small d-block mb-2">
              {errors.name && errors.name.message}
            </span>
          }

          <label>Email:</label>
          <input
            type="text"
            name="email"
            placeholder="Ingrese su Correo Electronico"
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
            })}
          />
          {
            <span className="text-danger text-small d-block mb-2">
              {errors.email && errors.email.message}
            </span>
          }

          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            placeholder="Ingrese su Contraseña"
            className="form-control my-2"
            {...register("password", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
              // minLength: {
              //     value: 8,
              //     message: "Debe tener una letra minúscula, una letra mayúscula, un número, mínimo 8 dígitos."
              // },
              // pattern: {
              //     value: /(?=(.*[0-9]))(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
              //     message: "Debe tener una letra minúscula, una letra mayúscula, un número, mínimo 8 dígitos."
              // }
            })}
          />
          {
            <span className="text-danger text-small d-block mb-2">
              {errors.password && errors.password.message}
            </span>
          }

          <label>Imagen de perfil:</label>
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
          <label>Selecciona la Provincia:</label>
          {/* <Select options={optionsProvince} 
                            onChange={(e)=>{handleInputChange(e)}}/>   */}
          <select
            className="form-control"
            name="province"
            {...register("province", {})}
          >
            <option default>Seleccione una Provincia</option>
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
          <button className="btn btn-primary">Enviar</button>
        </form>
      </Fragment>
      {/* <Footer/> */}
    </div>
  );
};
export default FormViewers;
