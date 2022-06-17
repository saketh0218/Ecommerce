import React from "react";
import "./styles.scss";

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <span name='name'>{name}</span>
        <span name='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
