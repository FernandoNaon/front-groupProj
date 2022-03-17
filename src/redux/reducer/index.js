import {
  ORDER_SCORE,
  FILTER_PROVINCE,
  POST_SHOW,
  GET_ALL_SHOWS,
  FILTER_THEATER,
  FILTER_GENRE,
  GET_ALL_THEATERS,
  POST_VIEWER,
  FILTER_RATED,
  // FILTER_TICKETS_QTY,
  POST_TICKET,
  SHOW_DETAIL,
  THEATER_DETAIL,
  GET_VIEWER_DETAIL,
  PUT_VIEWER,
  GET_ALL_ViEWERS,
  GET_SHOW_BY_NAME,
  DELETE_VIEWER,
  CHECKOUT_PAY,
  POST_NEWSLETTER_SHOW,
  GET_ALL_TICKETS,
  GET_ALL_REVIEW,
  POST_PASSWORD_RECOVERY_VIEWER,
  POST_PASSWORD_RECOVERY_THEATER,
  GET_TICKET_PAY,
  TOTAL_PRICE,
} from "../actions/index.js";

const initialState = {
  // score: [],
  theaters: [],
  shows: [],
  allshows: [],
  theatersDetail: {},
  showdetail: {},
  viewerDetail: {},
  viewers: [],
  tickets: [],
  link: "",
  allreviews: [],
  filtersProv:[],
  filtersTheaters: [],
  filtersGenres: [],
  filtersRates: [],
  totalPrice: '',
};

