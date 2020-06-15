import React from "react"

import "../index.css";
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.css'
import Table from './Table/Table'
import axios from 'axios'

class Home extends React.Component {
  constructor(){
    super()
    this.state = {
      events: [

      ]
    }
  }

  componentDidMount(){
    axios.get('/getevents.json')
    .then(data => {
      let res = []
      data.data.data.map( (data) => {
        res.push({id: data.id, name: data.name, date:data.datetime, location: data.location, image: data.image})
        this.setState({events: res})
      })
    })
    .catch(data => {
    })
  }

  render () {
    return (
    <React.Fragment>
      <div className='home-container-home'>
        <div className="background">
        <Header />
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Home
