import React from "react";
import "./App.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Show from "./Show";
import Review from "./Review";
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
                  <img src={MainLogo} style={{ height: `16px` }}></img>
                </NavLink>
              </h3>
            </div>
            <li>
              <NavLink to='/' className='navlink'>
                <p>Home</p>
              </NavLink>
            </li>
            <li>
              <a href={ShowDoc} target='_blank' className='navlink'>
                <p>Show/Tell</p>
              </a>
            </li>
            <li>
              <NavLink to='/route' className='navlink'>
                <p>Route</p>
              </NavLink>
            </li>
          </ul>
        </Fade>
        <div className='content'>
          {" "}
          <Route exact path='/' component={Home} />
          <Route path='/show' component={Show} />
          <Route path='/route' component={Routes} />
          <Route path='/review' component={Review} />
        </div>
      </div>
      <div className='flex-container section-6'>
        <p>
          © 2020 Nawab School Of Motoring. All rights reserved. Created by
          <a
            href='https://www.sehbaz.com/'
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            Sehbaz Rafik
          </a>
        </p>
      </div>
    </HashRouter>
  );
}

export default App;
