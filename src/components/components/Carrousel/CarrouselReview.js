import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'
import {getAllReview} from "../../redux/actions/index.js"
import { useDispatch, useSelector } from "react-redux";
import "./CarruselCard.module.css"
const CarrouselReview = () => {
  const dispatch = useDispatch();
  const review = useSelector((state) => state.allreviews)
  useEffect(() =>{
    dispatch(getAllReview())
  }, [dispatch])
  const ultimos = review.slice(review.length - 5);
  console.log(ultimos)
  return (
    <Carousel variant="dark">
        {ultimos?.map((e, i) => (
                <Carousel.Item key={e.id}>
                  <div className="ContainerReview" key={e.id}>
                    <div >
                    <h4>Espectaculo: </h4>
                    <h5>{e.show.name}</h5>
                    <p>{e.review}</p>
                    <p>{e.showScore}</p>
                    </div>
                    <div>
                    <h4>Teatro: </h4>
                    <h5>{e.theater.name}</h5>
                    <p>{e.theaterScore}</p>
                    </div>
                    <div>
                    <h4>Usuario: </h4>
                    <h5>{e.viewer.name}</h5>
                    </div>
                  </div>
                  {/* <Link to={`/showDetail/${e.show.id}`} style={{ textDecoration: "none" }}>
                    <button className="btn btn-primary">Ver detalles</button>
                  </Link> */}
                
              </Carousel.Item>
        ))}
  </Carousel>
    
  );
};
export default CarrouselReview;
