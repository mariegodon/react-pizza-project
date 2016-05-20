import React from "react";

export default class CheeseList extends React.Component{
    constructor(props){
        super();
    }
    
    render(){
    var Radio = this.props.radio;
    return(
        
        <label className={this.props.selectedCheese === this.props.name ? "cheeseToppingItem selected" : "cheeseToppingItem"}>
            <Radio value={this.props.name} />
            <img src={this.props.url} className="cheeseToppingPic"/>
            <p>{this.props.name}</p>
            <p>${this.props.price}</p>
        </label>
    )          
        
        
    }
    
}