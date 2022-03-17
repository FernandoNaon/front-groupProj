import React from "react";
import img from "../../logo a sala llena-sinfondo.png";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className={style.linksContainer}>
        <a className={style.links} href="/privacyPolicy">
          Políticas de Privacidad
        </a>
        <a className={style.links} href="/termsConditions">
          Términos y Condiciones
        </a>
      </div>
      <div className={style.data}>
        <h5>Contacto</h5>
        <p>asalallenaapp@gmail.com</p>
        <p>Buenos Aires, Argentina</p>
        <p>Copyright © 2022 - A Sala Llena</p>
      </div>
    </div>
  );
};

export default Footer;
