import React, { useState, useEffect } from "react";
import NavBarAll from "../NavBar/NavBarAll";
import Shows from "../Shows/Shows";
import Paginate from "../Paginate/Paginate";
import { allShows } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./Home.module.css";
import CarouselContainer from "../Carrousel/Carrousel.js";
import CarrouselReview from "../Carrousel/CarrouselReview.js";

export default function Home() {
  const dispatch = useDispatch();
  const allshows = useSelector((state) => state.shows);
  const [, setOrder] = useState("");
  const [actualPage, setActualPage] = useState(1);
  const [qty] = useState(8);
  const iLastShow = actualPage * qty; //8
  const iFirstShow = iLastShow - qty;
  const filterShow = allshows?.filter((e) => e.released === false);
  const actualShow = filterShow?.slice(iFirstShow, iLastShow);

  console.log(actualShow);
  const paginate = (number) => {
    setActualPage(number);
  };
  useEffect(() => {
    dispatch(allShows());
  }, [dispatch]);

  return (
    <div className={style.homeContainer}>
      <div className={style.navContainer}>
        <NavBarAll setActualPage={setActualPage} setOrder={setOrder} />
      </div>
      {filterShow?.length === 0 ? (
        <p></p>
      ) : (
        <div className={style.carouselContainer}>
          <CarouselContainer allshows={filterShow} />
        </div>
      )}

      <div>
        {actualShow?.length ? (
          <div className={style.showsContainer}>
            <Shows actualShow={actualShow} />
          </div>
        ) : (
          <img src='https://media.giphy.com/media/q15kbCtGFqwx8wYx1n/giphy.gif' alt='img'/>
        )}
      </div>

      <div className={style.paginate}>
        <Paginate qty={qty} allshows={filterShow?.length} paginate={paginate} />
      </div>
      <div className={style.carouselContainer}>
        <CarrouselReview />
      </div>
    </div>
  );
}
