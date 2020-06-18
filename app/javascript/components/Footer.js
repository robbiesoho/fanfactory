import React from "react"
import PropTypes from "prop-types"

class Footer extends React.Component {
  render () {
    return (
      <React.Fragment>
      <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-dark">
        <div className="container ">
          <li className="navbar-brand footer-text non-hov">RPDEV Media</li>
          <li className="navbar-brand footer-text non-hov">Copyright {String.fromCharCode(169)} 2020 Allrights reserved</li>
          <li className="navbar-brand footer-text footer-link"><a href="http://localhost:3000/login">Inicio de sesión de administrador</a></li>
        </div>
      </nav>
      </React.Fragment>
    );
  }
}

export default Footer
