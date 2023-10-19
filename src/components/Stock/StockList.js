import React,{useContext} from "react";
import StockItem from "./StockItem";
import StockContext from "../store/stock-context";

import './StockList.css';

const StockList = prop => {
    const context=useContext(StockContext);
    return (
        <React.Fragment>
            {Array.from(context.items.values()).map(med=>{
                return <StockItem
                key={med.title}
                item={med}
                />
            })}

        </React.Fragment>
    );
}
export default StockList;