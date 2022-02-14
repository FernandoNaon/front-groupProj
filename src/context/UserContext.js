import React, {useState} from 'react'



const Context = React.createContext({})

export function UserContextProvider ({children}) {
  
  const [key, setKey] = useState(
    () => window.sessionStorage.getItem('key')
  )
  

  

  return <Context.Provider value={{
    
    setKey,
    
  }}>
    {children}
  </Context.Provider>
}

export default Context;