import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import style from "./NavBarAll.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../../assets/logo a sala llena-sinfondo.png";

export default function NavBarAll({ setActualPage, setOrder }) {
  return (
    <div>
      <div className={style.NavBarAllContainer}>
        <div className={style.column}>
          <Link to="/">
            <img className={style.logo} src={logo} alt="A sala llena" />
          </Link>
          <NavBar setActualPage={setActualPage} setOrder={setOrder} />
        </div>
        <div className={style.loginContainer}>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Entrar
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <Link to="/loginviewer">
                  <button>Login Espectador</button>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <Link to="/loginteatres">
                  <button>Login Teatro</button>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
