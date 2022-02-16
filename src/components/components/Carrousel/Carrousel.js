import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import style from "./Carrousel.module.css";
const CarouselContainer = ({ allshows }) => {
  const ultimos = allshows.slice(allshows.length - 5);

  return (
    <div className={style.carrouselContainer}>
      <Carousel variant="dark">
        {ultimos?.map((e, i) => (
          <Carousel.Item key={e.id}>
            <img className="d-block w-100" src={e.image} alt="First slide" />
            <Carousel.Caption>
              <h5>{e.name}</h5>
              <p>{e.summary}</p>
              <Link
                to={`/showDetail/${e.id}`}
                style={{ textDecoration: "none" }}
              >
                <button className="btn btn-primary">Ver detalles</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export default CarouselContainer;
