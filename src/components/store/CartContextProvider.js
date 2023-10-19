import React,{useState} from "react";
import CartContext from "./cart-context";

const CartContextProvider=props=>{
    const [items,setItems]=useState(new Map());
    const [count,setCount]=useState(0);
    const addToCartHandler=item=>{
        const copiedItems=new Map(items);
        if(copiedItems.has(item.title)){
            console.log("if executed");
            copiedItems.get(item.title).quantity+=item.quantity;
            setItems(copiedItems);
            setCount(prev=>prev+item.quantity);
        }else{
            console.log("else executed");
            copiedItems.set(item.title,item);
            setItems(copiedItems);
            setCount(item.quantity);
        }
    }
    const removeFromCartHandler=title=>{
        const copiedItems=new Map(items);
        if(copiedItems.get(title).quantity>1){
            console.log(copiedItems.get(title).quantity);
            copiedItems.get(title).quantity--;
        }else{
            copiedItems.delete(title);
        }
        setItems(copiedItems);
        setCount(prev=>prev-1);
    }
    const obj={
        items:items,
        count:count,
        onAdd:addToCartHandler,
        onRemove:removeFromCartHandler,
    }
    return(
        <CartContext.Provider value={obj}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;