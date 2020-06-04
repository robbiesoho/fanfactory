import React from "react"
import PropTypes from "prop-types"
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
        res.push({id: data.id, name: data.name, location: data.location})

        this.setState({events: res})
      })

      
    })
    .catch(data => {
   
    })
  }

  render () {
    return (
      
    <React.Fragment>
      <div className='container-home'>
        <div className="background">
          <header>
            <Header /> 
            <Table events={this.state.events}/>
          </header>
        </div>
      </div>
      </React.Fragment>
 
    );
  }
}

export default Home
