import React from "react";
import { Link } from "react-router-dom";
function Rama(){
    return(
        <div>
            <h2>login page</h2>
        <form className="login`">

            <label>enter name</label>
            <input type="text" placeholder="Enter name"></input><br/>
            <label>password</label><br/>
            <input type="password" placeholder="enter password"></input>
            <Link to='/home'>Home</Link>
        </form>
        </div>
    )
}
export default Rama