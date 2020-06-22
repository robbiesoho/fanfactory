import React from "react"
import PropTypes from "prop-types"

const Thumbnail = (props) => {

  return(
    <div className="container-thumbnail">
      <img className="event-thumbnail" src={`http://localhost:3000/${props.image}`}></img>
    </div>
  )
}



export default Thumbnail
