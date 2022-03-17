import React, { useState, useEffect } from "react";
import { postPasswordRecoveryViewer } from "../../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { getAllViewers } from "../../redux/actions/index.js";
import style from "./PasswordRecoveryViewer.module.css";
import { Navbar, Form, Container, Button } from "react-bootstrap";

import swal from "sweetalert";

const PasswordRecoveryViewer = () => {
  const dispatch = useDispatch();
  const viewers = useSelector((state) => state.viewers);
  const [input, setInput] = useState({ email: "" });

  useEffect(() => {
    dispatch(getAllViewers());
  }, [dispatch]);

  function inputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const filterViewer = viewers?.find((e) => e.email === input.email);
    if (filterViewer) {
      postPasswordRecoveryViewer(input.email);
      swal("Email enviado!", "", "success");
      window.location.href = `https://front-group-proj.vercel.app/`;
      setInput("");
    } else {
      swal("", "Este email no esta registrado!", "error");
    }
  }

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
        </Container>
      </Navbar>
      <div className={style.bodyContainer}>
        <h2>Ingresa tu correo electrónico</h2>
        <div className={style.loginContainer}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Email..."
                value={input.email}
                name="email"
                onChange={inputChange}
              />
            </Form.Group>
            <Button variant="dark" type="submit" onClick={handleSubmit}>
              Enviar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecoveryViewer;
