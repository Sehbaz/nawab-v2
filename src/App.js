import React from "react";
import "./App.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Show from "./Show";
import Routes from "./Routes.js";

function App() {
  return (
    <HashRouter>
      <div>
        <ul className='header navbar-container'>
          <div>
            <h3>
              <NavLink to='/' style={{ color: `#00ce89` }}>
                NAWAB
              </NavLink>
            </h3>
          </div>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/show'>Show/Tell</NavLink>
          </li>
          <li>
            <NavLink to='/route'>Route</NavLink>
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
