import React, { Component } from 'react'
import Lifecycleunmount from './Lifecycleunmount'

export default class lifecycleunmount1 extends Component {
    constructor(){
        super()
        this.state={
            status:true
        }
    }
    set=()=>{
        this.setState({status:!this.state.status})
    }
  render()
   {
    return (
      <div> 
      {
        this.state.status?<Lifecycleunmount/>: <h1>component removed</h1>
      }
      <button onClick={this.set}>Toggle</button>
      </div>
    )
  }
}
