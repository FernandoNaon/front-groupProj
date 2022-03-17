import React ,{useEffect, useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import style from "./Carrousel.module.css";

const CarouselContainer = ({ allshows, decod }) => {
  let fitltershow = allshows?.filter((show) => show.released === false);

  let ultimos = fitltershow?.slice(fitltershow.length - 5)

  return (
    <div className={style.carrouselContainer}>
      <Carousel variant="dark">
        {ultimos?.map((e, i) => (
          <Carousel.Item key={e.id}>
            <div className={style.cardContainer}>
              <img className={style.image} src={e.image} alt="First slide" />
              <Carousel.Caption className={style.carouselContent}>
                <div className={style.text}>
                  {decod ? <Link
                    to={`/showDetail/${btoa(e.id)}/${btoa(decod)}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h4 className={style.title}>{e.name}</h4>
                  </Link>
                  : 
                  <Link
                    to={`/showDetailHome/${e.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h4 className={style.title}>{e.name}</h4>
                  </Link> }
                  <p>{e.summary}</p>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export default CarouselContainer;
