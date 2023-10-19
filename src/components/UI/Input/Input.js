import React from "react";
import './Input.css';

const Input=props=>{
    return(
        <React.Fragment>
            <label htmlFor={props.attributs.id}>{props.title}</label>
            <input {...props.attributs}/>
        </React.Fragment>
    );
};

export default Input;