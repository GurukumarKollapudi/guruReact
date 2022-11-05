import React, { useEffect, useState } from "react";

const Guru = () =>{
    const[data,setData] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((Response) => Response.json())
        .then((json)=>setData(json))
    })
      return(
        <div className="counter">
          {data.map((i) =><li>{i.username}</li>)}
        </div>
          
      )
}
export default Guru