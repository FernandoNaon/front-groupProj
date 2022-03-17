import React, { useEffect, useState } from "react";
import { showDetail } from "../../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import style from "./ShowDetailTheater.module.css";
import { Navbar, Container, Button } from "react-bootstrap";
import { putTicket } from "../../redux/actions/index.js";

const ShowDetailTheater = () => {
  const show = useSelector((state) => state.showdetail);
  const dispatch = useDispatch();
  const { id } = useParams();
  //const [precio, setPrecio]= useState(null);
  const [tiempo, setTiempo] = useState({
    dia: 0,
    hora: 0,
  });
  const [preciofinal, setPreciofinal] = useState("");
  const [porcentaje, setPorcentaje] = useState(null);
  useEffect(() => {
    dispatch(showDetail(id));
  }, [dispatch, id]);

  return (
    <div className={style.detailContainer}>
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

      <div className={style.title}>
        <h1>{show.name}</h1>
      </div>
      {/* //-------------------card---------------- */}

      <div className={style.cardDetail}>
        <div>
          <div>
            <img src={show.image} className={style.image} alt="img" />
          </div>
          <div className={style.boxSummary}>
            <h3>Descripción</h3>
            <p>{show?.summary}</p>
          </div>
        </div>
        {/* //-------------------1row---------------- */}

        <div className={style.datos}>
          <div className={style.first}>
            <div className={style.box}>
              <h3>Tipo de público </h3>
              <h4>{show?.rated} </h4>
            </div>
            <div className={style.box}>
              <h3>Duración </h3>
              <h4>{show?.length} </h4>
            </div>
            <div className={style.box}>
              <h3>Género </h3>
              <h4>{show?.genre} </h4>
            </div>
          </div>
          {/* //-------------------2row---------------- */}

          <div className={style.first}>
            <div className={style.box}>
              <h3>Entradas disponibles</h3>
              <h4>{show?.ticketsQty} </h4>
            </div>
            <div className={style.box}>
              <h3>Fecha</h3>
              <h4>{show?.date} </h4>
            </div>
            <div className={style.box}>
              <h3>Hora</h3>
              <h4>{show?.time} </h4>
            </div>
            <div className={style.box}>
              <h3>Precio Original</h3>
              <s>${show?.originPrice}</s>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowDetailTheater;
