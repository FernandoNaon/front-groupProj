import axios from "axios";

export function orderScore(payload) {
  return {
    type: "ORDER_SCORE",
    payload,
  };
}

export function filterPerProvince(payload) {
  return {
    type: "FILTER_PROVINCE",
    payload,
  };
}

export function postShow(newShow) {
  try {
    const show = axios.post("https://back-asalallena.herokuapp.com/shows", newShow);
    return {
      type: "POST_SHOW",
      payload: show,
    };
  } catch (error) {
    console.log(error);
  }
}

export function allShows() {
  return function (dispatch) {
    return axios
      .get("https://back-asalallena.herokuapp.com/shows")
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: "GET_ALL_SHOWS", payload: data });
      });
  };
}

export function theaterDetail(id) {
  return function (dispatch) {
    return axios
      .get(`https://back-asalallena.herokuapp.com/theaters/${id}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: "THEATER_DETAIL", payload: data });
      });
  };
}
export function allTheaters() {
  return function (dispatch) {
    return axios
      .get("https://back-asalallena.herokuapp.com/theaters")
      .then((resp) => resp.data)
      .then((data) => {
        dispatch({
          type: "GET_ALL_THEATERS",
          payload: data,
        });
      });
  };
}

export function filterPerTheater(payload) {
  return {
    type: "FILTER_THEATER",
    payload,
  };
}

export function filterPerGenre(payload) {
  return {
    type: "FILTER_GENRE",
    payload,
  };
}

export function filterPerRated(payload) {
  return {
    type: "FILTER_RATED",
    payload,
  };
}

export function filterPerTicketsQty(payload) {
  return {
    type: "FILTER_TICKETS_QTY",
    payload,
  };
}

export function postViewer(newviewer) {
  try {
    const viewer = axios.post("https://back-asalallena.herokuapp.com/viewers", newviewer);
    return {
      type: "POST_VIEWER",
      payload: viewer,
    };
  } catch (error) {}
}
export const ORDER_SCORE = "ORDER_SCORE";

export function postTicket(newticket) {
  try {
    const tickets = axios.post("https://back-asalallena.herokuapp.com/tickets", newticket);
    return {
      type: "POST_TICKET",
      payload: tickets,
    };
  } catch (error) {}
}

export function showDetail(id) {
  return function (dispatch) {
    return axios
      .get(`https://back-asalallena.herokuapp.com/shows/${id}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: "SHOW_DETAIL", payload: data });
      });
  };
}

export function getViewerDetail(id) {
  return function (dispatch) {
    return axios
      .get(`https://back-asalallena.herokuapp.com/viewers/${id}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: GET_VIEWER_DETAIL, payload: data });
      });
  };
}

//export function loginTheater ({ email, password }) {
//    console.log(email)
//    return fetch('https://back-asalallena.herokuapp.com/login/theater', {
//      method: 'POST',
//      headers: {
//        "Content-Type": "application/json"
//      },
//      body: JSON.stringify({email, password})
//
//    }).then(res => {
//      if (!res.ok) throw new Error('Response is NOT ok')
//      return res.json()
//    }).then(res => {
//      const { jwt } = res
//      return jwt
//    })
//  }

export function loginTheater({ email, password }) {
  console.log(email);
  return (
    axios
      .post("https://back-asalallena.herokuapp.com/login/theater", { email, password })

     //.then(res => {
      //  if (!res.ok) throw new Error('Response is NOT ok')
      //  return res.json()
      //})
      .then((res) => {
        return res.data;
      })
      .catch((error) => console.log(error))
  );
}



export function putViewer(id, changes) {
  return function (dispatch) {
    return axios
      .put(`https://back-asalallena.herokuapp.com/viewers/${id}`, changes)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        dispatch({ type: PUT_VIEWER, payload: data });
      });
  };
}

export function putTicket(id, nuevoticket) {
  return function (dispatch) {
    return axios
      .put(`https://back-asalallena.herokuapp.com/tickets/${id}`, nuevoticket)
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: PUT_TICKET, payload: data });
      });
  };
}

