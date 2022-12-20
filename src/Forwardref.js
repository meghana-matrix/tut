import React, {useRef } from 'react'
import ForwardrefC from './ForwardrefC';

export default function Forwardref() {
    let myref=useRef();
    function update(){
        myref.current.value="950"
        myref.current.value.focus();
    }
  return (

    <div>
    <hr></hr>
    <h2>Forwardref</h2>
    <ForwardrefC ref={myref}/>
    <button onClick={update}>forwrd ref demo</button>
    </div>
  )
}
