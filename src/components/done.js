import React from "react";
import {Link} from "react-router";

import data from "./data.js";


export default function Done(props) {

    var info=data.getData("info") || {};
    
    return(
        <div className="order">
            <h1>Your Order</h1>
            <p>1x {data.getData("pizzaType")} Pizza</p>
            {data.getData("info") ? <div><h2>USER INFO</h2><p><span className="user">NAME</span> {info.name || ""}</p><p><span className="user">ADDRESS</span> {info.address || ""}</p><p><span className="user">PHONENUMBER</span> {info.phonenumber || ""}</p><Link to="/confirmation" className="confirm">CONFIRM ORDER<img src="https://cdn0.iconfinder.com/data/icons/bicon/24/circle_arrow_next_forward_disclosure-512.png" className="nextIcon"/></Link></div> : <h2>Hmm.. Please <Link to="/order">enter your information</Link></h2>}
        </div>    
    )
}