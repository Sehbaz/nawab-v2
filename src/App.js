import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main";
import Navbar from "./components/navbar";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Show";

function App() {
  return (
    <HashRouter>
      <div>
        <ul className='header navbar-container'>
          <div>
            <h1>NAWAB</h1>
          </div>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/stuff'>Stuff</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
        <div className='content'>
          {" "}
          <Route exact path='/' component={Home} />
          <Route path='/stuff' component={Stuff} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
