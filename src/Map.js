import React from 'react';
function Map(){

    let data=[
        {id:1,name:"meghana", age:15},
        {id:2, name:"ashu",age:1}
    ]
    return(
    
        data.map((item)=>{
            return(
                <div>
                    <ul key={item.id}>
                    <b>These are the map demo</b>
                    <li>{item.name}</li>
                    <li>{item.age}</li>
                </ul>
                </div>
               
            )
        })
    
    )
}

export default Map;