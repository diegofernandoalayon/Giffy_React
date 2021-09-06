import React,{useState} from 'react'

const Context = React.createContext({})

export function GifsContextProvider({children}){

    const [gifs, setGifs] = useState([])
    //de esta forma podemos usar el context para tenerlo como global, y usar el estado del context 
    return <Context.Provider value={{gifs,setGifs}}>
        {children}
    </Context.Provider>
}
export default Context