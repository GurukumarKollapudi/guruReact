import React from "react";
class State extends React.Component{
    constructor(){
        super();
        this.state={
            value:0
        }
    }
    Increment = () =>{
         this.setState({
            value:this.state.value +1
         })
    }
    Decrement = () =>{
        this.setState({
            value:this.state.value - 1
        })
    }
    render(){
        return(
            <div className="counter">
              <h2></h2>  
              <h2>{this.state.value}</h2>
              <button onClick={this.Increment}>+</button>
              <button onClick={this.Decrement}>-</button>

            </div>
        )
    }
}
export default State