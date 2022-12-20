import React from 'react'
import HOC1 from './HOC1'

export default function HOC(props) {
  return (
    <div>HOC props
    <h4 style={{color:'blue'}}><HOC1/></h4>
    <h4 style={{color:'plum'}}><HOC1/></h4>
    <h2 style={{color:'yellow'}}><HOC1/></h2>
    </div>
  )
}
