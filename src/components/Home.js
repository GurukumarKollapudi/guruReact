import React from "react";
import { Link } from "react-router-dom";
function Guru(){
   
    return(
        <div>
             <h2>hi guru how are you</h2>
             <Link to='/dashboard'>Dashboard</Link>
        </div>  
    );
}
export default Guru