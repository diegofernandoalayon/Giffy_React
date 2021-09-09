import React,{useState} from 'react'

const Context = React.createContext({})

export function UserContextProvider({children}){

    const [jwt, setJWT] = useState([]) //jwt -> javaScript web token
    //de esta forma podemos usar el context para tenerlo como global, y usar el estado del context 
    return <Context.Provider value={{jwt,setJWT}}>
        {children}
    </Context.Provider>
}
export default Context