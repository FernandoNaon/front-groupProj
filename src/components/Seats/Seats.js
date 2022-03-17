import { useState, useEffect } from "react";
import style from "./Seat.module.css";
import { useSelector } from "react-redux";
import Checkout from "../Checkout/Checkout";
import swal from "sweetalert";

const MySeats = ({
  seatsNumber,
  setSeatAvailable,
  seatsavailable,
  form,
  preciofinal,
  setPreciofinal,
  id,
  idV,
}) => {
  const { showdetail } = useSelector((s) => s);
  const filas = new Array(Math.ceil(8)).fill(0).map((el, index) => index + 1);
  const sillas = new Array(Math.ceil(10)).fill(0).map((el, index) => index + 1);
  const [available, setAvailable] = useState(
    showdetail.seatsAvailable && showdetail.seatsAvailable.length > 0
      ? showdetail.seatsAvailable.map((el) => el)
      : JSON.parse(window.localStorage.getItem("show"))
  );
  const [selected, setSelected] = useState([]);
  // const filas = new Array(values.row).fill(0).map((el, index)=> index)
  // const sillas = new Array(Math.ceil(values.seats/values.row)).fill(0).map((el, index)=> index)
  // console.log("available:", available);
  const onClickSeat = (r, s) => {
    let silla = `${r}-${s}`;
    // console.log(`row: ${r}, seat: ${s}`)
    if(seatsNumber < selected){
      let ultimo = selected.pop()
      setSelected(selected.filter(el => el===ultimo))
    }
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
    } else if (seatsNumber == 0) {
      swal({
        text: "Indique cuantos asientos quiere",
        icon: "error",
        button: false,
      });
    } else if (selected.length == seatsNumber) {
      swal({
        text: "No puede escoger más tickets",
        icon: "error",
        button: false,
      });
    }
  };
  useEffect(() => {
    if(seatsNumber === 0){
      setAvailable([...available, ...selected])
      setSelected([])
    }
    if(selected.length>0 && seatsNumber> 0 && seatsNumber === selected.length-1){
      const filtrado = selected.filter(el => el !== selected[selected.length-1])
      setAvailable([...available, ...selected.filter(el => el === selected[selected.length-1])])
      setSelected(filtrado)
    }
      if (showdetail.seatsAvailable && showdetail.seatsAvailable.length > 0) {
      console.log("showdetail.seatsAvailable", showdetail.seatsAvailable);
      let array = showdetail.seatsAvailable;
      window.localStorage.setItem("show", JSON.stringify(array));
    } else if (!showdetail.seatsAvailable) {
      console.log("else: ", JSON.parse(window.localStorage.getItem("show")));
    }
  }, [ showdetail.seatsAvailable, seatsNumber]);

  return (
    <div className={style.seatContainer}>
      <div className={style.component}>
        {form ? (
          <ul className={style.showcase}>
            <li>
              <div className={style.seat}></div>
              <small>Ocupado</small>
            </li>
            <li>
              <div className={`${style.seat} ${style.selected}`}></div>
              <small>Seleccionado</small>
            </li>
          </ul>
        ) : (
          <ul className={style.showcase}>
            <li>
              <div className={style.seat}></div>
              <small className={style.label}>Disponible</small>
            </li>
            <li>
              <div className={`${style.seat} ${style.selected}`}></div>
              <small className={style.label}>Seleccionado</small>
            </li>
            <li>
              <div className={`${style.seat} ${style.occupied}`}></div>
              <small className={style.label}>Ocupado</small>
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
      <Checkout
        selected={selected}
        setSelected={setSelected}
        seatsavailable={seatsavailable}
        id={id}
        idV={idV}
      />
    </div>
  );
};

export default MySeats;
