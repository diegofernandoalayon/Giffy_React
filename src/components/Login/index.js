import { useState,useEffect } from "react";
import { useLocation } from "wouter";
import useUser from "../../hooks/useUser";
import './Login.css'

export default function Login({onLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
  const [,pushLocation] = useLocation()
  const {login,isLogged,isLoginLoading,hasLoginError} = useUser()

  useEffect(()=>{
    if(isLogged) {
      pushLocation('/')
      onLogin && onLogin()
    }
  },[isLogged])

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(username, password);
    login({username, password})
    // pushLocation('/')
  };

  return (
    <>
      {isLoginLoading && <strong>Checking credentials</strong>}
      {!isLoginLoading && 
        <form className='form' onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    autoFocus
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
          <button className='btn'>Login</button>
        </form>
      }
      {
        hasLoginError && <strong>Credentials are invalid</strong>
      }
    
    </>
    
  );
}
