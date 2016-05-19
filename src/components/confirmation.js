import React from "react";
import {Link} from "react-router";

import data from "./data.js";

export default function Confirmation(props) {
    
    var info = data.getData("info") || {};
    
    return(
        <div>
            <h1>Confirmed!</h1>
            <h2>Your PIZZA should arrive shortly</h2>
            <h3>yummy</h3>
            <p>A confirmation email has been sent to {info.email}</p>
        </div>    
    )
}