import React from "react"
import PropTypes from "prop-types"
import Thumbnail from "./Thumbnail"
const Item = (props) => {
  return(
    <div className="container"> 
      <div className="row">
        <div className="col-sm-8">
          <div className="text-center">
            <div className="card px-4">
              <div className="row event-card">
                <div className="col-sm-12 ">
                  <Thumbnail className="img-thumbnail" image={props.image}/>
                </div>
                <div className="col-sm-12">
                  <div className="text-center">
                    <h4>{props.name}</h4>
                    <h5>{props.location}</h5>
                    <h6>{props.date}</h6>
                    <p>{props.time}</p>
                    <p>{props.price}$</p>
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
