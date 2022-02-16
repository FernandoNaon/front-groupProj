import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/logo a sala llena-sinfondo.png";
import useUser from "../../hooks/useUser";
import style from "./NavBarTheater.module.css";
import Dropdown from "react-bootstrap/Dropdown";

export default function NavBarTheater({ id }) {
  const { logout } = useUser();

  const history = useHistory();

  function handleLogOut(e) {
    e.preventDefault();
    logout();
  }

  return (
    <div className={style.navContainer}>
      <div className={style.logoContainer}>
        <Link to="/">
          <img className={style.logo} src={logo} alt="A sala llena" />
        </Link>
      </div>
      <div className={style.micuenta}>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Mi cuenta
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href={`/create/${id}`}>
              <button href={`/create/${id}`}>Agregar espectáculos</button>
            </Dropdown.Item>
            <Dropdown.Item href={`/salesHistory/${id}`}>
              <button>Ventas</button>
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => history.push(`/editProfileTheater/${id}`)}
            >
              <button>Perfil</button>
            </Dropdown.Item>
            <Dropdown.Item href="">
              <button onClick={handleLogOut}>Cerrar Sesión</button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
