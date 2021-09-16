// import logo from './logo.svg';
import React from "react";
import {Link, Route, Switch } from "wouter"

import Header from "./components/Header";
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import SearchResults from "./pages/SearchResults"
import StaticContext from './context/StaticContext' // el contexto tiene dos partes, un consumidor y un proveedor
import { UserContextProvider } from "./context/UserContext";
import {GifsContextProvider} from './context/GifsContext'
import ErrorPage from "./pages/ErrorPage";
import "./App.css";
import Login from "./pages/Login";
import RegisterPage from "./pages/Register";

function App() {
  return (
    //esta seria la indicacion del proveedor
    <UserContextProvider> 


      <div className="App">
        <section className="App-content">
          <Header />
          <Link to="/">
            <figure className="App-logo">
              <h1 id='logo'>Giffy</h1>
            </figure>
          </Link>
          <GifsContextProvider>
            <Switch>
            
              <Route 
                component={Home}
                path="/"
                />
              <Route 
                path= "/search/:keyword/:limit/:rating?" // el interrogante hace que el segmento sea opcional
                component={SearchResults}/>
              <Route 
                component = {Detail} //ruta para el detalle
                path ="/gif/:id"
                />
              <Route 
                component = {Login}
                path='/login'
              />
              <Route 
                component = {RegisterPage}
                path='/register'
              />
              <Route
                component ={ErrorPage}
                path="/:rest*"
              />
              </Switch>
          </GifsContextProvider>
        </section>
      </div>
    </UserContextProvider>
  );
}

export default App;
