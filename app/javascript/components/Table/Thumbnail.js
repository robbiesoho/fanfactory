import React from "react"
import PropTypes from "prop-types"

const Thumbnail = (props) => {

  return(
    <div className="row">
      <iframe width="100%" height="100%" src={`http://localhost:3000/${props.image}`}></iframe>
    </div>
  )
}



export default Thumbnail
