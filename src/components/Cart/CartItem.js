import React,{useContext} from "react";
import CartContext from "../../store/cart-context";

const CartItem=props=>{
    const context=useContext(CartContext);
    const incrementHandler=()=>{
        const obj={
            title:props.item.title,
            quantity:1
        }
        context.onAdd(obj);
    }
    const decrementHandler=()=>{
        context.onRemove(props.item.title);
    }
    return (
        <React.Fragment>
        <div>
            <h5 id="name">{props.item.title}</h5>
            <h6 id="price">{'Rs '+props.item.price}</h6>
            <span id="quantity">{'x '+props.item.quantity}</span>
        </div>
        <div>
            <button id="increase" onClick={incrementHandler}>+</button>
            <button id="decrease" onClick={decrementHandler}>-</button>
        </div>

        </React.Fragment>
    );
}

export default CartItem