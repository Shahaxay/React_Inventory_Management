import React from "react";

import './Header.css';
import CartIcon from "../Cart/CartIcon";

const Header = props => {
    return (
        <div className="header">
            <div>
                <h2>Inventory Management Admin</h2>
            </div>
            <div>
                <CartIcon />
            </div>
        </div>
    );
}

export default Header;