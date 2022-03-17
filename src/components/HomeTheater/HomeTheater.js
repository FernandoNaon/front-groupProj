import React, { useEffect, useState } from "react";
import NavBarTheater from "../NavBar/NavBarTheater";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  theaterDetail,
  allTheaters,
  allShows,
} from "../../redux/actions/index.js";
import ShowCardTheater from "../ShowCard/ShowCardTheater.js";
import style from "./HomeTheater.module.css";


const HomeTheater = () => {
  const dispatch = useDispatch();
  const shows = useSelector((state) => state.shows);
  const theater = useSelector((state) => state.theatersDetail);
  let { id } = useParams();
  
  //let img = window.sessionStorage.getItem("img").valueOf();
  //console.log("img", img);
  

  useEffect(() => {
    dispatch(theaterDetail(id));
    dispatch(allTheaters());
    dispatch(allShows());
  }, [dispatch, id]);

  console.log("shows", shows);
  console.log("theater", theater);

  let filterShows = shows?.filter((e) => e.theaterId === theater?.id);
  console.log("filterShows", filterShows);

  return (
    <div className={style.homeContainer}>
      <NavBarTheater id={id} name={theater?.name} />

      <div className={style.showsContainer}>
        {filterShows?.length ? (
          filterShows?.map((e) => (
            <ShowCardTheater
              key={e.id}
              id={e.id}
              name={e.name}
              genre={e.genre}
              image={e.image}
              rated={e.rated}
              date={e.date}
            />
          ))
        ) : (
          <div className={style.noShows}>
            {/*<img src='https://media.giphy.com/media/q15kbCtGFqwx8wYx1n/giphy.gif' alt='img'/>*/}
            <p>NO HAY SHOWS PARA MOSTRAR</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeTheater;
