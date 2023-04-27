import React, { Component } from 'react'
import FunctionComponent from './FunctionComponent'

 class CalssComponnt extends Component {

  render() {
   
    return (
      <div>
        <FunctionComponent Myname={this.props.Name}/>
        <h1>From {this.props.department}</h1>
        <h1>{this.props.Year}Year</h1>
        
      </div>
    )
  }
}

export default CalssComponnt