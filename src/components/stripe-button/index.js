import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Gz6c9DSzpbeolqNTR26Of9LZ11io0rpkkEgvNaHjg1DSY3YX1sIwDTnTAMzEeYCvVmHt7p7LOS0af9snjkoHpV400RY3LXZpj";

  const onToken = token => {
    console.log(token);
    alert(" Payment Captured!");
  };

  return (
    <StripeCheckout
      bitcoin
      alipay
      allowRememberMe
      label='Proceed to Payment'
      name='E-commerce Site'
      billingAddress
      shippingAddress
      image='https://www.svgrepo.com/show/22845/shopping-cart.svg'
      description={` Pay $${price} to complete your order`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
