import React, { useState } from "react";

import './CartIcon.css';
import cartImage from '../../assets/Images/icons-cart.png';
import Cart from "./Cart";

const CartIcon = props => {
    const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {
        setShowCart(true);
    }

    return (
        <React.Fragment>
            {showCart && <Cart onClose={setShowCart}/>}
            <button className="cart-icon" onClick={showCartHandler}>
                <img src={cartImage} alt="cartImage" />
                <span id="cart-title">Your Cart</span>
                <span id="badge">{0}</span>
            </button>
        </React.Fragment>
    );
}

export default CartIcon;