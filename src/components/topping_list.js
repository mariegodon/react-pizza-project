import React from "react";
import CheckboxGroup from 'react-checkbox-group';



export default class ToppingList extends React.Component{
    constructor(props){
        super();
    }
    
    render(){
    var Checkbox = this.props.cb;
    return(
        
        <label className={this.props.selectedToppings.indexOf(this.props.name) === -1 ? "cheeseToppingItem" : "cheeseToppingItem selected" }>
            <Checkbox value={this.props.name} price={this.props.price} disabled={this.props.disabled} />
            <img src={this.props.url} className="cheeseToppingPic"/>
            <p>{this.props.name}</p>
            <p>${this.props.price}</p>
        </label>
    )          
        
        
    }
    
}


