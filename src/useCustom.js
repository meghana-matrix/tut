// import React from 'react'

import { useEffect } from "react";

 function useCustom(props) {
    useEffect(()=>{
        document.title=props+" "+ " total hits"
    })
  
}

export default useCustom