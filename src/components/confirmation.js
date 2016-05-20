import React from "react";
import {Link} from "react-router";

import data from "./data.js";

export default function Confirmation(props) {
    
    var info = data.getData("info") || {};
    
    return(
        <div className="pizzaSent">
            <h1>CONFIRMED!</h1>
            <h2>Your <span className="pizza">PIZZA</span> should arrive shortly</h2>
            <p>A confirmation email has been sent to {info.email}</p>
        </div>    
    )
}