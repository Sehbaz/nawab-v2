import React from "react";
import "./App.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Show from "./Show";
import Fade from "react-reveal/Fade";
import Routes from "./Routes.js";
import ShowDoc from "./Documents/show-doc.pdf";
import MainLogo from "./images/main-logo.jpeg";

function App() {
  return (
    <HashRouter>
      <div>
        <Fade top>
          <ul className='header navbar-container'>
            <div>
              <h3>
                <NavLink to='/' style={{ color: `#00ce89` }}>
                  <img src={MainLogo} className='mainLogo'></img>
                </NavLink>
              </h3>
            </div>
            <li>
              <NavLink to='/' className='navlink'>
                HOME
              </NavLink>
            </li>
            <li>
              <a href={ShowDoc} target='_blank' className='navlink'>
                SHOW/TELL
              </a>
            </li>
            <li>
              <NavLink to='/route' className='navlink'>
                ROUTE
              </NavLink>
            </li>
          </ul>
        </Fade>
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
