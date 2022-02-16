import { useState, useEffect } from "react";
import style from "./Seat.module.css";
import { useSelector } from "react-redux";

const MySeats = ({ seatsNumber, setSeatAvailable, seatsavailable, form }) => {
  const { showdetail } = useSelector((s) => s);
  const filas = new Array(Math.ceil(8)).fill(0).map((el, index) => index + 1);
  const sillas = new Array(Math.ceil(10)).fill(0).map((el, index) => index + 1);
  const [available, setAvailable] = useState(
    showdetail.tickets && showdetail.tickets.length > 0
      ? showdetail.tickets.map((el) => el.seatNumber)
      : JSON.parse(window.localStorage.getItem("show"))
  );
  const [selected, setSelected] = useState([]);
  // const filas = new Array(values.row).fill(0).map((el, index)=> index)
  // const sillas = new Array(Math.ceil(values.seats/values.row)).fill(0).map((el, index)=> index)
  console.log("available:", available);
  const onClickSeat = (r, s) => {
    let silla = `${r}-${s}`;
    // console.log(`row: ${r}, seat: ${s}`)
    if (!selected.includes(silla) && form) {
      setSelected([...selected, silla]);
      setSeatAvailable([...seatsavailable, silla]);
    } else if (form && selected.includes(silla)) {
      setSelected(selected.filter((el) => el !== silla));
      setSeatAvailable(selected.filter((el) => el !== silla));
    } else if (
      !selected.includes(silla) &&
      available.includes(silla) &&
      selected.length <= seatsNumber - 1
    ) {
      setSelected([...selected, silla]);
      setAvailable(available.filter((el) => el !== silla));
    } else if (selected.includes(silla)) {
      setSelected(selected.filter((el) => el !== silla));
      setAvailable([...available, silla]);
    } else if (selected.length === seatsNumber) {
      alert("no puedes escoger mas tickets");
    }
  };
  useEffect(() => {
    if (showdetail.tickets && showdetail.tickets.length > 0) {
      console.log("if numero 1:", showdetail.tickets);
      let array = showdetail.tickets.map((el) => el.seatNumber);
      window.localStorage.setItem("show", JSON.stringify(array));
    } else if (!showdetail.tickets) {
      console.log("else: ", JSON.parse(window.localStorage.getItem("show")));
    }
  }, [showdetail.tickets]);

  console.log(selected);
  return (
    <div className={style.seatContainer}>
      <div className={style.component}>
        {form ? (
          <ul className={style.showcase}>
            <li>
              <div className={style.seat}></div>
              <small>Occupied</small>
            </li>
            <li>
              <div className={`${style.seat} ${style.selected}`}></div>
              <small>Selected</small>
            </li>
          </ul>
        ) : (
          <ul className={style.showcase}>
            <li>
              <div className={style.seat}></div>
              <small>N/A</small>
            </li>
            <li>
              <div className={`${style.seat} ${style.selected}`}></div>
              <small>Selected</small>
            </li>
            <li>
              <div className={`${style.seat} ${style.occupied}`}></div>
              <small>Occupied</small>
            </li>
          </ul>
        )}
        <div className={style.container}>
          {filas.map((r) => (
            <div className={style.row}>
              <label className={style.indice}>{r}</label>
              {form
                ? sillas.map((el) => (
                    <div
                      className={
                        selected.includes(`${r}-${el}`)
                          ? `${style.seat} ${style.selected}`
                          : selected.includes(`${r}-${el}`)
                          ? `${style.seat} ${style.selected}`
                          : `${style.seat}`
                      }
                      key={`${r}-${el}`}
                      onClick={() => onClickSeat(r, el)}
                    >
                      {el}
                    </div>
                  ))
                : sillas.map((el) => (
                    <div
                      className={
                        available.includes(`${r}-${el}`)
                          ? `${style.seat}`
                          : selected.includes(`${r}-${el}`)
                          ? `${style.seat} ${style.selected}`
                          : `${style.seat} ${style.occupied}`
                      }
                      onClick={() => onClickSeat(r, el)}
                    >
                      {el}
                    </div>
                  ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySeats;
