import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import NavBarAll from "../NavBar/NavBarAll";
import SearchBar from "../SearchBar/SearchBar.js";
import Shows from "../Shows/Shows";
import Paginate from "../Paginate/Paginate";
import { allShows } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Home.module.css";
// import Footer from "../Footer/Footer";

// import CarouselContainer from "../Carrousel/Carrousel.js";
export default function Home() {
  const dispatch = useDispatch();
  const history = useHistory();
  const allshows = useSelector((state) => state.shows);
  const [, setOrder] = useState("");
  const [actualPage, setActualPage] = useState(1);
  const [qty] = useState(6);
  const iLastShow = actualPage * qty; //6
  const iFirstShow = iLastShow - qty;
  const actualShow = allshows.slice(iFirstShow, iLastShow);
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
      <div className={style.searchContainer}>
        <SearchBar />
      </div>
      {/* <Link to ='/'>
                </Link> */}
      {/*<CarouselContainer allshows={allshows}/>*/}
      <div className={style.showsContainer}>
        {actualShow.length ? (
          <Shows actualShow={actualShow} />
        ) : (
          <p>...Loading</p>
        )}
      </div>

      <div className={style.paginate}>
        <Paginate qty={qty} allshows={allshows.length} paginate={paginate} />
      </div>

      {/* <div className={style.footerContainer}>
        <Footer />
      </div> */}
    </div>
  );
}
