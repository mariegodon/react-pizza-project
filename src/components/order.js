import React from "react";
import {Link} from "react-router";

import data from "./data.js";


export default class Order extends React.Component {
    
    constructor(props){
        super(props);
        
        var info = data.getData("info") || {};
        
        this.state = {
            name: info.name || "",
            email: info.email || "",
            phonenumber: info.phonenumber || "",
            address: info.address || ""
        };
    
    this.handleChange=this.handleChange.bind(this);
    this.continueOrder=this.continueOrder.bind(this);
    }
    
    handleChange(name, ev){
        this.setState({[name]: ev.target.value});
    }
    continueOrder(){
        data.setData("info", this.state);
        this.props.history.push('/choose');        
    }
    
    render(){
        
        var disabled = this.state.name.length === 0 || this.state.email.length === 0 || this.state.phonenumber.length === 0 || this.state.address.length === 0;
        
        return(
            
            <div className="order">
                <h1>Order some <span className="pizza">PIZZA</span></h1>
                <input value={this.state.name} onChange={(ev) => this.handleChange("name", ev)} type="text" name="name" placeholder="NAME" /><br />
                <input value={this.state.email} onChange={(ev) => this.handleChange("email", ev)} type="text" name="email"  placeholder="EMAIL" /><br />
                <input value={this.state.phonenumber} onChange={(ev) => this.handleChange("phonenumber", ev)}name="phonenumber" placeholder="PHONE NUMBER" /><br />
                <input value={this.state.address} onChange={(ev) => this.handleChange("address", ev)} type="text" name="address" placeholder="ADDRESS" /><br />
                <button onClick={this.continueOrder} type="button" disabled={disabled} className={disabled}>CONTINUE ORDER<img src="https://cdn0.iconfinder.com/data/icons/bicon/24/circle_arrow_next_forward_disclosure-512.png" className="nextIcon"/></button>
                <img src="https://affotd.files.wordpress.com/2011/04/pizza-hut-ultimate-stuffed-crust-90-1302116405mr.jpg" className="sidePizza" />
            </div>            
            
            
            
        )
        
        
    }
    
    
}
