import React from "react";
import ShowCard from "../ShowCard/ShowCard";
import style from "./Shows.module.css";

const Shows = ({ actualShow, idV }) => {
  return (
    <div className={style.cardContainer}>
      {actualShow?.map((e) => (
        <ShowCard
          key={e.id}
          id={e.id}
          name={e.name}
          province={e.theater.province}
          genre={e.genre}
          image={e.image}
          summery={e.summery}
          rated={e.rated}
          date={e.date}
          score={e.score}
          time={e.time}
          idV={idV}
          seatsAvailable={e.seatsAvailable}
        />
      ))}
    </div>
  );
};

export default Shows;
