import React from "react"

import "../index.css";
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import 'bootstrap/dist/css/bootstrap.css'
import Table from './Table/Table'
import axios from 'axios'

class Home extends React.Component {

  render () {
    return (
    <React.Fragment>
    {/* This gets rid of the side margins and is in the rails css */}
    <div className="react-body">
      <div className='home-container'>
        <div className="react-background">
        <Header />
          <Hero />
        <Footer />
        </div>
      </div>
    </div>
      
      </React.Fragment>
    );
  }
}

export default Home
