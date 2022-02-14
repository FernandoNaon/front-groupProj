import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import logo from "../../logo a sala llena-sinfondo.png";
import {
  allTheaters,
  allShows,
  filterPerGenre,
  filterPerProvince,
  filterPerTheater,
  orderScore,
  filterPerRated,
  //filterPerTicketsQty,
} from "../../redux/actions";
import style from "./NavBar.module.css";
import Accordion from "react-bootstrap/Accordion";

export default function NavBar({ setActualPage, setOrder }) {
  const dispatch = useDispatch();
  const theaters = useSelector((state) => state.theaters);
  //const allshows = useSelector((state) => state.allshows);

  useEffect(() => {
    dispatch(allShows());
  }, [dispatch]);

  useEffect(() => {
    dispatch(allTheaters());
  }, [dispatch]);

  function handleOrderScore(e) {
    // e.preventDefault()
    dispatch(orderScore(e.target.value));
    setActualPage(1);
    setOrder(`Order by ${e.target.value}`);
  }

  function handleFilterProvince(prov) {
    prov.preventDefault();
    dispatch(filterPerProvince(prov.target.value));
    setActualPage(1);
    setOrder(`Filter by ${prov.target.value}`);
  }
  function handleFilterTheater(e) {
    e.preventDefault();
    dispatch(filterPerTheater(e.target.value));
  }
  function handleFilterGenre(e) {
    e.preventDefault();
    dispatch(filterPerGenre(e.target.value));
  }
  function handleFilterRated(e) {
    e.preventDefault();
    dispatch(filterPerRated(e.target.value));
  }
  //function handleFilterTicketsQty(e) {
  //  e.preventDefault();
  //  dispatch(filterPerTicketsQty(e.target.value));
  //}

  return (
    <div className={style.navContainer}>
      <div className={style.menu}>
        <div className={style.left}>
          {/* <Link to="/">
            <img className={style.logo} src={logo} alt="A sala llena" />
          </Link> */}
        </div>
        <Accordion eventKey="1">
          <Accordion.Item eventKey="0">
            <Accordion.Header variant="secondary">Filtrar</Accordion.Header>
            <Accordion.Body>
              <div className={style.right}>
                {/* // ------------- filtro por score----------- */}
                <div className={style.puntuacion}>
                  <select onChange={(e) => handleOrderScore(e)}>
                    <option defaultValue="">Puntuación</option>
                    <option name="orderScore" value="higherScore">
                      Mayores primero
                    </option>
                    <option name="orderScore" value="lowerScore">
                      Menores primero
                    </option>
                  </select>
                </div>
                {/* // ------------- filtro por ubicacion---------- */}
                <div>
                  <select
                    onChange={(prov) => handleFilterProvince(prov)}
                    name="province"
                  >
                    <option defaultValue="" disabled>
                      Ubicación
                    </option>
                    <option value="all">Todas</option>
                    <option value="Buenos Aires">Buenos Aires</option>
                    <option value="Cordoba">Cordoba</option>
                    <option value="Santa Fe">Santa Fe</option>
                    <option value="Catamarca">Catamarca</option>
                    <option value="Chaco">Chaco</option>
                    <option value="Chubut">Chubut</option>
                    <option value="Corrientes">Corrientes</option>
                    <option value="Entre Rios">Entre Rios</option>
                    <option value="Formosa">Formosa</option>
                    <option value="Jujuy">Jujuy</option>
                    <option value="La Pampa">La Pampa</option>
                    <option value="La Rioja">La Rioja</option>
                    <option value="Mendoza">Mendoza</option>
                    <option value="Misiones">Misiones</option>
                    <option value="Neuquen">Neuquen</option>
                    <option value="Rio Negro">Rio Negro</option>
                    <option value="Salta">Salta</option>
                    <option value="San Juan">San Juan</option>
                    <option value="San Luis">San Luis</option>
                    <option value="Santa Cruz">Santa Cruz</option>
                    <option value="Santiago del Estero">
                      Santiago del Estero
                    </option>
                    <option value="Tierra del Fuego">Tierra del Fuego</option>
                    <option value="Tucuman">Tucuman</option>
                    <option value="CABA">CABA</option>
                  </select>
                </div>
                {/* // ------------- filtro por Teatro---------- */}
                <div>
                  <select onChange={(e) => handleFilterTheater(e)} name="name">
                    <option defaultValue="">Teatro</option>
                    <option value="all">Todos</option>
                    {theaters?.map((theater) => (
                      <option value={theater.name} key={theater.id}>
                        {theater.name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* // ------------- filtro por Genero---------- */}
                <div>
                  <select onChange={(e) => handleFilterGenre(e)} name="genre">
                    <optgroup label="OBRAS MAYORES">
                      <option defaultValue="" disabled>
                        Género
                      </option>
                      <option>Comedia</option>
                      <option>Drama</option>
                      <option>Tragedia</option>
                      <option>Tragicomedia</option>
                      <option>Monólogo</option>
                    </optgroup>
                    <optgroup label="OBRAS MENORES">
                      <option>Auto Sacramental</option>
                      <option>Entremes</option>
                      <option>Sainete</option>
                      <option>Farsa</option>
                      <option>Vodevil</option>
                    </optgroup>
                    <optgroup label="OBRAS MUSICALES">
                      <option>Ópera</option>
                      <option>Zarzuela</option>
                      <option>Opereta</option>
                      <option>Musical</option>
                      <option>Ballet</option>
                      <option>Danza</option>
                    </optgroup>
                  </select>
                </div>
                {/* // ------------- filtro por Clasificacion---------- */}
                <div>
                  <select onChange={(e) => handleFilterRated(e)} name="rated">
                    <option defaultValue="" disabled>
                      Clasificación
                    </option>
                    <option value="Todas las edades">Todas las edades</option>
                    <option value="Apta para mayores de 13 años">
                      Apta para mayores de 13 años
                    </option>
                    <option value="Apta para mayores de 16 años">
                      Apta para mayores de 16 años
                    </option>
                    <option value="Apta para mayores de 18 años">
                      Apta para mayores de 18 años
                    </option>
                    <option value="Exhibición condicionada.">
                      Exhibición condicionada.
                    </option>
                  </select>
                </div>
                {/* // ------------- filtro por Cantidad de entradas---------- */}
                <div>
                  {/* <p id="ticketNumber">Cantidad de entradas</p> */}
                  {/* <input
                    type="number"
                    placeholder="Entradas"
                    min="1"
                    max="50"
                    onChange={(e) => handleFilterTicketsQty(e)}
                  /> */}

                  {/* <div>
      <p id="ticketNumber">Cantidad de entradas</p>
    </div>
    <span> 
            <input id="ticketsNumbers" type="range" min="1" max="20" name="tickets" value="1" onChange={(e) => handleFilterTicketsQty(e)}/>
        </span> */}
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
