import React from "react";

const StockContext=React.createContext({
    items:new Map(),
    onAdd:()=>{}
})

export default StockContext;