function rootReducer(state = initialState, action) {
  //const theaters = state.theaters;
  // const shows = state.shows;
  // const allshows = state.allshows;

  switch (action.type) {
    case ORDER_SCORE:
      let arrayOrderScore =
        action.payload === "higherScore"
          ? state.shows.sort(function (x, y) {
              if (x.score > y.score) return -1;
              if (y.score > x.score) return 1;
              return 0;
            })
          : state.shows.sort(function (x, y) {
              if (x.score > y.score) return 1;
              if (y.score > x.score) return -1;
              return 0;
            });
      console.log(arrayOrderScore);
      return {
        ...state,
        shows: arrayOrderScore,
      };

    case FILTER_PROVINCE:
      let filterP = state.allshows
      let filterPperTheater = state.filtersTheaters;
      let filterPperGenre = state.filtersGenres;
      let filterPperRated = state.filtersRates;
      if(filterPperTheater.length > 0){
        let filterProvince2 =
        action.payload === "all"
          ? filterPperTheater
          : filterPperTheater?.filter((e) => e.theater?.province.includes(action.payload));
      return {
        ...state,
        shows: filterProvince2,
        filtersProv: filterProvince2
      };
      } else if(filterPperGenre.length > 0) {
        let filterProvince3 =
        action.payload === "all"
          ? filterPperGenre
          : filterPperGenre?.filter((e) => e.theater?.province.includes(action.payload));
      return {
        ...state,
        shows: filterProvince3,
        filtersProv: filterProvince3
      };
      } else if(filterPperRated.length > 0) {
        let filterProvince4 =
        action.payload === "all"
          ? filterPperRated
          : filterPperRated?.filter((e) => e.theater?.province.includes(action.payload));
      return {
        ...state,
        shows: filterProvince4,
        filtersProv: filterProvince4
      };
      }
      let filterProvince =
        action.payload === "all"
          ? filterP
          : filterP?.filter((e) => e.theater?.province.includes(action.payload));
      return {
        ...state,
        shows: filterProvince,
        filtersProv: filterProvince
      };
    case GET_ALL_SHOWS:
      return {
        ...state,
        shows: action.payload,
        allshows: action.payload,
      };
    case THEATER_DETAIL:
      return {
        ...state,
        theatersDetail: action.payload,
      };
    case POST_SHOW:
      return {
        ...state,
      };

    case GET_ALL_THEATERS:
      return {
        ...state,
        theaters: action.payload,
      };
    case FILTER_THEATER:
      let filterTheaterPerProvince = state.filtersProv;
      let filterTheaterPerGenre = state.filtersGenres;
      let filterTheaterPerRated = state.filtersRates;
      let filterT = state.allshows
      if(filterTheaterPerGenre.length > 0) {
        let filterTheater3 =
        action.payload === "all"
          ? filterTheaterPerGenre
          : filterTheaterPerGenre.filter((e) => e.theater.name.includes(action.payload));
        return {
          ...state,
          shows: filterTheater3,
          filtersTheaters: filterTheater3
        } 
      }else if(filterTheaterPerProvince.length > 0){
      let filterTheater2 =
      action.payload === "all"
        ? filterTheaterPerProvince
        : filterTheaterPerProvince.filter((e) => e.theater.name.includes(action.payload));
      return {
        ...state,
        shows: filterTheater2,
        filtersTheaters: filterTheater2
      };
      } else if(filterTheaterPerRated.length > 0) {
        let filterTheater4 =
        action.payload === "all"
          ? filterTheaterPerRated
          : filterTheaterPerRated.filter((e) => e.theater.name.includes(action.payload));
        return {
          ...state,
          shows: filterTheater4,
          filtersTheaters: filterTheater4
        } 
      }
      let filterTheater =
      action.payload === "all"
        ? filterT
        : filterT.filter((e) => e.theater.name.includes(action.payload));
        console.log(filterTheater)
        console.log(filterT)
      return {
        ...state,
        shows: filterTheater,
        filtersTheaters: filterTheater
      } 
      
      
    case FILTER_GENRE:
      let filterG = state.allshows
      let filterGenreperProv = state.filtersProv;
      let filterGenreperTheater = state.filtersTheaters;
      if(filterGenreperProv.length > 0) {
        let filterGenre2 =
        action.payload === "all"
          ? filterGenreperProv
          : filterGenreperProv.filter((e) => e.genre.includes(action.payload));
      return {
        ...state,
        shows: filterGenre2,
        filtersGenres: filterGenre2
      }
    } else if (filterGenreperTheater.length > 0) {
      let filterGenre3 =
      action.payload === "all"
        ? filterGenreperTheater
        : filterGenreperTheater.filter((e) => e.genre.includes(action.payload));
    return {
      ...state,
      shows: filterGenre3,
      filtersGenres: filterGenre3
    }
    } else {
        let filterGenre =
        action.payload === "all"
          ? filterG
          : filterG.filter((e) => e.genre.includes(action.payload));
      return {
        ...state,
        shows: filterGenre,
        filtersGenres: filterGenre
      }
    }

    case FILTER_RATED:
      let filterR = state.allshows;
      let filterRperProv = state.filtersProv;
      let filterRperTheaters = state.filtersTheaters;
      let filterRperGenre = state.filtersGenres;
      if(filterRperProv.length > 0) {
        let filterRated2 =
        action.payload === "all"
          ? filterRperProv
          : filterRperProv.filter((e) => e.rated.includes(action.payload));
      return {
        ...state,
        shows: filterRated2,
        filtersRates: filterRated2
      };
      } else if(filterRperTheaters.length > 0) {
        let filterRated3 =
        action.payload === "all"
          ? filterRperTheaters
          : filterRperTheaters.filter((e) => e.rated.includes(action.payload));
      return {
        ...state,
        shows: filterRated3,
        filtersRates: filterRated3
      };
      } else if(filterRperGenre.length > 0) {
        let filterRated4 =
        action.payload === "all"
          ? filterRperGenre
          : filterRperGenre.filter((e) => e.rated.includes(action.payload));
      return {
        ...state,
        shows: filterRated4,
        filtersRates: filterRated4
      };
      }
      let filterRated =
        action.payload === "all"
          ? filterR
          : filterR.filter((e) => e.rated.includes(action.payload));
      return {
        ...state,
        shows: filterRated,
      };
    // case FILTER_TICKETS_QTY:
    //   let filterTickets =
    //     action.payload === "all"
    //       ? allshows
    //       : allshows.filter((e) => e.ticketsQty >= action.payload);
    //   return {
    //     ...state,
    //     shows: filterTickets,
    //   };

    //return {
    //    ...state,
    //    shows: filterGenre
    //}
    case POST_VIEWER:
      return {
        ...state,
      };
    case POST_TICKET:
      return {
        ...state,
      };
    case SHOW_DETAIL:
      return {
        ...state,
        showdetail: action.payload,
      };

    case GET_VIEWER_DETAIL:
      return {
        ...state,
        viewerDetail: action.payload,
      };
    case PUT_VIEWER:
      return {
        ...state,
      };

    case GET_ALL_ViEWERS:
      return {
        ...state,
        viewers: action.payload,
      };
    case GET_SHOW_BY_NAME:
      return {
        ...state,
        shows: action.payload,
      };
    case DELETE_VIEWER:
      return {
        ...state,
      };
    case CHECKOUT_PAY:
      return {
        ...state,
        link: action.payload,
      };
    case POST_NEWSLETTER_SHOW:
      return {
        ...state,
      };
    case GET_ALL_TICKETS:
      return {
        ...state,
        tickets: action.payload,
      };
    case GET_ALL_REVIEW:
      return {
        ...state,
        allreviews: action.payload,
      };
    case POST_PASSWORD_RECOVERY_VIEWER:
      return {
        ...state,
      };
    case POST_PASSWORD_RECOVERY_THEATER:
      return {
        ...state,
      };
    case GET_TICKET_PAY:
      return {
        ...state,
        tickets: action.payload
      }
    case TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload
      }
    default:
      return state;
  }
}

export default rootReducer;