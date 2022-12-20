import React, { useState } from 'react'
import Cmemo from './Cmemo';

export default function Pmemo() {
    const[count,setCount]=useState(0);
    console.log("parent memo re-render")



function set(){
    setCount(count+1) 
}

function incr(){
  for(let i=0;i<10;i++){
    setCount(precount=>precount+1)
  }

  
}

function decr(){
  for(let i=0;i<10;i++){
    setCount(postcount=>postcount-1)
  }
}
  return (

    <div>Pmemo
    <span> Count is :{count}</span>
    <button onClick={set}>Change count in parent memo</button>
    <button onClick={incr}>Increment by 10</button>
    <button onClick={decr}>Decrement by 10</button>
    <Cmemo value={12}/>

    </div>
    
  )
}
