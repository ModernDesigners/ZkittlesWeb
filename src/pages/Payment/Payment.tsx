import React from "react";
import PaymentHeader from "./Payment-stage1/Components/PaymentHeader/PaymentHeader";
import PaymentProducts from "./Payment-stage1/Components/PaymentProducts/PaymentProducts";
import PaymentStage1 from "./Payment-stage1/PaymentStage1";
import PaymentStage2 from "./Payment-stage2/PaymentStage2";

export default function Payment() {
  return (
    <div className="payment-page">
      <PaymentHeader />
      <PaymentStage2 />
    </div>
  );
}
