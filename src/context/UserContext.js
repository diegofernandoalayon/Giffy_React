import React,{useState,useEffect} from 'react'
import getFavs from '../services/getFavs'

const Context = React.createContext({})

export function UserContextProvider({children}){
    const [favs,setFavs] = useState([])
    const [jwt, setJWT] = useState(()=>window.sessionStorage.getItem('jwt')) //jwt -> javaScript web token// se puede poner una funcion para poner estado inicial, ya que esta funcion se ejecuta una vez

    useEffect(()=>{ //efecto para que cada que cambie un usuario, busque si este usuario tiene favoritos, 
        if(!jwt) return setFavs([])
        getFavs({jwt}).then(setFavs)


    },[jwt])
    //de esta forma podemos usar el context para tenerlo como global, y usar el estado del context 
    return <Context.Provider value={{
        favs,
        setFavs,
        jwt,
        setJWT
        }}>
        {children}
    </Context.Provider>
}
export default Context