import React, { Component } from 'react'

 class ShowHideElementComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       buttonMessage:'Hide Element ',
       statusMessage:'hiii',
       count:0
    }
  }
  statusChange=()=>{
    var counter=this.state.count+1;
    if(counter%2===0){
    this.setState(
      {
        buttonMessage:'Show Element',
        statusMessage:'',
        count:counter
      }
    )
    }
    else{
      this.setState({
        buttonMessage:'Hide Element ',
        statusMessage:'hiii',
        count:counter
      })
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.statusChange}>{this.state.buttonMessage}</button>
        <h1>{this.state.statusMessage}</h1>
      </div>
    )
  }
}

export default ShowHideElementComponent