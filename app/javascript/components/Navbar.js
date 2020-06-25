import React from "react"
import PropTypes from "prop-types"


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
      <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-dark">
        <div className="container">
          <li className="navbar-brand react-nav-item"><Link to="/">Casa</Link></li>
          <li className="navbar-brand react-nav-item"><Link to="/eventpage">Próximos Eventos</Link></li>
          <li className="navbar-brand react-nav-item"><Link to="/pasteventspage">Eventos Pasados</Link></li>
          <li className="navbar-brand react-nav-item"><Link to="/contactpage">Contactos</Link></li>
        </div>
      </nav>
      </React.Fragment>
    );
  }
}

export default Navbar
