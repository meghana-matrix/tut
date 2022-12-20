import React, { Component } from 'react'

export default class User extends Component {
  render() {
      if(true)
      {
        throw new Error('Custom error')
      }
    return(
        <div>
        <h1> user</h1>
        </div>
    );
  }
}

