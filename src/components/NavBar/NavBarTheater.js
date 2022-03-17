import React from "react";
import { useHistory, Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import style from "./NavBarTheater.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Navbar, Container, Button } from "react-bootstrap";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBarTheater({ id, img, name }) {
  const { logout } = useUser();

  const history = useHistory();

  function handleLogOut(e) {
    e.preventDefault();
    logout();
  }

  return (
    <div className={style.navContainer}>
      <Navbar
        className={style.heigthConfig}
        bg="dark"
        variant="dark"
        expand={false}
      >
        <Container fluid>
          <Navbar.Brand href={`/theaterHome/${id}`}>
            <p className={style.logo}>A Sala Llena</p>
          </Navbar.Brand>
          <div className={style.profileContainer}>
            {/*<img className={style.profileImage} src={img} alt="img" />*/}
            <p className={style.name}>Hola {name}!</p>
          </div>

          <div className={style.searchContainer}>
            <SearchBar />
          </div>

          <div className={style.buttonsContainer}>
            {/* //------------------Boton Dropdown------------------------- */}
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Mi cuenta
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href={`/create/${id}`}>
                  <Button variant="outline-dark" href={`/create/${id}`}>
                    Agregar espectáculos
                  </Button>
                </Dropdown.Item>
                <Dropdown.Item href={`/salesHistory/${id}`}>
                  <Button variant="outline-dark">Ventas</Button>
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    history.push(`/editProfileTheater/${id}`)
                  }
                >
                  <Button variant="outline-dark">Perfil</Button>
                </Dropdown.Item>
                <Dropdown.Item href="">
                  <Button variant="outline-dark" onClick={handleLogOut}>
                    Cerrar Sesión
                  </Button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
