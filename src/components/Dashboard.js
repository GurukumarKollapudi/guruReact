import React from "react";
import First from "./First";
 class Dashboard extends React.Component{
    state={
        salary:2445987
    }
    render(){
        return(
          <div>
            <h1>Hi guru welcome </h1>
            <h1>{this.state.salary}</h1>
            < First name="guru"/>
            < First age="23"/>
          </div>
        )
    }
 }
 export default Dashboard