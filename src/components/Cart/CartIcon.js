import React, { useState,useCallback, useContext } from "react";

import './CartIcon.css';
import cartImage from '../../assets/Images/icons-cart.png';
import Cart from "./Cart";
import CartContext from "../store/cart-context";

const CartIcon = props => {
    const context=useContext(CartContext);

    const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {
        setShowCart(true);
    }

    return (
        <React.Fragment>
            {showCart && <Cart onClose={setShowCart}/>}
            <button className="cart-icon" onClick={showCartHandler}>
                <img src={cartImage} alt="cartImage" />
                <span id="cart-title">&nbsp;Your Cart&nbsp;</span>
                <span id="badge">{context.count}</span>
            </button>
        </React.Fragment>
    );
}

export default CartIcon;