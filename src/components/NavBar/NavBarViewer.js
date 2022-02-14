import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser.js";
import style from "./NavBarViewer.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useParams } from "react-router-dom";
import logo from "../../assets/logo a sala llena-sinfondo.png";

export default function NavBarViewer() {
  const { logout } = useUser();
  const { id } = useParams();

  function handleLogOut(e) {
    e.preventDefault();
    logout();
  }
  console.log(id);
  return (
    <div>
      <div className={style.NavBarAllContainer}>
        <div className={style.column}>
          <Link to="/">
            <img className={style.logo} src={logo} alt="A sala llena" />
          </Link>
          <div>
            <NavBar />
          </div>
        </div>
        <div className={style.miCuenta}>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Mi cuenta
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href={`/formPutViewer/${id}`}>
                <button>Perfil</button>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <button onClick={handleLogOut}>Cerrar sesión</button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
