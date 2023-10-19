import React from "react";
import './Stock.css';
import StockList from "./StockList";

const Stock=props=>{
    return (
        <table>
            <tr>
            <th>Medicine Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>quantity</th>
            <th></th>
            </tr>
            <StockList/>
        </table>
    )
}

export default Stock;