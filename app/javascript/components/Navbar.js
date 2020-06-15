import React from "react"
import PropTypes from "prop-types"
// import App from "./App";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";


class Navbar extends React.Component {
  render () {
    return (
      <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <li className="navbar-brand"><Link to="/">Casa</Link></li>
          <li className="navbar-brand"><Link to="/eventpage">Eventos</Link></li>
          <li className="navbar-brand"><Link to="/contactpage">Contactos</Link></li>
        </div>
      </nav>
      </React.Fragment>
    );
  }
}

export default Navbar
