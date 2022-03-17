import React from "react";
import { Link } from "react-router-dom";
import style from "./ShowCard.module.css";
import Countdown from "react-countdown";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {putShow} from "../../redux/actions/index.js";
const ShowCard = ({
  id,
  name,
  genre,
  length,
  image,
  province,
  summery,
  ticketsQty,
  rated,
  date,
  time,
  score,
  idV,
  seatsAvailable
}) => {
  let timer = ` dias ${date} ${time}`;
  const dispatch = useDispatch();
  const newrelased = {
    released: true,
  };
  const handleComplete  = ()=>{
    dispatch(putShow(id, newrelased));
    
  }
  return (
    <div className={style.container}>
      {idV ? (
        <Link
          to={`/showDetail/${id}/${idV}`}
          style={{ textDecoration: "none" }}
        >
          <Card
            style={{ width: "22rem" }}
            bg="light"
            border="light"
            text="dark"
          >
            <Card.Img variant="top" style={{ height: "22rem" }} src={image} />
            <Card.Body>
              <Card.Title className={style.title}>{name}</Card.Title>
              <Card.Text>
                <p className={style.subtitle}>{province}</p>
                {seatsAvailable.length === 0 ? 
                  <h4>No hay entradas disponibles</h4> :                    
                  <div>                       
                    <p className={style.subtitle}>El espectáculo comienza en: </p>
                    <Countdown date={timer} onComplete={handleComplete}>  
                     <div>                     
                       <p>La obra ya ha comenzado!</p>                   
                       </div>                 
                       </Countdown>
                  </div>
                  }
                  
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      ) : (
        <div className={style.cardContainer}>
          <Link to={`/showDetailHome/${id}`} style={{ textDecoration: "none" }}>
            <Card
              style={{ width: "22rem" }}
              bg="light"
              border="light"
              text="dark"
            >
              <Card.Img variant="top" style={{ height: "22rem" }} src={image} />
              <Card.Body>
                <Card.Title className={style.title}>{name}</Card.Title>
                <Card.Text>
                  <p className={style.subtitle}>{province}</p>
                  {seatsAvailable.length === 0 ? 
                  <h4>No hay entradas disponibles</h4> :                    
                  <div>                       
                    <p className={style.subtitle}>El espectáculo comienza en: </p>
                    <Countdown date={timer} onComplete={handleComplete}>  
                     <div>                     
                       <p>La obra ya ha comenzado!</p>                   
                       </div>                 
                       </Countdown>
                  </div>
                  }
                    
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShowCard;
