import React,{memo} from 'react'


 function Cmemo(props) {
    console.log("child memo re-render")
  return (
    <div>
    <p>Cmemo component</p>
    <span>The value from parent component got is {props.value}</span>
    </div>
    
  )
}

export default memo(Cmemo);
