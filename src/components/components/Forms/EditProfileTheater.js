import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editProfileT, theaterDetail } from "../../redux/actions";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import NavBarTheater from "../NavBar/NavBarTheater";
import style from "./EditProfileTheater.module.css";

const EditProfileTheater = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { theatersDetail } = useSelector((state) => state);
  //let teatro = theaters.filter(el => el.id === id)
  const {
    name,
    image,
    CUIT,
    adress,
    email,
    password,
    province,
    phoneNumber,
    seatsQTY,
    score,
  } = theatersDetail;
  const [input, setInput] = useState({
    name: name ? `${name}` : "",
    image: image ? `${image}` : "",
    CUIT: CUIT ? `${CUIT}` : "",
    email: email ? `${email}` : "",
    password: password ? `${password}` : "",
    adress: adress ? `${adress}` : "",
    province: province ? `${province}` : "",
    phoneNumber: phoneNumber ? `${phoneNumber}` : "",
    seatsQTY: seatsQTY ? `${seatsQTY}` : "",
    score: score ? `${score}` : "",
  });
  const provinces = [
    "Buenos Aires",
    "Cordoba",
    "Santa Fe",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Corrientes",
    "Entre Rios",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquen",
    "Rio Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucuman",
    "CABA",
  ];
  // console.log('theaters', theaters)

  useEffect(() => {
    dispatch(theaterDetail(id));
  }, [dispatch]);

  const handleChange = ({ target: { name, value } }) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(editProfileT({ ...input, id }));
  }

  return (
    <div>
      <NavBarTheater />

      <form onSubmit={handleSubmit} className={style.formContainer}>
        {/* name */}
        <input
          name="name"
          type="text"
          value={input.name}
          onChange={handleChange}
          placeholder="Nombre del teatro"
        />
        {/* image*/}
        <input
          name="image"
          type="text"
          value={input.image}
          onChange={handleChange}
          placeholder="imagen"
        />
        {/*CUIT*/}
        <input
          name="CUIT"
          type="text"
          value={input.CUIT}
          onChange={handleChange}
          placeholder="CUIT"
        />
        {/* email */}
        <input
          name="email"
          type="text"
          value={input.email}
          onChange={handleChange}
          placeholder="email"
        />
        {/* password  */}
        <input
          name="password"
          type="text"
          value={input.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {/* adress */}
        <input
          name="adress"
          type="text"
          value={input.adress}
          onChange={handleChange}
          placeholder="Direccion"
        />
        {/* province */}
        <select onChange={handleChange} name="province" value={input.province}>
          <option value="">Province</option>
          {provinces.map((el) => (
            <option value={el}>{el}</option>
          ))}
        </select>
        {/* phoneNumber */}
        <input
          name="phoneNumber"
          type="text"
          value={input.phoneNumber}
          onChange={handleChange}
          placeholder="Telefono"
        />
        {/* seatsQTY */}
        <input
          name="seatsQTY"
          type="number"
          value={input.seatsQTY}
          min="1"
          max="1000"
          onChange={handleChange}
          placeholder="Cantidad de asientos"
        />
        <input
          name="score"
          type="range"
          value={input.score}
          min="1"
          max="5"
          onChange={handleChange}
          placeholder="Score"
        />
        <lavel>{input.score}</lavel>
        {/* {input.name && input.image &&
        input.adress && input.phoneNumber && input.province? 
        <button >Save</button>: 
        <button disabled>Save</button>} */}
        <button className={style.btn}>Guardar cambios</button>
      </form>
      {/* <div className={style.footerContainer}>
        <Footer />
      </div> */}
    </div>
  );
};

export default EditProfileTheater;
