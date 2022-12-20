import React, { useState } from 'react'

export default function HOC1() {
    const [count, setCount]=useState(0);
    
    function set(){
        setCount(count+1);
    }
  return (
    <div>High order component demo
    <button onClick={set}>HOC button</button>
    <span>hoc count is {count}</span>
    </div>
  )
}
