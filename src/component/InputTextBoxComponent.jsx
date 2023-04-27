import React, { Component } from 'react'

 class InputTextBoxComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:'',
       messageValue:''
    }
  
  }
changeMessageHandler=event=>{
  this.setState({
    message:event.target.value
  })
}

  render() {
    return (
      <div>
        <input type='text' onChange={this.changeMessageHandler}></input>
        <p>{this.state.message}</p>
        
      </div>
    )
  }
}

export default InputTextBoxComponent