import React,{useContext} from "react";

import './StockItem.css';
import Button from "../UI/Button/Button";
import CartContext from "../store/cart-context";

const StockItem=props=>{
    const context=useContext(CartContext);
    const addToCartHandler=e=>{
        const obj={
            title:props.item.title,
            price:props.item.price,
            quantity:+document.getElementById(props.item.title).value
        }
        context.onAdd(obj);
    }
    return(
        <tr className="stock-item">
            <td>{props.item.title}</td>
            <td>{props.item.description}</td>
            <td>{props.item.price}</td>
            <td><input type="number" id={props.item.title} defaultValue={1}/></td>
            <td><Button
            title="Add"
            onClick={addToCartHandler}
            /></td>
        </tr>
    )
}
export default StockItem;