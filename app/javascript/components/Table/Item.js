import React from "react"
import PropTypes from "prop-types"
import Thumbnail from "./Thumbnail"
const Item = (props) => {
  return(
    <div className="container"> 
    <div className="row">
      <div className="col-sm-12 offset-sm-1">
        <div className="text-center">
          <div className="card px-4">
            <div className="row">
              <div className="col-sm-12">
                <Thumbnail className="img-thumbnail" image={props.image}/>
              </div>
              <div className="col-sm-12">
                <div className="text-center">
                  <h4>{props.name}</h4>
                  <p>{props.location}</p>
                  <p>{props.date}</p>
                  
                  <p>{props.price}</p>
                </div>
                              
                  {/* <div className="cta-wrapper">
                    <a className="btn cta-btn">Checkout this event</a>
                  </div> */}

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
