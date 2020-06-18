import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import "../index.css";
// import 'bootstrap/dist/css/bootstrap.css'

import Home from './Home'
import UpcomingEvents from './UpcomingEvents'
import PastEvents from './PastEvents'
import Contact from './Contact'
import Hero from './Hero'
import Navbar from './Navbar'




class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={UpcomingEvents}/>

          {/* <Route exact path="/" component={Home}/> */}
          <Route path="/eventpage" component={UpcomingEvents}/>
          <Route path="/pasteventspage" component={PastEvents}/>
          <Route path="/contactpage" component={Contact}/>
          
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App
