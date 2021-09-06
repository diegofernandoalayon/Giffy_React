// import logo from './logo.svg';
import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import {Link, Route } from "wouter"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import SearchResults from "./pages/SearchResults"
import StaticContext from './context/StaticContext' // el contexto tiene dos partes, un consumidor y un proveedor
import {GifsContextProvider} from './context/GifsContext'

function App() {
  return (
    //esta seria la indicacion del proveedor
    <StaticContext.Provider value={
      {
        name: 'midudev',
        suscribeteAlCanal: true
      }
    }> 


      <div className="App">
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <h1 id='logo'>Giffy</h1>
            </figure>
          </Link>
          <GifsContextProvider>
            <Route 
              component={Home}
              path="/"
              />
            <Route 
              path= "/search/:keyword/:limit"
              component={SearchResults}/>
            <Route 
              component = {Detail} //ruta para el detalle
              path ="/gif/:id"
              />
            <Route
              component ={()=> <h1>ERROR 404</h1>}
              path="/404"
            />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
