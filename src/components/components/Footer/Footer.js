import React from "react";
import img from "../../logo a sala llena-sinfondo.png";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className={style.linksContainer}>
        <a className={style.links} href="/privacyPolicy">
          Politicas de Privacidad
        </a>
        <a className={style.links} href="/termsConditions">
          Terminos y Condiciones
        </a>
      </div>
      <h5>Contacto</h5>
      <p>Buenos Aires, Argentina</p>
      <p>Copyright © 2022 - A Sala Llena</p>
      <div className={style.logoContainer}>
        <img className={style.img} src={img} alt="img" />
      </div>
    </div>
  );
};

export default Footer;
