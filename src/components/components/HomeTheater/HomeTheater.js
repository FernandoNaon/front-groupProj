import React, { useEffect } from "react";
import NavBarTheater from "../NavBar/NavBarTheater";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  theaterDetail,
  allTheaters,
  allShows,
} from "../../redux/actions/index.js";
import ShowCard from "../ShowCard/ShowCard";
import style from "./HomeTheater.module.css";
import Footer from "../Footer/Footer";

const HomeTheater = () => {
  const dispatch = useDispatch();
  const shows = useSelector((state) => state.shows);
  const theater = useSelector((state) => state.theatersDetail);
  let { id } = useParams();

  useEffect(() => {
    dispatch(theaterDetail(id));
    dispatch(allTheaters());
    dispatch(allShows());
  }, [dispatch, id]);

  console.log("shows", shows);
  console.log("theater", theater);

  let filterShows = shows?.filter((e) => e.theaterId === theater?.id);
  console.log(filterShows);
  return (
    <div className={style.homeContainer}>
      <NavBarTheater id={id} />
      <div className={style.searchContainer}>
        <SearchBar />
      </div>
      <div className={style.showsContainer}>
        {filterShows.map((e) => (
          <ShowCard
            key={e.id}
            id={e.id}
            name={e.name}
            genre={e.genre}
            image={e.image}
            summery={e.summery}
            rated={e.rated}
            date={e.date}
            score={e.score}
          />
        ))}
      </div>
      {/* <div className={style.footerContainer}>
        <Footer />
      </div> */}
    </div>
  );
};

export default HomeTheater;
