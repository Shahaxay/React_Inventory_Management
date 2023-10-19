import React from "react";

import './Button.css';

const Button=props=>{
    return<button className="button" onClick={props.onClick} type={props.type||"button"}>{props.title}</button>
}

export default Button;