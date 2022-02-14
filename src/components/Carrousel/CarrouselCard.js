import React from "react";
import style from "./CarruselCard.module.css";
import { Link } from "react-router-dom";

const CarrouselCard = ({ id, name, image, summary }) => {
  return (
    <div
      className={style.carouselInner}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div>
        <h1>{name}</h1>
        <p>{summary}</p>
      </div>
      <Link to={`/showDetail/${id}`} style={{ textDecoration: "none" }}>
        <button className="btn btn-primary">Ver detalles</button>
      </Link>
    </div>
  );
};
export default CarrouselCard;
