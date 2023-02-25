import React from "react";
import PaymentCheckout from "./PaymentCheckout/PaymentCheckout";
import PaymentDelivery from "./PaymentDeliveryOptions/PaymentDelivery";
import PaymentHeader from "./PaymentHeader/PaymentHeader";
import PaymentProducts from "./PaymentProducts/PaymentProducts";
import "./PaymentStage1.css";
export default function PaymentStage1() {
  return (
    <div className="payment-stage1">
      <div className="payment-stage1-main container">
        <div className="payment-stage1-leftside">
          <PaymentProducts />
          <PaymentDelivery />
        </div>
        <PaymentCheckout />
      </div>
    </div>
  );
}
