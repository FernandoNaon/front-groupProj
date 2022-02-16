import React, { useState, useRef, useEffect } from "react";
import style from "./timer.module.css";

const Timer = ({ newDate, newTime, price }) => {
  const [timerDias, setTimerDias] = useState("00");
  const [timerHoras, setTimerHoras] = useState("00");
  const [timerMinutos, setTimerMinutos] = useState("00");
  const [timerSegundos, setTimerSegundos] = useState("00");
  const [preciofinal, setPreciofinal] = useState("");
  const [porcentaje, setPorcentaje] = useState(null);

  //devuelve un objeto ref mutable cuya propiedad .current se inicializa con el argumento pasado (initialValue).
  //El objeto devuelto se mantendrá persistente durante la vida completa del componente.
  let interval = useRef();
  let downDate = newDate + " " + newTime;

  const startTimer = () => {
    //Le vamos a guardar aqui la fecha para la cuenta atras
    const countdownDate = new Date(downDate).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
      const horas = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDias(dias);
        setTimerHoras(horas);
        setTimerMinutos(minutos);
        setTimerSegundos(segundos);
      }
    }, 1000);
  };
  useEffect(() => {
    numerodeporcentaje();
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  function numerodeporcentaje() {
    if (timerDias === 0 && timerHoras < 6) {
      setPorcentaje(10);
      porcentajefuncion(porcentaje);
    } else if (timerDias === 0 && timerHoras < 12) {
      setPorcentaje(15);
      porcentajefuncion(porcentaje);
    } else if (timerDias === 0 && timerHoras > 12) {
      setPorcentaje(20);
      porcentajefuncion(porcentaje);
    } else if (timerDias === 1 && timerHoras > 12) {
      setPorcentaje(25);
      porcentajefuncion(porcentaje);
    } else {
      setPorcentaje(30);
      porcentajefuncion(porcentaje);
    }
  }

  function porcentajefuncion(porcentajes) {
    var descuento = (price * porcentajes) / 100;
    console.log(descuento);
    var preciofinal = price - descuento;
    setPreciofinal(preciofinal);
  }

  console.log(price);
  // console.log(newDate)
  // console.log(newTime)
  return (
    <section>
      <section>
        <div className={style.timerContainer}>
          <section>
            <p>{timerDias}</p>
            <p>
              <small>Dias</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerHoras}</p>
            <p>
              <small>Horas</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerMinutos}</p>
            <p>
              <small>Minutos</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerSegundos}</p>
            <p>
              <small>Segundos</small>
            </p>
          </section>
        </div>
      </section>
      <h3 className={style.label}>Precio:</h3>
      <h4 className={style.data}>${preciofinal}</h4>
      <h3 className={style.label}>Descuento: </h3>
      <h4 className={style.data}>{porcentaje}%</h4>
    </section>
  );
};
export default Timer;
