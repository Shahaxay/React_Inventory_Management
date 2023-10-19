import React, { useState } from "react";
import StockContext from "./stock-context";

const StockContextProvider = props => {
    const [items, setItems] = useState(new Map());
    const addToStockHandler = item => {
        const newMap=new Map(items);
        newMap.set(item.title,item);
        setItems(newMap);
    }
    const obj = {
        items: items,
        onAdd: addToStockHandler
    }
    return (
        <StockContext.Provider value={obj}>
            {props.children};
        </StockContext.Provider>
    );

}

export default StockContextProvider