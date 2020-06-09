import React from "react"
import PropTypes from "prop-types"
import Item from './Item'


class Table extends React.Component {
  constructor(props){
    super(props)
  }

  render () {

      const items = this.props.events.map( (data) => {
      return <Item key= {data.id} name ={data.name} location={data.location} image={data.image}/>  

    })
    return (
     <div className="pt-5 pb-5">
       <div className="container-fluid">
       <div className="text-center">
        <h2 className="pt-4 pb-4">Events Table</h2>
       </div>

       {items}
       </div>
     </div> 
    )
  }
}

export default Table
