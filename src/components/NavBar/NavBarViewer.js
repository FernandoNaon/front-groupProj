import React from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser.js";
import style from "./NavBarViewer.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useParams } from "react-router-dom";
import Filters from "./Filters";
import { Navbar, Offcanvas, Container, Button } from "react-bootstrap";
import SearchBar from "../SearchBar/SearchBar.js";

export default function NavBarViewer({ img, name }) {
  const { logout } = useUser();
  const { id } = useParams();

  function handleLogOut(e) {
    e.preventDefault();
    logout();
  }
  console.log(id);
  return (
    <div>
      <Navbar
        className={style.heigthConfig}
        bg="dark"
        variant="dark"
        expand={false}
      >
        <Container fluid>
          <Navbar.Brand href={`/viewerHome/${id}`}>
            <p className={style.logo}>A Sala Llena</p>
          </Navbar.Brand>
          <div className={style.profileContainer}>
           {/* <img className={style.profileImage} src={img} alt="img" />*/}
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
                <Dropdown.Item>
                  <Link to={`/formPutViewer/${id}`}>
                    <Button variant="outline-dark">Perfil</Button>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to={`/viewerHistory/${id}`}>
                    <Button variant="outline-dark">Mis Reservas</Button>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to={`/newsletter/${id}`}>
                    <Button variant="outline-dark">Newsletter</Button>
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item href="#/action-2">
                  <Button variant="outline-dark" onClick={handleLogOut}>
                    Cerrar sesión
                  </Button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* //------------------modal------------------------- */}
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Filtros
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Filters />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
