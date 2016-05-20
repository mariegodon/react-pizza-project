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
    url: "https://www.diningdash.com/editable/images/menuitems/2690.jpg"
}, {
    name: "parmesan",
    displayName: "Parmigiano Reggiano",
    price: 5,
    url: "http://lh3.googleusercontent.com/TwDRDBv3j_z79JMpQ_QsJnRAvqrD4mfjAPjymKLOZiAeSSMFOB7y3hPcjVXAF6cuIrKKJtXyfDKSttd-Oj0q=s480-c-e365"
}, {
    name: "goat",
    displayName: "Goat Cheese",
    price: 5,
    url: "http://lh6.ggpht.com/nB99tnnTkvySZkb0i_8By_upFCDQGjy5jAdori41ZrOIBbRrDSmcr8geuquprc4u6wh7vRUClVEOKJkP8AOvrQ=s480-c-e365"
}, {
    name: "blue",
    displayName: "Blue Cheese",
    price: 5,
    url: "http://lh6.ggpht.com/VH3EC0KJCxBZODBUpprk4k_fLLggDg8rI1SirTwRNi-AkAQ1ElY_wVAMIgIZuwgs_OdaWVFnPSZuSjZ9F-qz3A=s480-c-e365"
}];

var toppings = [{
    name: "pepperoni",
    displayName: "Pepperoni",
    price: 2,
    url: "http://images.bigoven.com/image/upload/t_recipe-256/awesome-pepperoni-pizza-7f8696.jpg"
}, {
    name: "olives",
    displayName: "Black Olives",
    price: 2,
    url: "http://www.tomandollie.com/image/_standard/0151_Spanish-Style-Pitted-Black-Olives.png"
}, {
    name: "spinach",
    displayName: "Spinach",
    price: 2,
    url: "http://earlybirdorganics.co.nz/wp-content/uploads/2014/03/Spinach-organic.jpg"
}, {
    name: "sundried",
    displayName: "Sundried Tomatoes",
    price: 2,
    url: "http://www.lamegara.com/243-thickbox_default/marinated-sundried-tomatoes.jpg"
}, {
    name: "mushrooms",
    displayName: "Mushrooms",
    price: 2,
    url: "http://images.realfoodtoronto.com/D.cache.large/FungiFungi_94650_Mushroom_portobello_shstock_13316641-m.jpg"
}, {
    name: "peppers",
    displayName: "Mixed Peppers",
    price: 2,
    url: "http://media4.popsugar-assets.com/files/2013/06/17/547/n/1922195/e088c93ae55ecc9f_shutterstock_943762061V76bB.xxxlarge_2x/i/Bell-Peppers.jpg"
}, {
    name: "chicken",
    displayName: "Chicken",
    price: 5,
    url: "http://images.media-allrecipes.com/userphotos/250x250/129378.jpg"
}, {
    name: "sausage",
    displayName: "Italian Sausage",
    price: 5,
    url: "https://b.zmtcdn.com/data/reviews_photos/b3c/3a338129febaca41fb60ed99f418bb3c_200_thumb.jpg"
}, {
    name: "shrimp",
    displayName: "Shrimp",
    price: 7,
    url: "http://rasamalaysia.com/images/thumbs/shrimp_scampi_thumb.jpg"
}, {
    name: "bacon",
    displayName: "Bacon",
    price: 5,
    url: "http://baconeering.com/wp-content/uploads/2016/02/bacon-heart.jpg"
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
                                    <CheeseList radio={Radio} name={cheese.displayName} url={cheese.url} price={cheese.price} selectedCheese={this.state.cheese}/>
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
                                    <ToppingList cb={Checkbox} name={topping.displayName} url={topping.url} price={topping.price} disabled={this.state.toppings.indexOf(topping.displayName) === -1 ? this.state.disabled : false} selectedToppings={this.state.toppings}/>
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