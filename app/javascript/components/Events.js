import React from "react"
import PropTypes from "prop-types"
import Navbar from './Navbar'
import Table from './Table/Table'
import axios from 'axios'

// import "../index.css";


class Events extends React.Component {
  constructor(){
    super()
    this.state = {
      events: [

      ]
    }
  }

  componentDidMount(){
    axios.get('/getupcomingevents.json')
    .then(data => {
      let res = []
      data.data.data.map( (data) => {
        res.push({id: data.id, name: data.name, date: data.date, time: data.time, location: data.location, image: data.image})
        this.setState({events: res})
      })
    })
    .catch(data => {
    })
  }

  render () {
    return (
    <React.Fragment>
    <div className="react-body">
      <div className='container-home'>
        <div className="react-background">
          <header>
            <Navbar /> 
            <div className="text-center">
            <h2 className="pt-4 pb-4 react-words">Próximos Eventos</h2>
            </div>
            <Table events={this.state.events}/>
          </header>
        </div>
      </div>
    </div>
    </React.Fragment>
    );
  }
}

export default Events
