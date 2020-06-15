import React from "react"
import PropTypes from "prop-types"

const Thumbnail = (props) => {

  return(
    <div className="container-thumbnail">
      <iframe className="event-thumbnail" width="auto" height="200px" src={`http://localhost:3000/${props.image}`}></iframe>
    </div>
  )
}



export default Thumbnail
