import React, { useEffect } from "react";
import NavBarTheater from "../NavBar/NavBarTheater";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllTickets,
  allShows,
  theaterDetail,
} from "../../redux/actions/index.js";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import style from "./SalesHistory.module.css";

const SalesHistory = () => {
  const dispatch = useDispatch();
  //const tickets = useSelector((state) => state.tickets);
  const show = useSelector((state) => state.shows);
  const theater = useSelector((state) => state.theatersDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllTickets());
    dispatch(allShows());
    dispatch(theaterDetail(id));
  }, [dispatch, id]);

  //console.log('prueba', tickets)
  let filterShows = show?.filter((e) => e.theaterId === theater?.id);
  //let filterTicketShow = tickets?.map((e) => e.show)
  console.log("filter", filterShows);
  //console.log('ticket',filterTicketShow )
  let total = filterShows?.tickets?.map((e) => e.price);
  console.log("total", total);
  return (
    <div>
      <NavBarTheater />
      {filterShows.length ? (
        filterShows.map((e, i) => {
          return (
            <div key={e.id}>
              <h3>{e.name}</h3>
              <h4>Cantidad de entradas:{filterShows?.tickets?.length} </h4>
              <h4>
                Total vendido: $
                {total?.reduce(function (a, b) {
                  return a + b;
                })}{" "}
              </h4>
            </div>
          );
        })
      ) : (
        <h1>TODAVIA NO HAY VENTAS</h1>
      )}
      {/* <Footer /> */}
    </div>
  );
};

export default SalesHistory;
