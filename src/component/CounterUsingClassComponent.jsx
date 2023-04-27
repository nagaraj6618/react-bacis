import React, { Component } from 'react'

class CounterUsingClassComponent extends Component {
 
  constructor(props) {
   
    super(props)
  
    this.state = {
       valueofCurrent:0
    }
  }
  incrementFuntion=()=>{
   
    this.setState({
      valueofCurrent:(this.state.valueofCurrent+1)
    })
    console.log(this.state.valueofCurrent+1);
  }
  decrementFuntion=()=>
  {
    console.log(this.state.valueofCurrent-1);
    this.setState({
      valueofCurrent:(this.state.valueofCurrent-1)
    })
   
  }
  render() {
    return (
      <div>
        <p>{this.state.valueofCurrent}</p>
        <button onClick={this.incrementFuntion}>Increment</button>
        <button onClick={this.decrementFuntion}>Decrement</button>
      </div>
    )
  }
}

export default CounterUsingClassComponent