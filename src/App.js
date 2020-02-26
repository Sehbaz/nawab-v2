import React from "react";
import "./App.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Show from "./Show";
import Routes from "./Routes.js";
import Zoom from "react-reveal/Zoom";
import ShowDoc from "./Documents/show-doc.pdf";
import MainLogo from "./images/main-logo.jpeg";

function App() {
  return (
    <HashRouter>
      <div>
        <ul className='header navbar-container'>
          <div>
            <h3>
              <NavLink to='/' style={{ color: `#00ce89` }}>
                <img src={MainLogo} style={{ height: `1rem` }}></img>
              </NavLink>
            </h3>
          </div>
          <li>
            <NavLink to='/' className='navlink'>
              Home
            </NavLink>
          </li>
          <li>
            <a href={ShowDoc} target='_blank' className='navlink'>
              Show/Tell
            </a>
          </li>
          <li>
            <NavLink to='/route' className='navlink'>
              Route
            </NavLink>
          </li>
        </ul>
        <div className='content'>
          {" "}
          <Route exact path='/' component={Home} />
          <Route path='/show' component={Show} />
          <Route path='/route' component={Routes} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
