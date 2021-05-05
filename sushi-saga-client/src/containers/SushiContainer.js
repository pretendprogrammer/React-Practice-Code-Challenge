import React, { Fragment, useState } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const [displayIndexStart, setdisplayIndexStart] = useState(0)
  const [displayIndexEnd, setdisplayIndexEnd] = useState(4)

  function showNext4Sushis() {
    setdisplayIndexStart(displayIndexStart === 96 ? 0 : displayIndexStart+4)
    setdisplayIndexEnd(displayIndexEnd === 100 ? 4 : displayIndexEnd+4)
  }

  return (
    <Fragment>
      <div className="belt">
        {
          props.sushisArray.slice(displayIndexStart,displayIndexEnd).map(sushiObject => <Sushi key={sushiObject.id} eatSushi={props.eatSushi} balance={props.balance} sushiData={sushiObject}/> )
        }
        <MoreButton showNext4Sushis={showNext4Sushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer