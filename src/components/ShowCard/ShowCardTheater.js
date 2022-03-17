import React from "react";
import { Link } from "react-router-dom";
import style from "./ShowCard.module.css";
import { Card } from "react-bootstrap";

const ShowCardTheater = ({ id, name, genre, image, date, rated }) => {
  return (
    <Link to={`/showDetailTheater/${id}`} style={{ textDecoration: "none" }}>
      {/* <div className={style.cardContainer}>
        <div className={style.left}>
          <img src={image} alt="img" className={style.image} />
        </div>
        <div className={style.right}>
          <p className={style.title}>{name}</p>
          <div>
            <p>{genre}</p>
            <p>{rated}</p>
          </div>
          <p>📅 {date}</p>
        </div>
      </div> */}

      <Card style={{ width: "22rem" }} bg="light" border="light" text="dark">
        <Card.Img variant="top" style={{ height: "22rem" }} src={image} />
        <Card.Body>
          <Card.Title className={style.title}>{name}</Card.Title>
          <Card.Text>
            <div>
              <p>{genre}</p>
              <p>{rated}</p>
            </div>
            <p>📅 {date}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ShowCardTheater;
