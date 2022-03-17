import { useState, useEffect } from "react";
import style from "./SeatForm.module.css";
import { useSelector } from "react-redux";
import swal from "sweetalert";

const SeatForm = ({
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
  console.log("available:", available);
  const onClickSeat = (r, s) => {
    let silla = `${r}-${s}`;
    // console.log(`row: ${r}, seat: ${s}`)
    if (!selected.includes(silla) && form) {
      console.log("showdetail: ", showdetail);
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
    } else if (selected) {
      swal({
        tittle: "No puedes escoger más tickets",
        icon: "error",
        time: 2000,
      });
    }
  };
  useEffect(() => {
    if (showdetail.seatsAvailable && showdetail.seatsAvailable.length > 0) {
      console.log("showdetail.seatsAvailable: ", showdetail.seatsAvailable);
      let array = showdetail.seatsAvailable;
      window.localStorage.setItem("show", JSON.stringify(array));
    } else if (!showdetail.seatsAvailable) {
      console.log("else: ", JSON.parse(window.localStorage.getItem("show")));
    }
  }, [showdetail.seatsAvailable]);

  console.log(selected);
  console.log(setSelected);
  return (
    <div className={style.seatContainer}>
      <div className={style.component}>
        {form ? (
          <ul className={style.showcase}>
            <li>
              <div className={style.seat}></div>
              <small className={style.label}>Ocupado</small>
            </li>
            <li>
              <div className={`${style.seat} ${style.selected}`}></div>
              <small className={style.label}>Selección</small>
            </li>
          </ul>
        ) : (
          <ul className={style.showcase}>
            <li>
              <div className={style.seat}></div>
              <small>Disponible</small>
            </li>
            <li>
              <div className={`${style.seat} ${style.selected}`}></div>
              <small>Seleccionado</small>
            </li>
            <li>
              <div className={`${style.seat} ${style.occupied}`}></div>
              <small>Ocupado</small>
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

export default SeatForm;
