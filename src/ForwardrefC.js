import React, { forwardRef } from 'react'

 function ForwardrefC(props,ref) {
  return (
    <div>
    <h3>ForwardrefC   </h3>
    <input type="text" ref={ref}/></div>
  )
}
export default forwardRef(ForwardrefC); 