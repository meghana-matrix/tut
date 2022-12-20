import React, { Component } from 'react'

export default class Lifecycleunmount extends Component {
    componentWillUnmount(){
        alert("componentWillUnmount removed")
    }
  render() {
    return (
      <div><hr>
      </hr>this is the Lifecycleunmount Component</div>
    )
  }
}
