import React from "react";
import PaymentCheckout from "./Components/PaymentCheckout/PaymentCheckout";
import PaymentDelivery from "./Components/PaymentDeliveryOptions/PaymentDelivery";
import PaymentProducts from "./Components/PaymentProducts/PaymentProducts";
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
