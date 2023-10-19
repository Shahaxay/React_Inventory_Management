import React,{useContext} from "react";
import Model from "../UI/Model/Model";
import Button from "../UI/Button/Button"
import CartList from "./CartList";
import CartContext from "../../store/cart-context";

import './Cart.css';

const Cart=props=>{
    const context=useContext(CartContext);
    let totalBill=0;
    Array.from(context.items.values()).forEach(item=>{
        totalBill+=+item.price * item.quantity;
    })
    const closeCartHandler=()=>{
        props.onClose(false);
    }

    const generateBillHandler=()=>{

    }
    return (
        <Model onClick={props.onClose}>
            <CartList/>
            <div>
                <h5>Total Price</h5>
                <span>{'Rs '+totalBill}</span>
            </div>
            <div>
            <Button title="Close" onClick={closeCartHandler}/>
            <Button title="Generate Bill" onClick={generateBillHandler}/>
            </div>
        </Model>
    );
}

export default Cart;