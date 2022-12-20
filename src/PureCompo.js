import React, { PureComponent, Component } from 'react'

export default class PureCompo extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
        
    }
    incr=()=>{
       this.setState({count:this.state.count})
    }
  render() {
    console.warn("render pure")
    return (
      <div>PureComponent
      <p>the value in pure is {this.state.count}</p>
      <button onClick={this.incr}>incr pure</button>
      </div>
     
    )
  }
}
