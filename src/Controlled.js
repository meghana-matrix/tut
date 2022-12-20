import React ,{useState} from 'react'

export default function Controlled() {
    const [val,setv]=useState(0);
    function setval(e){
        setv(e.target.value)
        console.log(val)
    }
  return (
    <div>Controlled Component
    <input type="text" name="use" onChange={setval}/>
    <button>Change</button>
    <p>The value name is {val}</p>
    </div>
  )
}
