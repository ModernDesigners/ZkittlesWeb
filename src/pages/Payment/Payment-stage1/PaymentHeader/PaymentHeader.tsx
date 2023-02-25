import React from "react";
import "./PaymentHeader.css";
import paymentBag from "../../../../images/payment-page/bag.png";
import paymentCheckout from "../../../../images/payment-page/checkout.png";
import paymentComplete from "../../../../images/payment-page/complete.png";
export default function PaymentHeader() {
  return (
    <div className="payment-header">
      <div className="stage active">
        <div className="stage-icon">
          <img src={paymentBag} alt="" />
        </div>
        <p>Shopping Cart</p>
      </div>

      <div className="payment-header-line"></div>
      <div className="stage ">
        <div className="stage-icon">
          <img src={paymentCheckout} alt="" />
        </div>
        <p>Checkout</p>
      </div>

      <div className="payment-header-line"></div>
      <div className="stage ">
        <div className="stage-icon">
          <img src={paymentComplete} alt="" />
        </div>
        <p>Order Complete</p>
      </div>
    </div>
  );
}
