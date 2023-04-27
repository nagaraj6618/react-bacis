import React, { Component } from 'react'

class SubscribeComponent extends Component {
constructor(props) {
  super(props)

  this.state = {
     message:'Welcome to My channel'
  }

}
  render() {
    return (
      <div>
        <h1 id='head'>{this.message}</h1>
        <button >Click</button>
      </div>
    )
  }
}

export default SubscribeComponent