import React from "react";
import './Input.css';

const Input = props => {
    return (
        <React.Fragment>
            <div className="input">
                <label htmlFor={props.attributs.id}>{props.title}</label>
                <input {...props.attributs} />
            </div>
        </React.Fragment>
    );
};

export default Input;