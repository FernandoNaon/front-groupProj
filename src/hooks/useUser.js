import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext.js";
import { loginTheater, loginViewer } from "../redux/actions/index.js";
import { useSelector } from "react-redux";

const useUser = () => {
  const { rol, key, id, setRol, setKey, setId, roles, setRoles } =
    useContext(Context);
  const [state, setState] = useState({ loading: false, error: false });
  

  const login = useCallback(
    (input) => {
      setState({ loading: true, error: false });
      loginTheater(input)
        .then((data) => {
          window.sessionStorage.setItem("key", data);
          
          setState({ loading: false, error: false });
          setKey(data);
          
        })
        .catch((err) => {
          window.sessionStorage.removeItem("key");
          
          setState({ loading: false, error: true });
          console.error(err);
        });
    },
    [setKey, setId, setRoles]
  );

  const loginviewer = useCallback(
    (input) => {
      setState({ loading: true, error: false });
      loginViewer(input)
        .then((data) => {
          window.sessionStorage.setItem("key", data);
          
          setState({ loading: false, error: false });
          setKey(data);
          
        })
        .catch((err) => {
          window.sessionStorage.removeItem("key");
          
          setState({ loading: false, error: true });
          console.error(err);
        });
    },
    [setKey, setId, setRol]
  );

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("key");
    setKey(null);
    
    //setRol(null)
    window.location.href="https://front-a-sala-llena-five.vercel.app/"
  }, [setKey])

  return {
    isLogged: Boolean(key),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
    loginviewer,
    id,
    rol,
    roles,
  };
};

export default useUser;
