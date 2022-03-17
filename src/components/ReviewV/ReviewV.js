import React, { useState } from "react";
import { postReview } from "../../redux/actions/index.js";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { Button } from "react-bootstrap";
import style from "./ReviewV.module.css";

const Review = ({ nameTheater, nameShow, nameViewer, status }) => {
  let [theaterScore, setTheaterScore] = useState("");
  let [showScore, setShowScore] = useState("");
  let [review, setReview] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (status) {
      dispatch(
        postReview(
          theaterScore,
          showScore,
          review,
          nameTheater,
          nameShow,
          nameViewer
        )
      );
      swal({
        title: "Enviado! Muchas gracias!",
        icon: "success",
        button: false,
      });
      setTheaterScore("");
      setShowScore("");
      review("");
    } else {
      swal({
        icon: "error",
        text: "Todavia no se puede valorar esta obra",
        button: false,
      });
    }
  }

  function onChangeTheater(e) {
    setTheaterScore(e.target.value);
  }

  function onChangeShow(e) {
    setShowScore(e.target.value);
  }

  function onChangeReview(e) {
    setReview(e.target.value);
  }

  console.log("theaterScore", theaterScore);
  return (
    <div>
      <br></br>
      <form onSubmit={handleSubmit} className={style.formContainer}>
        <fieldset>
          <legend>¿Cómo calificarías al teatro?</legend>
          <br></br>
          <label>
            <input
              type="radio"
              name="ratingTheater"
              value={(theaterScore = "1")}
              onChange={onChangeTheater}
            />
            1
          </label>
          <label>
            <input
              type="radio"
              name="ratingTheater"
              value={(theaterScore = "2")}
              onChange={onChangeTheater}
            />
            2
          </label>
          <label>
            <input
              type="radio"
              name="ratingTheater"
              value={(theaterScore = "3")}
              onChange={onChangeTheater}
            />
            3
          </label>
          <label>
            <input
              type="radio"
              name="ratingTheater"
              value={(theaterScore = "4")}
              onChange={onChangeTheater}
            />
            4
          </label>
          <label>
            <input
              type="radio"
              name="ratingTheater"
              value={(theaterScore = "5")}
              onChange={onChangeTheater}
            />
            5
          </label>
        </fieldset>

        <br></br>
        <fieldset>
          <legend>¿Cómo calificarías la obra?</legend>
          <br></br>
          <label>
            <input
              type="radio"
              name="ratingShow"
              value={(showScore = "1")}
              onChange={onChangeShow}
            />
            1
          </label>
          <label>
            <input
              type="radio"
              name="ratingShow"
              value={(showScore = "2")}
              onChange={onChangeShow}
            />
            2
          </label>
          <label>
            <input
              type="radio"
              name="ratingShow"
              value={(showScore = "3")}
              onChange={onChangeShow}
            />
            3
          </label>
          <label>
            <input
              type="radio"
              name="ratingShow"
              value={(showScore = "4")}
              onChange={onChangeShow}
            />
            4
          </label>
          <label>
            <input
              type="radio"
              name="ratingShow"
              value={(showScore = "5")}
              onChange={onChangeShow}
            />
            5
          </label>
        </fieldset>

        <br></br>
        <div className={style.comentarioContainer}>
          <textarea
            className={style.comentario}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            type="text"
            name="review"
            maxLength="1000"
            placeholder="Dejanos tu comentario..."
            value={review}
            onChange={onChangeReview}
          ></textarea>
        </div>
        <Button type="onSubmit" variant="dark">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Review;
