import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import useUser from "../../hooks/useUser.js";
import { allTheaters } from "../../redux/actions/index.js";
import { useSelector, useDispatch } from "react-redux";
//import Footer from "../Footer/Footer.js";
import logo from "../../assets/logo a sala llena-sinfondo.png";
import style from "./LoginTheaters.module.css";
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
  //const [,navigate] = useLocation();
  const { hasLoginError, login } = useUser();
  const theaters = useSelector((state) => state.theaters);

  useEffect(() => {
    dispatch(allTheaters());
  }, [dispatch]);

  const filterTheater = theaters?.find(
    (e) => e.email === input.email && e.password === input.password
  );
  console.log(filterTheater);

  const responseGoogle = (response) => {
    console.log(response);
  };

  function handleSubmit(e) {
    e.preventDefault();
    login(input);
    //navigate('/viewerHome/1')
    window.location.href = `https://front-a-sala-llena-five.vercel.app/theaterHome/${filterTheater.id}/`;
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
    <div className={style.loginContainer}>
      <div className={style.header}>
        <Link to="/">
          <img className={style.logo} src={logo} alt="A sala llena" />
        </Link>
      </div>
      <div className={style.formContainer}>
        <form className={style.inputs} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email..."
            value={input.email}
            name="email"
            onChange={handleChange}
          />
          {errors.email && <p className={style.errors}>{errors.email}</p>}
          <input
            type="password"
            placeholder="password"
            value={input.password}
            name="password"
            onChange={handleChange}
          />
          {errors.password && <p className={style.errors}>{errors.password}</p>}
          <button>LogIn</button>
        </form>

        {hasLoginError && (
          <strong className={style.errors}>
            Usuario o contraseña invalidos
          </strong>
        )}
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
        <Link to="/theaterRegister">
          <button>REGISTRARSE</button>
        </Link>
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
};

export default LogInTheatres;
