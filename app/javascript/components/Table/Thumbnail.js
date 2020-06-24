import React from "react"
import PropTypes from "prop-types"

const Thumbnail = (props) => {

  return(
    <div className="container-thumbnail">
      <img className="event-thumbnail" src={`https://shielded-tundra-98304.herokuapp.com/${props.image}`}></img>
    </div>
  )
}



export default Thumbnail
