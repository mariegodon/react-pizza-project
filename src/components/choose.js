import React from "react";
import {Link} from "react-router";

import PizzaList from "./pizza_list.js";
import data from "./data.js";



var pizzas = [
        {
            name: "Cheese",
            cheese: "mozzarella",
            toppings: [],
            price: 10
        },
        {
            name: "Pepperoni and Cheese",
            cheese: "mozzarella",
            toppings: ["pepperoni"],
            price: 12
        },
        {
            name: "All Dressed",
            cheese: "mozzarella",
            toppings: ["pepperoni", "peppers", "mushrooms"],
            price: 14
        },        
        {
            name: "Caprina",
            cheese: "goat",
            toppings: ["spinach", "sundried"],
            price: 16
        },    
        {
            name: "Shrimp",
            cheese: "parmesan",
            toppings: ["shrimp"],
            price: 18
        }, 
        {
            name: "Meat Lover",
            cheese: "mozzarella",
            toppings: ["bacon", "chicken", "pepperoni"],
            price: 22
        }
    ]

export default class Choose extends React.Component {
    
    constructor(props){
        super();
        this.handlePizzaClick=this.handlePizzaClick.bind(this);
        this.handleCustomClick=this.handleCustomClick.bind(this);
    }
    
    
    handlePizzaClick(pizzaType){
        data.setData("pizzaType", pizzaType)
        this.props.history.push('/done'); 
    }
    
    handleCustomClick(){
        data.setData("pizzaType", "Custom");
        this.props.history.push('/custom');         
    }
    
    render(){
    var pizzaList = pizzas.map((pizza, i)=>{
        return (
            <PizzaList key={pizza.name + i} name={pizza.name} price={pizza.price} onPizzaClick={this.handlePizzaClick} cheese={pizza.cheese} toppings={pizza.toppings}/>
        );
    });
        
    return(
        <div className="choosePizza">
            <h1>Pick your <span className="pizza">PIZZA</span></h1>
            <ul>
                {pizzaList}
            </ul>
            <div>
                <h3>or make a</h3>
                <button className="customButton" type="button" onClick={this.handleCustomClick}>CUSTOM<img src="https://cdn0.iconfinder.com/data/icons/bicon/24/circle_arrow_next_forward_disclosure-512.png" className="nextIcon"/></button>
                <h3><span className="pizza">PIZZA</span></h3>
            </div>
        </div>    
    )
    
    }
}