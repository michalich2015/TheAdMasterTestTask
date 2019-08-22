import React from 'react';
import './product-list-item.css';

const ProductListItem = ({ product, onAddedToCart }) => {
  const { title, description, price, coverImage } = product;
  return (
    <div className="product-list-item">
      <div className="product-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="product-details">
        <span className="product-title">{title}</span>
        <div className="product-description">{description}</div>
        <div className="product-price">${price}</div>
        <button
          onClick={onAddedToCart}
          className="btn btn-info add-to-cart">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductListItem;
