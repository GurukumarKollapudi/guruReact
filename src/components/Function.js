import React from "react";
class Function extends React.Component{
    state={
        name:"guru",
        age:23,
        sal:1545
    }
    render(){
        const {name,age,sal} = this.state
        return(
           <div>
          <h2>{name}</h2>
          <h2>{age}</h2>
          <h2>{sal}</h2>
           </div>
        );
    }
}
 export default Function