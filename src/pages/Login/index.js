import { useState } from "react";
import { useLocation } from "wouter";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
  const [,pushLocation] = useLocation()

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(username, password);
    pushLocation('/')
  };
  return (
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
  );
}
