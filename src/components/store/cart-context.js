import React from "react";

const CartContext=React.createContext({
    items:new Map(),
    count:0,
    onAdd:()=>{},
    onRemove:()=>{},
})

export default CartContext;