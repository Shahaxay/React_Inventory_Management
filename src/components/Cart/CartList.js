import React,{useContext} from "react";
import './CartList.css';
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
const CartList=props=>{
    const context=useContext(CartContext);
    return(
        Array.from(context.items.values()).map(item=><CartItem
        key={item.title}
        item={item}
        />)
    )
}

export default CartList;