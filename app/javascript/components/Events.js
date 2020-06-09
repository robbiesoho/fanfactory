import React from "react"
import PropTypes from "prop-types"
import Header from './Header'
import axios from 'axios'

class Events extends React.Component {
  constructor(){
    super()

    this.state = {
      events: [
      ]
    }
  }
  
  
  componentDidMount(){
    axios.get('/getimages.json')
    .then(data => {
      let res = []
      res.push(data.data.image)
      this.setState({events: res})
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
          <img src={`http://localhost:3000/${this.state}`}></img>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Events
