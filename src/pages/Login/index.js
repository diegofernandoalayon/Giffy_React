import { useState,useEffect } from "react";
import { useLocation } from "wouter";
import useUser from "../../hooks/useUser";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
  const [,pushLocation] = useLocation()
  const {login,isLogged,isLoginLoading,hasLoginError} = useUser()

  useEffect(()=>{
    if(isLogged) pushLocation('/')
  },[isLogged])

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(username, password);
    login({username, password})
    // pushLocation('/')
  };

  return (
    <>
    <h2>Login</h2>
      {isLoginLoading && <strong>Checking credentials</strong>}
      {!isLoginLoading && 
        <form onSubmit={handleSubmit}>
          <input
            autoFocus
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login</button>
        </form>
      }
      {
        hasLoginError && <strong>Credentials are invalid</strong>
      }
    
    </>
    
  );
}
