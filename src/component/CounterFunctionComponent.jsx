import React, { useState } from 'react'

function CounterFunctionComponent() {
  const [currentValue,UpdateValue]=useState(0)
  const incrementFuntion=()=>{
    UpdateValue(currentValue+1);
  }
  const decrementFuntion=()=>{
    UpdateValue(currentValue-1);
  }
  return (
    <div>
      <p>{currentValue}</p>
      <button onClick={incrementFuntion}>Increment</button>
      <button onClick={decrementFuntion}>Decremement</button>
    </div>
  )
}

export default CounterFunctionComponent