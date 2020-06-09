import React from "react"
import PropTypes from "prop-types"
class Hero extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <img id="hero-img" src="./assets/fanfactory.jpg" />
        </div>
        <a className="admin-login" href="http://localhost:3000/login">Admin Login</a>
      </React.Fragment>
    );
  }
}

export default Hero
