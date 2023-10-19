import React,{useState} from "react";
import CartContext from "./cart-context";

const CartContextProvider=props=>{
    const [items,setItems]=useState(new Map());
    const addToCartHandler=item=>{
        const copiedItems=new Map(items);
        if(copiedItems.has(item.title)){
            console.log("if executed");
            copiedItems.get(item.title).quantity+=item.quantity;
            setItems(copiedItems);
        }else{
            console.log("else executed");
            copiedItems.set(item.title,item);
            setItems(copiedItems);
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
    }
    const obj={
        items:items,
        onAdd:addToCartHandler,
        onRemove:removeFromCartHandler,
        totolBill:0
    }
    return(
        <CartContext.Provider value={obj}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;