export function getAllViewers() {
  return function (dispatch) {
    return axios
      .get("https://back-asalallena.herokuapp.com/viewers")
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: GET_ALL_ViEWERS, payload: data });
      });
  };
}

export function deleteViewer(id) {
  return function (dispatch) {
    return axios
      .delete(`https://back-asalallena.herokuapp.com/viewers/${id}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: DELETE_VIEWER, payload: data });
      });
  };
}

//export function loginViewer ({ email, password }) {
//    console.log(email)
//    return fetch('https://back-asalallena.herokuapp.com/login/viewer', {
//      method: 'POST',
//      headers: {
//        "Content-Type": "application/json"
//      },
//      body: JSON.stringify({email, password})
//
//    }).then(res => {
//      if (!res.ok) throw new Error('Response is NOT ok')
//      return res.json()
//    }).then(res => {
//      const { jwt } = res
//      return jwt
//    })
//  }

export function loginViewer({ email, password }) {
  console.log(email);
  return (
    axios
      .post("https://back-asalallena.herokuapp.com/login/viewer", { email, password })
       //.then(res => {
      //  if (!res.ok) throw new Error('Response is NOT ok')
      //  return res.json()
      //})
      .then((res) => {
        return res.data;
      })
      .catch((error) => console.log(error))
  );
}



  export function getShowByName(name) {
    return async function (dispatch){
        try {
            var resp = await axios.get (`https://back-asalallena.herokuapp.com/shows?name=${name}`);
            return dispatch({
                type: GET_SHOW_BY_NAME,
                payload: resp.data
            })
        } catch (e) {
            alert('No hay espectáculos con ese nombre');
            return console.log(e);
        }

    }
}

export function editProfileT(payload) {
  return async function (dispatch) {
    try {
      const { data } = await axios.put(
        `https://back-asalallena.herokuapp.com/theaters/${payload.id}`,
        payload
      );
      alert(data);
      return dispatch({ type: PUT_PROFILE_THEATER });
    } catch (err) {
      console.log(err);
    }
  };
}

export function createTheater(values) {
  try {
    const theater = axios.post("https://back-asalallena.herokuapp.com/theaters", values);
    return {
      type: "CREATE_THEATER",
      payload: theater,
    };
  } catch (error) {}
}

export function createFavorites(id, changes) {
  try {
    const fav = axios.post(`https://back-asalallena.herokuapp.com/favorites/${id}`, changes);
    console.log(fav);
    return {
      type: CREATE_FAVORITES,
      payload: fav,
    };
  } catch (error) {
    console.log(error);
  }
}

export function getAllTickets(){
    return function(dispatch){
        return axios.get('https://back-asalallena.herokuapp.com/tickets')
        .then(res => res.data)
        .then(data =>{
            dispatch({type: GET_ALL_TICKETS, payload: data})
        })
        .catch(error => console.log(error)) 
    }
    
}


export function postReview(theaterScore,showScore,review,nameTheater,nameShow,nameViewer) {
  try {
    const postreview = axios.post("https://back-asalallena.herokuapp.com/reviews", {theaterScore,showScore,review,nameTheater,nameShow,nameViewer});
    
    return {
      type: POST_REVIEW,
      payload: postreview,
    };
  } catch (error) {
    console.log(error);
  }
}

