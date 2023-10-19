import React from "react";

const CartContext=React.createContext({
    items:new Map(),
    onAdd:()=>{},
    onRemove:()=>{}
})

export default CartContext;