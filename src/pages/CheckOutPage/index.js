import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import StripeButton from "../../components/stripe-button";
import CheckOutItem from "../../components/checkout-item";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import "./checkout.styles.scss";

const CheckOutPage = ({ cartItems, total }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${total}</div>
      <div className='test-warning'>
        * Please use following test card for payments *
        <br />
        4242 4242 4242 4242 - Exp: 03/24 - CVV: 123
      </div>
      <StripeButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
