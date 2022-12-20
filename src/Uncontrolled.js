import React from 'react';

class Uncontolled extends React.Component{
constructor(){
    super()

    this.myref=React.createRef();
}

onChange=()=>{
    this.myref.current.focus();
    this.myref.current.value=450;
   console.log( this.myref.current.value)
}
render(){

return(
<div>
<input type="text" name="user" ref={this.myref} defaultValue="0"></ input>
<button onClick={this.onChange}>Uncontrolled change</button>
</div>
)
}

}
export default Uncontolled;

