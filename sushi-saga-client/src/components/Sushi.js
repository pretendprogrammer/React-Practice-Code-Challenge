import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => {
             if (!props.sushiData.wasEaten && props.balance-props.sushiData.price >= 0) {
               props.sushiData.wasEaten = true
               props.eatSushi(props.sushiData.price)
             }
             }}>
        { 
          props.sushiData.wasEaten ?
          null:
            <img src={props.sushiData.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushiData.name} - ${props.sushiData.price}
      </h4>
    </div>
  )
}

export default Sushi