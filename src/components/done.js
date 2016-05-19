import React from "react";
import {Link} from "react-router";

import data from "./data.js";


export default function Done(props) {

    var info=data.getData("info") || {};

    return(
        <div>
            <h1>Your Order</h1>
            <p>1x {data.getData("pizzaType")} Pizza</p>
            {data.getData("info") ? <div><h2>User info</h2><p>{info.name || ""}</p><p>{info.address || ""}</p><p>{info.phonenumber || ""}</p><Link to="/confirmation">Confirm Order</Link></div> : <h2>Hmm.. Please <Link to="/order">enter your information</Link></h2>}
        </div>    
    )
}