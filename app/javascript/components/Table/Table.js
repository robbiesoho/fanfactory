import React from "react"
import PropTypes from "prop-types"
import Item from './Item'


class Table extends React.Component {
  constructor(props){
    super(props)
  }

  render () {

      const items = this.props.events.map( (data) => {
      
      return <Item key= {data.id} name ={data.name} date={data.date} location={data.location} price={data.price} image={data.image}/>  

    })
    return (

      <div className="container">
      {items}
      </div>
 
    )
  }
}

export default Table
