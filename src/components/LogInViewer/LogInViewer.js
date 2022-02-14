import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { Link, useHistory } from "react-router-dom";
import useUser from "../../hooks/useUser.js";
import { getAllViewers } from "../../redux/actions/index.js";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../Footer/Footer.js";
import logo from "../../assets/logo a sala llena-sinfondo.png";
import style from "./LoginViewer.module.css";


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

const LogInViewer = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const { hasLoginError, loginviewer } = useUser();
  const viewers = useSelector((state) => state.viewers);
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllViewers());
  }, [dispatch]);

  const filterViewer = viewers?.find(
    (e) => e.email === input.email && e.password === input.password
  );
  console.log(filterViewer);

  const responseGoogle = (response) => {
    console.log(response);
  };

  function inputChange(e) {
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

  function handleSubmit(e) {
    e.preventDefault();
    loginviewer(input);
    //navigate('/viewerHome/1')
    window.location.href = `https://front-a-sala-llena-five.vercel.app/viewerHome/${filterViewer.id}/`;
    setInput({ email: "", password: "" });
  }

  return (
    <div className={style.loginContainer}>
      <div className={style.header}>
        <Link to="/">
          <img className={style.logo} src={logo} alt="A sala llena" />
        </Link>
      </div>
      <div>
        <Link to='/'>
        <button>Volver</button>
        </Link>
      </div>
      <div className={style.formContainer}>
        <form className={style.inputs} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email..."
            value={input.email}
            name="email"
            onChange={inputChange}
          />
          {errors.email && <p>{errors.email}</p>}
          <input
            type="password"
            placeholder="password"
            value={input.password}
            name="password"
            onChange={inputChange}
          />
          {errors.password && <p>{errors.password}</p>}
          <button>LogIn</button>
        </form>
        {hasLoginError && <strong>Usuario o contraseña invalidos</strong>}
        <br></br>
        <br></br>
        <GoogleLogin
          clientId="506901482868-h6pf1ffiuv7vicavl8btlunj18oeamjr.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <p>o</p>
        <a>¿Olvidaste tu contraseña?</a>
        <Link to="/formViewerRegister">
          <button>REGISTRARSE</button>
        </Link>
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
};

export default LogInViewer;
