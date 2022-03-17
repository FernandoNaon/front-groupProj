import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { Link, Redirect } from "react-router-dom";
//import { useLocation } from 'react-router-dom';
import useUser from "../../hooks/useUser.js";
import { allTheaters } from "../../redux/actions/index.js";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Form, Container, Button } from "react-bootstrap";
import style from "./LoginTheaters.module.css";
import swal from "sweetalert";

function validate(input) {
  let errors = {};
  if (input.email === "") {
    errors.email = "e-mail no puede estar vacio";
  }
  if (!input.email.includes("@")) {
    errors.email = "No es un email valido";
  }
  if (input.password === "") {
    errors.password = "password no puede estar vacio";
  }

  return errors;
}

const LogInTheatres = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const {hasLoginError,hasLoginErrorG,login,googleLoginTheater,idT,statusIdT,imgT} = useUser();
  const theaters = useSelector((state) => state.theaters);
  //const [idT,setIdT] = useState('')

  useEffect(() => {
    dispatch(allTheaters());
  }, [dispatch]);

  const filterTheater = theaters?.find(
    (e) => e.email === input.email && e.password === input.password
  );
  console.log(filterTheater);
  console.log("idT", idT);
  console.log('imgT',imgT)
  const handleFailure = (response) => {
    swal({
      tittle: response,
      icon: "error",
    });
  };

  const handleLogin = (googleData) => {
    googleLoginTheater(googleData);
  };

  function handleSubmit(e) {
    e.preventDefault();
    login(input);
    setInput({ email: "", password: "" });
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
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

      <div className={style.loginContainer}>
        {statusIdT ? (
          <Redirect to={`/theaterHome/${statusIdT}`} />
        ) : (
          <form onSubmit={handleSubmit}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email..."
                  value={input.email}
                  name="email"
                  onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
                <Form.Text className="text-muted">
                  Nunca compartiremos esta información
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="password"
                  value={input.password}
                  name="password"
                  onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
              </Form.Group>
              <Button variant="dark" type="submit" onClick={handleSubmit}>
                Iniciar Sesion
              </Button>
            </Form>
          </form>
        )}

        {hasLoginError && <strong>Usuario o contraseña invalidos</strong>}
        <div className={style.btn}>
          <Link to="/theaterRegister">
            <Button variant="dark" type="submit">
              Registrarse
            </Button>
          </Link>
        </div>
        <Link to="/passwordRecoveryTheater">¿Olvidaste tu contraseña?</Link>
        {idT > 0 ? (
          <Redirect to={`/theaterHome/${idT}`} />
        ) : (
          <form className={style.googleContainer}>
            <GoogleLogin
              clientId="506901482868-h6pf1ffiuv7vicavl8btlunj18oeamjr.apps.googleusercontent.com"
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={"single_host_origin"}
            />
            {hasLoginErrorG && <strong>Usuario invalido</strong>}
          </form>
        )}
      </div>
    </div>
  );
};

export default LogInTheatres;
