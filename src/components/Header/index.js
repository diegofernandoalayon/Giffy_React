import React from "react";
import { Link, useRoute} from "wouter";
import useUser from "../../hooks/useUser";
import './index.css'

export default function Header (){
    // const isLogged = false
    const {isLogged, login,logout} = useUser()
    const [match] = useRoute('/login') //para saber la ruta y hacer renderizado condicional en base a ello
    const handleClick = e =>{
        e.preventDefault()
        logout()
    }
    const renderLoginButtons = ({isLogged})=>{
        return isLogged 
                ?  <Link to='/' onClick={handleClick}>
                Logout
                </Link>:
                <Link to='/login'>
                Login
                </Link>
    }
    const content = match 
        ? null
        : renderLoginButtons({isLogged})
        
    return (
        <header className="gf-header">
            {
                content
            }
        </header>
    )
}