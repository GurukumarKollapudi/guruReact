import React from "react"
class First extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
                <h2>{this.props.age}</h2>
            </div>
        )
    }
}
export default First
