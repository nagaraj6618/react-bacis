import React from 'react'

function FunctionComponent(props) {
  var Mynames=props.Myname;
  return (
    <div>
      <h1>I am {Mynames}</h1>
    </div>
  )
}

export default FunctionComponent