import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';

const ShopHeader = () => {
  return (
    <header className="shop-header row">
        <div className="logo text-dark">Test task for <span>"The Ad Masters"</span></div>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          Purchases
        </div>
      </Link>
    </header>
  );
};

export default ShopHeader;
