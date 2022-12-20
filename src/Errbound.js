import React, { Component } from 'react'

export default class Errbound extends Component {
    constructor(){
        super()
        this.state={
            error:null
        }
    }
    static getDerivedStateFromError(){
        return{
            error:true
    }
    }
  render() {
    return (
     <div>
      {
          this.state.error?<h1>custom error handling </h1>:this.props.children
      }
      </div>
    )
  }
}


