import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  allShows,
  getViewerDetail,
  getAllTickets,
  allTheaters,
} from "../../redux/actions/index.js";
import NavBarPerfilViewer from "../NavBar/NavBarPerfilViewer.js";
import Review from "../ReviewV/ReviewV.js";
import style from "./ViewerHistory.module.css";
import { Button, Card } from "react-bootstrap";

const ViewerHistory = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.shows);
  const viewer = useSelector((state) => state.viewerDetail);
  const ticket = useSelector((state) => state.tickets);
  const theater = useSelector((state) => state.theaters);
  const [button, setButton] = useState(true);
  const { id } = useParams();
  
  
  let showID;
  let theaterID;

  

  useEffect(() => {
    dispatch(allShows());
    dispatch(getViewerDetail(id));
    dispatch(getAllTickets());
    dispatch(allTheaters());
  }, [dispatch, id]);

  function onClick(e) {
    e.preventDefault();
    setButton(false);
  }

  console.log("ticket", ticket);
  let filterTicket = ticket?.filter((e) => e.viewerId === viewer.id);
  console.log("filterTicket", filterTicket);

  for (let i = 0; i < filterTicket?.length; i++) {
    showID = filterTicket[i].showId;
  }
  console.log(showID);

  let filterShow = show?.filter((e) => e.id === showID);
  console.log("filterShow", filterShow);

  let showStatus = filterShow?.map((e) => e.released);
  console.log("showStatus", showStatus);

  let status;

  for (let e = 0; e < showStatus?.length; e++) {
    status = showStatus[e];
  }

  console.log("status", status);

  for (let j = 0; j < filterShow?.length; j++) {
    theaterID = filterShow[j].theaterId;
  }
  console.log("theaterID", theaterID);

  let total = filterTicket?.map((e) => e.price);

  console.log(total);

  let filterTheater = theater?.find((e) => e.id === theaterID);
  console.log("filterTheater", filterTheater);

  return (
    <div>
      <div className={style.navContainer}>
        <NavBarPerfilViewer name={viewer?.name} />
      </div>
      <h2>Opiniones</h2>

      <div className={style.container}>
        {filterShow?.length && filterTicket?.length ? (
          filterShow?.map((e) => {
            return (
              <div key={e.id}>
                <div className={style.card}>
                  <Card border="dark" style={{ width: "18rem" }}>
                    <Card.Header>{filterTheater?.name}</Card.Header>
                    <Card.Body>
                      <Card.Title>{e.name}</Card.Title>
                      <Card.Text>
                        <p>
                          Función: {e.date} {e.time}
                        </p>
                        {/*<h5>Cantidad: {filterTicket?.length}</h5>*/}
                        <h5>
                          Total: $
                          {total?.reduce(function (a, b) {
                            return a + b;
                          })}
                        </h5>
                      </Card.Text>
                      <Link to={`/ticket/${id}/${e.id}`}>
                      <Button variant="dark">
                        Descargar Ticket
                      </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
                <Button variant="dark" onClick={onClick}>
                  Agrega tu opinión
                </Button>
                <div>
                  {!button ? (
                    <Review
                      nameTheater={filterTheater?.name}
                      nameShow={e.name}
                      nameViewer={viewer.name}
                      status={status}
                    />
                  ) : null}
                </div>
              </div>
            );
          })
        ) : (
          <div>
          {/*<img src='https://media.giphy.com/media/q15kbCtGFqwx8wYx1n/giphy.gif' alt='img'/>*/}
          <p>NO HAY SHOWS PARA MOSTRAR</p>
          </div>
        )}
      </div>
      <br />
    </div>
  );
};

export default ViewerHistory;