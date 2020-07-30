import React from "react";
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="footer navbar fixed-bottom navbar-expand-lg navbar-light bg-dark">
          <div className="container footer-container">
            <li className="navbar-brand footer-text non-hov">RP | DEV Media</li>
            <li className="navbar-brand footer-text non-hov">
              Copyright {String.fromCharCode(169)} 2020 Allrights reserved
            </li>
            <li className="navbar-brand footer-text footer-link">
              <a href="http://www.fanfactory.xyz/login">Admins</a>
            </li>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Footer;