// export function checkoutPay(id) {
    // console.log(id)
    // // var script = document.createElement('script');
    // //         script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    // //         // const attr_data_preference = document.createAttribute('data-preference-id') //Crea un nodo atribute
	// //         // attr_data_preference.value = id.id  
    // //         // script.setAttributeNode(script);
    // //         script.type = "text/javascript";
    // //         script.dataset.preferenceId =  axios
    // //         .post ('https://back-asalallena.herokuapp.com/tickets/pay', {id}).preferenceId;
    // //         document.getElementById("button-checkout").innerHTML = "";
    // //         document.querySelector("#button-checkout").appendChild(script);
    // return (
    //     axios.post ('https://back-asalallena.herokuapp.com/tickets/pay', {id})
    //         .then((res) => {
    //             console.log(res.data)
    //             return res.data
    //         })
    //         .catch((e) => console.log(e))
    // )


    // return async function (dispatch) {
    //     try{
    //         const pay = await axios.post ('https://back-asalallena.herokuapp.com/tickets/pay', {id})
            
    //         var script = document.createElement('script');
    //         script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    //         // const attr_data_preference = document.createAttribute('data-preference-id') //Crea un nodo atribute
	  //       // attr_data_preference.value = id.id  
    //         // script.setAttributeNode(script);
    //         script.type = "text/javascript";
    //         script.dataset.preferenceId = pay.preferenceId;
    //         document.getElementById("button-checkout").innerHTML = "";
    //         document.querySelector("#button-checkout").appendChild(script);
    //         // var key = pay.data
    //         // console.log(key)
    //         // window.location.href = 'https://sandbox.mercadopago.com.ar/checkout/v1/redirect?pref_id=672708410-642e44a0-3182-4983-b7d7-3e01eebce9e5'
    //         // console.log(window.location)
    //         dispatch({
    //             type: CHECKOUT_PAY,
    //             payload: pay.data,
    //             // key
    //         })
    //         // window.location = pay.data.redirect
    //     } catch(e) {
    //         console.log(e)
    //     }
    // }


// }

export function checkoutPay({price, seatNumber, idShow, idViewer}) {
  return function (dispatch) {
    axios.post('https://back-asalallena.herokuapp.com/tickets/pay', {price, seatNumber, idShow, idViewer}).then((response) => {

      dispatch({
        type: CHECKOUT_PAY,
        payload: response.data,
      });
    });
  };
}

export function postNewsletterShow(nameTheater) {
  try {
    const postshow = axios.post("https://back-asalallena.herokuapp.com/newsletter", {nameTheater});
    
    return {
      type: POST_NEWSLETTER_SHOW,
      payload: postshow,
    };
  } catch (error) {
    console.log(error);
  }
}

export const ORDER_PRICE = "ORDER_PRICE";
export const FILTER_PROVINCE = "FILTER_PROVINCE";
export const POST_SHOW = "POST_SHOW";
export const GET_ALL_SHOWS = "GET_ALL_SHOWS";
export const GET_ALL_THEATERS = "GET_ALL_THEATERS";
export const FILTER_THEATER = "FILTER_THEATER";
export const FILTER_GENRE = "FILTER_GENRE";
export const FILTER_RATED = "FILTER_RATED";
export const FILTER_TICKETS_QTY = "FILTER_TICKETS_QTY";
export const POST_VIEWER = "POST_VIEWER";
export const POST_TICKET = "POST_TICKET";
export const SHOW_DETAIL = "SHOW_DETAIL";
export const THEATER_DETAIL = "THEATER_DETAIL";
export const GET_VIEWER_DETAIL = "GET_VIEWER_DETAIL";
export const PUT_VIEWER = "PUT_VIEWER";
export const GET_ALL_ViEWERS = 'GET_ALL_ViEWERS';
export const GET_SHOW_BY_NAME = 'GET_SHOW_BY_NAME';
export const DELETE_VIEWER= 'DELETE_VIEWER';
export const CHECKOUT_PAY = 'CHECKOUT_PAY';
export const PUT_PROFILE_THEATER = "PUT_PROFILE_THEATER";
export const CREATE_THEATER = "CREATE_THEATER";
export const CREATE_FAVORITES = "CREATE_FAVORITES";
export const GET_ALL_TICKETS = "GET_ALL_TICKETS";
export const PUT_TICKET = "PUT_TICKET";
export const POST_REVIEW = 'POST_REVIEW';
export const POST_NEWSLETTER_SHOW = 'POST_NEWSLETTER_SHOW';
export const LOGIN_THEATER = 'LOGIN_THEATER';
export const LOGIN_VIEWER = 'LOGIN_VIEWER';