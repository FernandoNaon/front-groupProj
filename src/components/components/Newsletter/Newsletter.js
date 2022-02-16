import React, { useState, useEffect } from "react";
import NavBarPerfilViewer from "../NavBar/NavBarPerfilViewer";
import style from "./Newsletter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { allTheaters, putViewer, createFavorites } from "../../redux/actions";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

const Newsletter = () => {
  const theaters = useSelector((state) => state.theaters);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [input, setInput] = useState({
    isSubscribed: false,
    nameTheater: "",
  });

  useEffect(() => {
    dispatch(allTheaters());
  }, [dispatch]);

  function HandleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      nameTheater: e.target.value,
    });
  }
  const HandleCheck = (e) => {
    e.preventDefault();
    if (e.target.checked) {
      setInput((prevInput) => ({
        ...prevInput,
        isSubscribed: true,
      }));
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(putViewer(id, { isSubscribed: input.isSubscribed }));
    dispatch(createFavorites(id, { nameTheater: input.nameTheater }));
    console.log(input);
    alert("Gracias por suscribirte!");
    setInput({
      isSubscribed: false,
      nameTheater: "",
    });
  };

  return (
    <div className={style.newsletter}>
      <div className={style.navContainer}>
        <NavBarPerfilViewer />
      </div>

      <div className={style.inputContainer}>
        <form onSubmit={(e) => HandleSubmit(e)}>
          <h2>
            Suscribite a nuestro newsletter para recibir informacion sobre los
            ultimos shows
          </h2>
          <span className={style.check}>
            <label className={style.inp}>Hace click para suscribirte</label>
            <input type="checkbox" onChange={(e) => HandleCheck(e)} />
          </span>
          <div className={style.select}>
            <select onChange={(e) => HandleChange(e)}>
              <option defaultValue="" hidden>
                Elegi tu teatro favorito
              </option>
              {theaters?.map((el) => {
                return (
                  <option key={el.id} value={el.name}>
                    {el.name}
                  </option>
                );
              })}
            </select>
            {/* {input.nameTheater?.map((el) => {
              return (
                <ul key={el}>
                  <li>
                    <p>
                      <strong>{el}</strong>
                    </p>
                  </li>
                </ul>
              );
            })} */}
          </div>
          <button className={style.btn}>Enviar</button>
        </form>
      </div>
      {/* <div className={style.footerContainer}>
        <Footer />
      </div> */}
    </div>
  );
};

export default Newsletter;
