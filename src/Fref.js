import React from 'react'

export default function Fref() {
    let myref=React.useRef();

    function setref(){
        myref.current.value="800"
        myref.current.focus();
    }
  return (
    <div>Fref
    <hr></hr>
    <input type="text" ref={myref} defaultValue="0"/>
    <button onClick={setref}>Useref demo</button>
    </div>
  )
}
