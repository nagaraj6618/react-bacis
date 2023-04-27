import React, { Component } from 'react'

 class ButtonFuntionComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       subscribeMessage:'Welcome to my channel',
       subcribeButton:'Subscribe',
       count:0
    }
  }
stateChangeFuntion=()=>{
  var counter=this.state.count+1;
  if(counter%2===0){
this.setState({
  subscribeMessage:'Thanks For Subscribing',
  subcribeButton:'UnSubscribe',
 count:counter
})
  }
  else{
    this.setState({
      subscribeMessage:'Please Subscribe',
    subcribeButton:'Subscribe',
    count:counter
    })
  }
  
}
  render() {
    return (
      <div>
        <h1>{this.state.subscribeMessage}</h1>
        <button onClick={this.stateChangeFuntion}>{this.state.subcribeButton}</button>
      </div>
    )
  }
}

export default ButtonFuntionComponent