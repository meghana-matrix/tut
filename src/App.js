import logo from './logo.svg';
import './App.css';
import useCustom from './useCustom';
//import Map from './Map';
import Pmemo from './Pmemo';
import HOC from './HOC';
//import Uncontolled from './Uncontrolled';
import PureCompo from './PureCompo';
import Errbound from './Errbound';
import User from './User';
import HOC1 from './HOC1';
import Controlled from './Controlled'
import Usermemo from './Usermemo';
import Fref from './Fref';
import Forwardref from './Forwardref';
// import lifecycleunmount1 from './lifecycleunmount1';
import {lazy, Suspense, useState} from 'react';
// const Uncontolled= lazy(()=>import('./Uncontrolled'));
// const Map =lazy(()=>import('./Map'));




function App() {

  //custom hook demonstration 
  const[count,setCount]=useState(0);
  useCustom(count);

  function set(){
    setCount(count+1)
  }

  return (
     <div>
       
  
     
      

      <Pmemo/>

      // <Errbound>
      // <User/>
      // </Errbound>

      <h1>Custom hook demo below with hit count {count}</h1>
      <button onClick={set}>Custome hook</button>
      <Controlled/>
      <PureCompo/>
      <Usermemo/>
      <Fref/>
      <Forwardref/>
      
      
      
    

     </div>
  );
}

export default App;
