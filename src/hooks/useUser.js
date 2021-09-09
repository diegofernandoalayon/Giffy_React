import { useCallback, useContext, useState } from "react";
import Context from '../context/UserContext'
import loginService from '../services/login'
export default function useUser(){
    const {jwt, setJWT} = useContext(Context)
    const [state, setState] = useState({loading: false, error: false})

    const login = useCallback( ({username, password})=>{//creamos la funcion para actualizar el jwt si se logea
        setState({loading: true, error: false})
        loginService({username,password})
        .then(jwt =>{
            setState({loading: false, error: false})
            setJWT(jwt)
        })
        .catch(err =>{
            setState({loading: false, error: true})
            console.error(err)
        })
    },[setJWT])

    const logout = useCallback(()=>{
        setJWT(null)
    },[setJWT])
    return{
        isLogged: Boolean(jwt),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        login,
        logout
    }
}