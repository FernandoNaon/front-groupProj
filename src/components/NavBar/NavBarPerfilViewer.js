import React from "react";
import useUser from "../../hooks/useUser";
//import style from "./NavBarViewer.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useParams } from "react-router-dom";

const NavBarPerfilViewer = () => {
  const { id } = useParams();
  const { logout } = useUser();

  function handleLogOut(e) {
    e.preventDefault();
    logout();
  }

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Mi cuenta
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href={`formPutViewer/${id}`}>
            <button>Mi Cuenta</button>
          </Dropdown.Item>
          <Dropdown.Item href={`viewerHistory/${id}`}>
            <button>Mis Reservas</button>
          </Dropdown.Item>
          <Dropdown.Item href={`newsletter/${id}`}>
            <button>Newsletter</button>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            <button onClick={handleLogOut}>Cerrar sesión</button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default NavBarPerfilViewer;
