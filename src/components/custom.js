import React from "react";
import {
    Link
}
from "react-router";

import CheckboxGroup from 'react-checkbox-group';
import RadioGroup from 'react-radio-group';

import ToppingList from "./topping_list.js";
import CheeseList from "./cheese_list.js";
import data from "./data.js";


var cheeses = [{
    name: "mozzarella",
    displayName: "Mozzarella Cheese",
    price: 0,
    url: "http://www.kidkritics.com/blog/wp-content/uploads/2010/10/cheese_mozzarella.jpg"
}, {
    name: "parmesan",
    displayName: "Parmigiano Reggiano",
    price: 5,
    url: "http://reinaguringaifestival.weebly.com/uploads/1/3/7/9/13795532/9988430_orig.jpg?0"
}, {
    name: "goat",
    displayName: "Goat Cheese",
    price: 5,
    url: "http://www.lolaskitchenlab.com/wp-content/uploads/DSC_0200.jpg"
}, {
    name: "blue",
    displayName: "Blue Cheese",
    price: 5,
    url: "https://notesonaspanishvalley.files.wordpress.com/2014/06/blue-cheese-chopped-17-6-14.jpg"
}];

var toppings = [{
    name: "pepperoni",
    displayName: "Pepperoni",
    price: 2,
    url: "http://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/13/42/81/picEJYzn9.jpg"
}, {
    name: "olives",
    displayName: "Black Olives",
    price: 2,
    url: "http://www.mundifoods.com/wp-content/uploads/2015/10/236.jpg"
}, {
    name: "spinach",
    displayName: "Spinach",
    price: 2,
    url: "http://www.photos-public-domain.com/wp-content/uploads/2012/03/spinach.jpg"
}, {
    name: "sundried",
    displayName: "Sundried Tomatoes",
    price: 2,
    url: "http://cookery-ideas.co.uk/wp-content/uploads/2012/08/sun-dried-tomatoes.jpg"
}, {
    name: "mushrooms",
    displayName: "Mushrooms",
    price: 2,
    url: "http://johnsonchoi.com/iwineryhk/mushrooms.jpg"
}, {
    name: "peppers",
    displayName: "Mixed Peppers",
    price: 2,
    url: "https://shailjatomar.files.wordpress.com/2014/04/image.jpg"
}, {
    name: "chicken",
    displayName: "Chicken",
    price: 5,
    url: "http://cf.createdby-diane.com/wp-content/uploads/2012/08/3.jpg"
}, {
    name: "sausage",
    displayName: "Italian Sausage",
    price: 5,
    url: "http://chefwalter.blog.com/files/2015/05/Hot-Italian-Sausage1.jpg"
}, {
    name: "shrimp",
    displayName: "Shrimp",
    price: 7,
    url: "http://static5.businessinsider.com/image/532c68a7ecad0419675b557a/chart-shrimp-hyperinflation.jpg"
}, {
    name: "bacon",
    displayName: "Bacon",
    price: 5,
    url: "http://images.medicaldaily.com/sites/medicaldaily.com/files/2015/01/07/crispy-organic-unhealthy-bacon.jpg"
}];

function getPrice(selectedToppings, selectedCheese, cheeses, toppings){
    var price=10;
    
    selectedToppings.map(function(topping){
        toppings.forEach(function(item){
          if(item.displayName === topping) {
              price += item.price;
          }
        })
    });

    cheeses.forEach(function(cheese){
          if(cheese.displayName === selectedCheese) {
              price += cheese.price;
          }
    });

    return price;
}


export default class Custom extends React.Component {

    constructor(props) {

        super();

        this.state = {
            price: 10,
            disabled: false,
            toppings: [],
            cheese: "Mozzarella Cheese"
        }
        
        this.handleToppings = this.handleToppings.bind(this);
        this.handleCheese = this.handleCheese.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleToppings(toppingArray) {
        this.setState({toppings: toppingArray});
        if(toppingArray.length === 4){
            this.setState({disabled: true})
        } else {
            this.setState({disabled:false})
        }
        let price = getPrice(toppingArray, this.state.cheese, cheeses, toppings);
        this.setState({price: price});
    }
    
    handleCheese(cheese){
        console.log(cheese)
        this.setState({cheese: cheese});
        let price = getPrice(this.state.toppings, cheese, cheeses, toppings)
        this.setState({price: price})
    }

    handleClick(){
        data.setData("cheese", this.state.cheese);
        data.setData("toppings", this.state.toppings);
        this.props.history.push('/done'); 
    }
    
    render() {

        return (
            <div className="custom">
            <h1>Make your custom <span className="pizza">PIZZA</span></h1>
            <h2>FIRST, PICK A <span className="bold">CHEESE</span></h2>
            <RadioGroup name="cheese" selectedValue={this.state.cheese} onChange={this.handleCheese}>
                {Radio => (
                    <div className="cheeseToppingDiv">
                        {
                            cheeses.map(
                                cheese => (
                                    <CheeseList radio={Radio} name={cheese.displayName} url={cheese.url} price={cheese.price} />
                                )
                            )
                        }                    
                    </div>
                )}
            </RadioGroup>
            <h2>NOW, PICK UP TO <span className="bold">FOUR TOPPINGS</span></h2>
            <CheckboxGroup name="toppings" onChange={this.handleToppings}>
                {
                    Checkbox => (
                    <div className="cheeseToppingDiv">
                        {
                            toppings.map(
                                topping => (
                                    <ToppingList cb={Checkbox} name={topping.displayName} url={topping.url} price={topping.price} disabled={this.state.toppings.indexOf(topping.displayName) === -1 ? this.state.disabled : false}/>
                                )
                            )
                        }
                    </div>
                    )
                }
            </CheckboxGroup>
            <p className="price">PRICE: ${this.state.price}</p>
            <button type="button" onClick={this.handleClick}>DONE<img src="https://cdn0.iconfinder.com/data/icons/bicon/24/circle_arrow_next_forward_disclosure-512.png" className="nextIcon"/></button>
        </div>
        )
    }
}