import React, { useEffect, useState } from "react";
import { checkoutPay, totalPrice } from "../../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import style from "./Checkout.module.css";

export default function Checkout({
  // price,
  id,
  idV,
  selected,
  setSelected,
  idShow,
}) {
  const show = useSelector((state) => state.showdetail);
  const priceTicket = useSelector((state) => state.totalPrice);
  console.log(show);
  const showId = id;
  const idViewer = idV;
  const seatNumber = selected; //array de asientos elegidos
  console.log(seatNumber);
  const link = useSelector((state) => state.link);
  const dispatch = useDispatch();
  // const tickets = useSelector((state) => state.tickets);
  // console.log(tickets);
  console.log(priceTicket, 'precio total');
  useEffect(() => {
    if(priceTicket){
      window.localStorage.setItem("price", JSON.stringify(priceTicket));
    } else if(!priceTicket){
        setPrice(JSON.parse(window.localStorage.getItem("price")));
        dispatch(totalPrice(JSON.parse(window.localStorage.getItem("price"))));
    }
  },[priceTicket])

  const [price, setPrice] = useState(0)

  function buttonMp() {
    dispatch(checkoutPay({ seatNumber, showId, idViewer }));
  }

  var total = 0;
  if (priceTicket && seatNumber?.length > 0) {
      total = priceTicket * seatNumber?.length;
    } else if(price && seatNumber?.length > 0) {
      total = price * seatNumber?.length;
    }

  return (
    <div>
      <div className={style.inputContainer}>
        <label>Número de entradas</label>
        <input
          value={selected}
          disabled
          onChange={(e) => setSelected(e)}
        ></input>
      </div>
      <div className={style.inputContainer}>
        <label>Total</label>
        <h3>${total}</h3>
      </div>
      <div>
        <button className="btn btn-dark" onClick={(e) => buttonMp(e)}>
          Confirmar pago
        </button>
        {link && 
          window.open(link, '_self')
        }
      </div>
      <br />

      <br />
    </div>
  );
}