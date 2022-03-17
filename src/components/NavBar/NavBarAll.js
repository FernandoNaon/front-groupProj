import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBarAll.module.css";
import {
  Navbar,
  Offcanvas,
  Container,
  Button,
  Dropdown,
} from "react-bootstrap";
import SearchBar from "../SearchBar/SearchBar.js";
import Filters from "./Filters";

export default function NavBarAll({ setActualPage, setOrder }) {
  return (
    <div>
      <Navbar
        className={style.heigthConfig}
        bg="dark"
        variant="dark"
        expand={false}
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <p className={style.logo}>A Sala Llena</p>
          </Navbar.Brand>
          <div className={style.searchContainer}>
            <SearchBar />
          </div>
          <div className={style.buttonsContainer}>
            {/* //------------------Boton Dropdown------------------------- */}
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Entrar
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Link to="/loginviewer">
                    <Button variant="outline-dark">Espectador</Button>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <Link to="/loginteatres">
                    <Button variant="outline-dark">Teatro</Button>
                  </Link>
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
                <Filters setActualPage={setActualPage} setOrder={setOrder} />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
