import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  editProfileT,
  theaterDetail,
  deleteTheater,
} from "../../redux/actions";
import { useParams, useHistory } from "react-router-dom";
import NavBarTheater from "../NavBar/NavBarTheater";
import style from "./EditProfileTheater.module.css";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const EditProfileTheater = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const detail = useSelector((state) => state.theatersDetail);
  const [edit, setEdit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const changeEdit = () => {
    edit === false ? setEdit(true) : setEdit(false);
  };

  
  

  

  useEffect(() => {
    dispatch(theaterDetail(id));
  }, [dispatch, id]);

  function onSubmit(data) {
    const cara = {
      name: data.name,
      password: data.password,
      //image: data.image,
      adress: data.adress,
      phoneNumber: data.phoneNumber,
    };
    swal({
      title: "Estás seguro?",
      icon: "warning",
      buttons: ["Cancel", "Confirm"],
    }).then((res) => {
      if (res) {
        dispatch(editProfileT(id, cara));
        swal("Teatro actualizado!", "", "success");
        setEdit(false);
        history.push(`/theaterHome/${id}`);
      } else {
        swal("Revisa bien tus cambios👀!");
      }
    });
  }

  function handleSubmitDelete() {
    swal({
      title: "Estás seguro?",
      text: "Una vez borrado, no lo podrás recuperar!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Teatro borrado con éxito", {
          icon: "success",
        });
        dispatch(deleteTheater(id));
        history.push("/");
      } else {
        swal("Tu teatro seguirá con vida ✔👀!");
      }
    });
  }
  return (
    <div>
      <NavBarTheater id={id} name={detail?.name} />
      <div className={style.formTheaterContainer}>
        <div>
          <button
            onClick={changeEdit}
            className={style.btn}
            className="btn btn-dark"
          >
            Editar
          </button>
        </div>
        <div className={style.formTheaterPut}>
          <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
            {/*<div className="col-md-6">
              <img
                src={detail?.image}
                alt="imagen de perfil"
                className={style.imagen}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label col-lg-12">Imagen de Perfil </label>
              {edit === false ? (
                <input
                  readOnly="readonly"
                  type="text"
                  name="image"
                  value={detail?.image}
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
                  value={detail?.name}
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
                  value={detail?.password}
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
                  })}
                />
              )}
              {
                <span className="text-danger text-small d-block mb-2">
                  {errors.password && errors.password.message}
                </span>
              }
            </div>

            <div className="col-md-6">
              <label className="form-label col-lg-12">Dirección</label>
              {edit === false ? (
                <input
                  readOnly="readOnly"
                  type="text"
                  name="adress"
                  value={detail?.adress}
                  className="form-control my-2"
                />
              ) : (
                <input
                  type="text"
                  name="adress"
                  className="form-control my-2"
                  {...register("adress", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                  })}
                />
              )}
              {
                <span className="text-danger text-small d-block mb-2">
                  {errors.adress && errors.adress.message}
                </span>
              }
            </div>

            <div className="col-md-6">
              <label className="form-label col-lg-12">
                Número de Contacto{" "}
              </label>
              {edit === false ? (
                <input
                  readOnly="readOnly"
                  type="number"
                  name="phoneNumber"
                  value={detail?.phoneNumber}
                  className="form-control my-2"
                />
              ) : (
                <input
                  type="number"
                  name="phoneNumber"
                  className="form-control my-2"
                  {...register("phoneNumber", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                  })}
                />
              )}
              {
                <span className="text-danger text-small d-block mb-2">
                  {errors.phoneNumber && errors.phoneNumber.message}
                </span>
              }
            </div>
            <div>
              {edit === false ? (
                <button
                  disabled
                  type="submit"
                  className={style.btn}
                  className="btn btn-dark"
                >
                  Actualizar
                </button>
              ) : (
                <button
                  type="submit"
                  className={style.btn}
                  className="btn btn-dark"
                >
                  Actualizar
                </button>
              )}
            </div>
          </form>
        </div>
        <div className={style.btnContainer}>
          <button onClick={handleSubmitDelete} className="btn btn-danger">
            <span className=".glyphicon .glyphicon-remove">
              Eliminar Teatro
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileTheater;
