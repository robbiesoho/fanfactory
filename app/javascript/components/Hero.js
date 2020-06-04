import React from "react"
import PropTypes from "prop-types"
class Hero extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <img id="hero-img" src="./assets/fanfactory.jpg" />
        </div>
      </React.Fragment>
    );
  }
}

export default Hero
