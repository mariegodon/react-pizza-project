import React from "react";
import {Link} from "react-router";

export default function HomePage(props) {
        return(
            <div className="homepage">
                <h1>Welcome to <span className="pizza">PIZZA</span></h1>
                <Link to="/order">ORDER NOW<img src="https://cdn0.iconfinder.com/data/icons/bicon/24/circle_arrow_next_forward_disclosure-512.png" className="nextIcon"/></Link>
            </div>
        )
}