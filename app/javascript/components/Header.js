import React from "react"
import PropTypes from "prop-types"
import Hero from './Hero'
import Navbar from './Navbar'

class Header extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Hero />
        <Navbar />
      </React.Fragment>
    );
  }
}

export default Header
