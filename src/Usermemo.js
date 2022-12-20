import React, {useState, useMemo} from 'react'

export default function Usermemo() {
    const[count,setcount]=useState(0);
    const[item,setitem]=useState(0);
    const mult=useMemo(()=>{
      console.warn("multi rerender")
      return count*10
  },[count])

    function incr(){
        setcount(count+1)
    }
    function incitem(){
        setitem(item+2)
    }
    
  return (
    // console.warn("usememo")
    <div>usememo
    <h2>count of usememo{count}</h2>
    <h2>item of usememo{item}</h2>
    <h2>{mult}</h2>
    <button onClick={incr}>Increase count of usememo</button>
    <button onClick={incitem}>Increase item of usememo</button>
    </div>
    
  )
}
