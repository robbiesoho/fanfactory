import React from "react"
import PropTypes from "prop-types"
import Thumbnail from "./Thumbnail"
const Item = (props) => {
  return(
    <div className="row">
      <div className="col-mid-10 offset-md-1">
        <div className="text-center">
          <div className="card px-5">
            <div className="row">
              <div className="col-md-4">
                <Thumbnail />
              </div>
              <div className="col-md-8">
                <div className="pt-4 pb-4">
                  <h4>{props.name}</h4>
                  <p>{props.location}</p>
                  <div className="cta-wrapper">
                    <a className="btn cta-btn">Checkout this event</a>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}


export default Item
