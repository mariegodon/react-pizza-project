import React from "react";
import {
    Link
}
from "react-router";

import data from "./data.js";

export default class PizzaList extends React.Component {

    constructor(props) {
        super();

    }

    render() {
    
        return (
            <li className="pizzaTypeLI">
                <button onClick={(ev) => this.props.onPizzaClick(this.props.name)} className="pizzaType" type="button">
                <img src="http://scottgombar.com/wp-content/uploads/2015/06/Dollarphotoclub_77390534.jpg" />
                <div>
                <h2>{this.props.name.toUpperCase()}</h2>
                <div className="ingredients"><p>{this.props.cheese}</p>
                {this.props.toppings.length > 0 ? <p className="with">WITH</p>: ""}
                {this.props.toppings.length > 0 ? <p>{this.props.toppings.join(", ")}</p> : ""}</div>
                <p className="price">PRICE: ${this.props.price}</p>
                </div>
                </button>
            </li>
        )

    }

}
