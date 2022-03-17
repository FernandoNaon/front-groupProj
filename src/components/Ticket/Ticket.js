import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getAllTickets,
  getViewerDetail,
  allTheaters,
  allShows,
} from "../../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import qr from "../../assets/codigoQr.jpg";
import NavBarPerfilViewer from "../NavBar/NavBarPerfilViewer.js";
import style from "./Ticket.module.css";

const Ticket = () => {
  const { id, idShow } = useParams();
  const dispatch = useDispatch();
  const ticket = useSelector((state) => state.tickets);
  const viewer = useSelector((state) => state.viewerDetail);
  const theater = useSelector((state) => state.theaters);
  let img = window.sessionStorage.getItem("img").valueOf();

  useEffect(() => {
    dispatch(getAllTickets());
    dispatch(getViewerDetail(id));
    dispatch(allTheaters());
    dispatch(allShows());
  }, []);

  let filterTickets = ticket?.filter((e) => e.viewerId === viewer?.id);
  let filterTicketsShow = filterTickets?.filter(
    (e) => e.showId === Number(idShow)
  );
  let filterTheaterId = filterTicketsShow?.map((e) => e.show?.theaterId);
  let filterTheater = theater?.find((e) => e.id === filterTheaterId[0]);
  console.log("filterTickets", filterTickets);
  console.log("filterTheaterId", filterTheaterId);
  console.log("filterTicketsShow", filterTicketsShow);
  console.log("filterTheater", filterTheater);

  function printing() {
    setTimeout(() => 10000);
    window.print();
  }

  return (
    <div>
      <div>
        <NavBarPerfilViewer img={img} name={viewer?.name} />
      </div>
      <div className={style.container}>
        {filterTicketsShow?.map((e) => {
          return (
            <div className={style.card}>
              <h1>{e.show.name} </h1>
              <h2>{filterTheater?.name}</h2>
              <h4>Asiento: {e.seatNumber}</h4>
              <h4>Fecha: {e.show?.date}</h4>
              <h4>Total: ${e.price}</h4>
              <img className={style.codigoQr} src={qr} alt="img" />
            </div>
          );
        })}

        <div className={style.btnContainer}>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => printing()}
          >
            Imprimir o Descargar
          </button>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Ticket;