import React, { useContext } from "react";
import CartContext from "../store/cart-context";

import './CartItem.css'

const CartItem = props => {
    const context = useContext(CartContext);
    const incrementHandler = () => {
        const obj = {
            title: props.item.title,
            quantity: 1
        }
        context.onAdd(obj);
    }
    const decrementHandler = () => {
        context.onRemove(props.item.title);
    }
    return (
        <React.Fragment>
        <div className="cart-item">
            <div>
                <h5 id="name">{props.item.title}</h5>
                <h6 id="price">{'Rs ' + props.item.price}</h6>
                <span id="quantity">{'x ' + props.item.quantity}</span>
            </div>
            <div className="inc-dec">
                <button id="increase" onClick={incrementHandler}>+</button>
                <button id="decrease" onClick={decrementHandler}>-</button>
            </div>
        </div>
        <hr/>
        </React.Fragment>
    );
}

export default CartItem