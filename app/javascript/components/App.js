import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import "../index.css";
// import 'bootstrap/dist/css/bootstrap.css'

import Home from './Home'
import Events from './Events'
import Contact from './Contact'
import Hero from './Hero'
import Navbar from './Navbar'



class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
        
          {/* <Route exact path="/" component={Home}/> */}
          <Route exact path="/" component={Events}/>
          <Route path="/eventpage" component={Events}/>
          <Route path="/contactpage" component={Contact}/>
          
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App
