import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext.js";
import { loginTheater, loginViewer } from "../redux/actions/index.js";


const useUser = () => {
  const { status, setStatus,loginData,setLoginData,id,setId,img,setImg} = useContext(Context);
  const [state, setState] = useState({ loading: false, error: false });
  const [stateG, setStateG] = useState(false);
  const [idV,setIdV] = useState('');
  const [idT,setIdT] = useState('');
  const [statusIdV,setStatusIdV] = useState('');
  const [statusIdT,setStatusIdT] = useState('');
  const [imgV,setImgV] = useState('');
  const [imgT,setImgT] = useState('');
  console.log(imgT)
  console.log(statusIdT)
  const login = useCallback(
    (input) => {
      setState({ loading: true, error: false });
      loginTheater(input)
        .then((data) => {
          if(data.error){
            setState(true);
          }else{
          window.sessionStorage.setItem("status", data.isLogged);
          window.sessionStorage.setItem("id", data.id);
          window.sessionStorage.setItem("img", data.img);
          setStatus(data.isLogged);
          setStatusIdT(window.sessionStorage.getItem('id').valueOf())
          setImgT(window.sessionStorage.getItem('img')?.valueOf())
          }
          
        })
        .catch((err) => {
          window.sessionStorage.removeItem("status");
          window.sessionStorage.removeItem("id");
          window.sessionStorage.removeItem("img");
          
          setState({ loading: false, error: true });
          console.error(err);
        });
    },
    [setStatus]
  );

  const loginviewer = useCallback(
    (input) => {
      setState({ loading: true, error: false });
      loginViewer(input)
        .then((data) => {
          if(data.error){
            setState(true);
          }else{
            
          window.sessionStorage.setItem("status", data.isLogged);
          window.sessionStorage.setItem("id", data.id);
          window.sessionStorage.setItem("img", data.img);
          setStatus(data.isLogged);
          setStatusIdV(window.sessionStorage.getItem('id').valueOf())
          setImgV(window.sessionStorage.getItem('img').valueOf())
          }
          
          
        })
        .catch((err) => {
          window.sessionStorage.removeItem("status");
          window.sessionStorage.removeItem("id");
          window.sessionStorage.removeItem("img");
          setState({ loading: false, error: true });
          console.error(err);
        });
    },[setStatus]
  );

  const googleLoginViewer = async (googleData) => {
    try {
      const res = await fetch('https://back-pg.herokuapp.com/login/google/viewer', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await res.json();
    
    if(JSON.stringify(data.id) > 0){
      setLoginData(data.token);
      
      sessionStorage.setItem('loginData', JSON.stringify(data.token));
      sessionStorage.setItem('id', JSON.stringify(data.id));
      setIdV(window.sessionStorage.getItem('id').valueOf())
    }else{
      setStateG({ loading: false, error: true });
    }
    
    } catch (err) {
          window.sessionStorage.removeItem("loginData");
          window.sessionStorage.removeItem("id");
          
          setState({ loading: false, error: true });
          console.error(err);
    }
    
  };
  
  const googleLoginTheater = async (googleData) => {
    const res = await fetch('https://back-pg.herokuapp.com/login/google/theater', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await res.json();
    if(JSON.stringify(data.id) > 0){
      setLoginData(data.token);
      
      sessionStorage.setItem('loginData', JSON.stringify(data.token));
      sessionStorage.setItem('id', JSON.stringify(data.id));
      setIdT(window.sessionStorage.getItem('id').valueOf())
    }else{
      setStateG({ loading: false, error: true });
    }
    
    
  };
 

   const logout = useCallback(() => {
    window.sessionStorage.removeItem("status");
    window.sessionStorage.removeItem("loginData");
    window.sessionStorage.removeItem("id");
    window.sessionStorage.removeItem("img");
    
    setStatusIdV(null);
    setStatus(null);
    setLoginData(null);
    setId(null);
    setImgT(null);
    setImgV(null);
    window.location.href="https://front-pg.vercel.app"
  }, [setStatus,setLoginData,setId])

  return {
    isLogged: Boolean(status),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    hasLoginErrorG: stateG.error,
    login,
    logout,
    loginviewer,
    googleLoginViewer,
    googleLoginTheater,
    idV,
    idT,
    statusIdV,
    statusIdT,
    imgV,
    imgT,
    
    
    
  };
};

export default useUser;
