import React from "react"
import PropTypes from "prop-types"
import Header from './Header'
import axios from 'axios'

class Events extends React.Component {
  
  
  componentDidMount(){
    axios.get('/firstevent.json')
    .then(data => {
      
       res.push(data.data.data.name)

       this.setState({module: res})
    })
    .catch(data => {
   
    })
  }
  
  render () {
    return (
      <React.Fragment>
      <div className='container-home'>
        <div className="background">
          <p>Events</p>
          <Header />
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Events
