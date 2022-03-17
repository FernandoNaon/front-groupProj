import React, {useState} from 'react'



const Context = React.createContext({})

export function UserContextProvider ({children}) {
  
  const [status, setStatus] = useState(
    () => window.sessionStorage.getItem('status')
  );
  const [loginData, setLoginData] = useState(
    () => window.sessionStorage.getItem('loginData')
  );
  const [id,setId] = useState(
    () => window.sessionStorage.getItem('id')
  )
  ;
  const [img,setImg] = useState(
    () => window.sessionStorage.getItem('img')
  )
  
  

  return <Context.Provider value={{
    status,
    setStatus,
    loginData,
    setLoginData,
    id,
    setId,
    
    img,
    setImg
  }}>
    {children}
  </Context.Provider>
}

export default Context;