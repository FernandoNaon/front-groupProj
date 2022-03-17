import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  putViewer,
  getViewerDetail,
  deleteViewer,
} from "../../redux/actions/index.js";
import { useParams } from "react-router-dom";
import NavBarPerfilViewer from "../NavBar/NavBarPerfilViewer.js";
import style from "./FormPutViewer.module.css";
import { useForm } from "react-hook-form";

const FormPutViewer = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { id } = useParams();
  const detail = useSelector((state) => state.viewerDetail);
  const [edit, setEdit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  
 

  useEffect(() => {
    dispatch(getViewerDetail(id));
  }, [dispatch, id]);

  const changeEdit = () => {
    edit === false ? setEdit(true) : setEdit(false);
  };

  function onSubmit(data) {
    const cara = {
      name: data.name,
      password: data.password,
      //image: data.image,
    };
    swal({
      title: "Por favor confirma tus cambios",
      icon: "warning",
      buttons: ["Cancel", "Confirm"],
    }).then((res) => {
      if (res) {
        dispatch(putViewer(id, cara));
        swal({
          text: "Usuario actualizado con éxito",
          icon: "success",
          buttons: false,
        });
        setEdit(false);
        history.push(`/viewerHome/${id}`);
      } else {
        swal({
          title: "Revisa bien tus cambios👀",
          buttons: false,
        });
      }
    });
  }

  function handleSubmitDelete(event) {
    swal({
      title: "Estás seguro?",
      text: "Una vez borrado, no lo podrás recuperar!",
      icon: "warning",
      buttons: ["Cancel", "Confirm"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Usuario borrado con éxito", {
          icon: "success",
          button: false,
        });
        dispatch(deleteViewer(id));
        history.push("/");
      } else {
        swal({
          title: "Tu perfil seguirá con vida ✔👀!",
          button: false,
        });
      }
    });
  }

  return (
    <div className={style.formViewerContainer}>
      <div className={style.nav}>
        <NavBarPerfilViewer
          
          id={id}
          name={detail?.name}
        />
      </div>
      <div className={style.btnContainer}>
        <h2>Actualizar perfil</h2>
        <button onClick={changeEdit} className="btn btn-dark">
          Editar
        </button>
      </div>

      <div className={style.formViewerPut}>
        <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
          {/*<div className="col-md-6">
            <img
              src={detail?.image}
              alt="imagen de perfil"
              className={style.imagen}
            />
          </div>*/}

          {/*<div className="col-md-6">
            <label className="form-label col-lg-12">Imagen de Perfil: </label>
            {edit === false ? (
              <input
                readOnly="readonly"
                type="text"
                name="image"
                value={detail.image}
                className="form-control my-2"
              />
            ) : (
              <input
                type="url"
                name="image"
                placeholder="Ingresa una imagen"
                className="form-control my-2"
                {...register("image")}
              />
            )}
            </div>*/}

          <div className="col-md-6">
            <label className="form-label col-lg-12">Nombre</label>
            {edit === false ? (
              <input
                readOnly="readOnly"
                type="text"
                name="name"
                value={detail.name}
                className="form-control my-2"
              />
            ) : (
              <input
                type="text"
                name="name"
                className="form-control my-2"
                {...register("name", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                })}
              />
            )}
            {
              <span className="text-danger text-small d-block mb-2">
                {errors.name && errors.name.message}
              </span>
            }
          </div>
          <div className="col-md-6">
            <label className="form-label col-lg-12">Contraseña</label>
            {edit === false ? (
              <input
                readOnly="readonly"
                type="password"
                name="password"
                value={detail.password}
                className="form-control my-2"
              />
            ) : (
              <input
                type="text"
                name="password"
                placeholder="Ingresa una nueva contraseña"
                className="form-control my-2"
                {...register("password", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                  // pattern: {
                  //     value: /(?=(.*[0-9]))(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
                  //     message: "Debe tener una letra minúscula, una letra mayúscula, un número, mínimo 8 dígitos."
                  // }
                })}
              />
            )}
            {
              <span className="text-danger text-small d-block mb-2">
                {errors.password && errors.password.message}
              </span>
            }
          </div>

          <div>
            {edit === false ? (
              <button disabled type="submit" className="btn btn-dark">
                Actualizar
              </button>
            ) : (
              <button type="submit" className="btn btn-dark">
                Actualizar
              </button>
            )}
          </div>
        </form>
        <div className={style.btnContainer}>
          <button onClick={handleSubmitDelete} className="btn btn-danger">
            Borrar Usuario
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormPutViewer;
