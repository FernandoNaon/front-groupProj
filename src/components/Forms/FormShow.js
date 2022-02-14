import React, { useState, Fragment, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  postShow,
  postTicket,
  postNewsletterShow,
  theaterDetail,
} from "../../redux/actions/index.js";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Footer from "../Footer/Footer.js";
import Seat from "../Seats/Seats.js";
import { useDispatch, useSelector } from "react-redux";
import style from "./FormShow.module.css";

const FormShow = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const theater = useSelector((state) => state.theatersDetail);
  let { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(theaterDetail(id));
  }, [dispatch, id]);

  const [input] = useState({
    theaterId: id,
  });
  const [seatsavailable, setSeatAvailable] = useState([]);
  const [form] = useState(true);

  console.log(seatsavailable, "seats");
  console.log(id);
  const onSubmit = (data) => {
    const inputs = {
      ...input,
      name: data.name,
      summary: data.summary,
      genre: data.genre,
      length: data.length,
      image: data.image,
      ticketsQty: seatsavailable.length,
      rated: data.rated,
      date: data.date,
      time: data.time,
      originPrice: data.originPrice,
    };
    //let tickets={}
    console.log("input", inputs);

    for (var i = 0; i < seatsavailable.length; i++) {
      const tickets = {
        price: data.originPrice,
        seatNumber: seatsavailable[i],
        nameShow: data.name,
      };
      console.log("ticket", tickets);
      postTicket(tickets);
    }
    postShow(inputs);
    postNewsletterShow(theater.name);
    alert("Espectaculo agregado!");
    history.push(`/theaterHome/${id}`);
  };

  return (
    <div className={style.formContainer}>
      <div className={style.formData}>
        <div className={style.backContainer}>
          <Link to={`/theaterHome/${id}`}>
            <button className="btn btn-secondary">Volver</button>
          </Link>
        </div>
        <div className="text-center padding">
          <h1>Agrega un Espectaculo</h1>
        </div>
        <div className="form-group row">
          <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label className="form-label col-lg-12">
                  Nombre de la obra:
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre de la obra"
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
              <label className="form-label col-lg-12">
                Descripcion de la Obra:
              </label>
              <textarea
                type="text"
                name="summary"
                width="100"
                height="30"
                maxLength="1000"
                placeholder="Descripcion de la Obra. Max 1000 caracteres."
                className="form-control my-2"
                {...register("summary", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                  maxLength: {
                    value: 1000,
                    message: "No se pueden mas de 1000 caracteres",
                  },
                })}
              />
              <span className="text-danger text-small d-block mb-2">
                {errors.summary && errors.summary.message}
              </span>

              <label className="form-label col-lg-12">Pase de la Obra:</label>
              <input
                type="time"
                name="time"
                className="form-control my-2"
                {...register("time", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                })}
              />
              <span className="text-danger text-small d-block mb-2">
                {errors.time && errors.time.message}
              </span>
              <label className="form-label col-lg-12">
                Seleciona el Genero:{" "}
              </label>
              <select
                name="genre"
                className="form-control "
                {...register("genre", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                })}
              >
                <optgroup label="*OBRAS MAYORES*">
                  <option>Comedia</option>
                  <option>Drama</option>
                  <option>Tragedia</option>
                  <option>Tragicomedia</option>
                  <option>Monólogo</option>
                </optgroup>
                <optgroup label="*OBRAS MENORES*">
                  <option>Auto Sacramental</option>
                  <option>Entremes</option>
                  <option>Sainete</option>
                  <option>Farsa</option>
                  <option>Vodevil</option>
                </optgroup>
                <optgroup label="*OBRAS MUSICALES*">
                  <option>Ópera</option>
                  <option>Zarzuela</option>
                  <option>Opereta</option>
                  <option>Musical</option>
                  <option>Ballet</option>
                  <option>Danza</option>
                </optgroup>
              </select>
              <span className="text-danger text-small d-block mb-2">
                {errors.genre && errors.genre.message}
              </span>

              <label className="form-label col-lg-12">
                Seleciona el Tipo de Publico:{" "}
              </label>
              <select
                name="rated"
                className="form-control "
                {...register("rated", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                })}
              >
                <option>Todas las edades</option>
                <option>Apta para mayores de 13 años</option>
                <option>Apta para mayores de 16 años</option>
                <option>Apta para mayores de 18 años</option>
                <option>Exhibición condicionada</option>
              </select>
              <span className="text-danger text-small d-block mb-2">
                {errors.rated && errors.rated.message}
              </span>

              <label className="form-label col-lg-12">
                Duracion de la Obra:
              </label>
              <input
                type="number"
                name="length"
                title="Formato en minutos"
                placeholder="Minutos de la Obra"
                className="form-control "
                {...register("length", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                  pattern: {
                    value: /^(0|[1-9][0-9]*)$/,
                    message: "No se pueden numero negativos ni decimales",
                  },
                })}
              />
              <span className="text-danger text-small d-block mb-2">
                {errors.length && errors.length.message}
              </span>

              <label className="form-label col-lg-12">
                Imagenes de la obra:
              </label>
              <input
                type="url"
                name="image"
                className="form-control "
                {...register("image")}
              />
              <span className="text-danger text-small d-block mb-2">
                {errors.image && errors.image.message}
              </span>

              <label className="form-label col-lg-12">Fecha de la obra:</label>
              <input
                type="date"
                name="date"
                className="form-control "
                {...register("date", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                })}
              />
              <span className="text-danger text-small d-block mb-2">
                {errors.date && errors.date.message}
              </span>

              {/* <label className="form-label col-lg-12">Zona:</label>
                <select name="seatNumber" className="form-control "
                        {...register("seatNumber",{
                            required:{
                                value:true, 
                                message: "El campo es requerido",
                            }
                        })}>
                            <option>Platea</option>
                            <option selected>General</option>
                            <option>Palco</option>
                </select>
                <span className="text-danger text-small d-block mb-2">{errors.seatNumber&&errors.seatNumber.message}</span> */}

              {/* <label className="form-label col-lg-12">Entradas disponibles:</label>
                <input  type="number" 
                        name="ticketsQty" 
                        title="Introduzca las entradas disponibles"
                        placeholder="Entradas Disponibles"
                        className="form-control "
                        {...register("ticketsQty",{
                            required:{
                                value:true, 
                                message: "El campo es requerido",
                            }
                        })}/>
                        <span className="text-danger text-small d-block mb-2">{errors.ticketsQty&&errors.ticketsQty.message}</span> */}
              <div className={style.layout}>
                <label className="form-label col-lg-12">
                  Seleccione los asientos disponibles:
                </label>
                <Seat
                  seatsavailable={seatsavailable}
                  setSeatAvailable={setSeatAvailable}
                  form={form}
                ></Seat>
              </div>

              <label className="form-label col-lg-12">
                Precio de Original de las entradas:
              </label>
              <input
                type="number"
                name="originPrice"
                className="form-control "
                placeholder="Precio por entrada"
                {...register("originPrice", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                })}
              />
              <span className="text-danger text-small d-block mb-2">
                {errors.originPrice && errors.originPrice.message}
              </span>

              <button className="btn btn-primary" type="submit">
                Agregar Espectaculo
              </button>
            </form>
          </Fragment>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default FormShow;
