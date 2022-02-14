import React from "react";
import ShowCard from "../ShowCard/ShowCard";

;

const Shows = ({ actualShow }) => {
  

//   useEffect(() => {
//     dispatch(allShows());
//   }, []);
  
  return (
    <div>
      
      {actualShow?.map((e) => (
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
          time={e.time}
        />
      ))}
    </div>
  );
};

export default Shows;
