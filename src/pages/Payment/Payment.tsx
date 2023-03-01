import React, { useEffect } from "react";
import PaymentHeader from "./Payment-stage1/Components/PaymentHeader/PaymentHeader";
import PaymentProducts from "./Payment-stage1/Components/PaymentProducts/PaymentProducts";
import PaymentStage1 from "./Payment-stage1/PaymentStage1";
import PaymentStage2 from "./Payment-stage2/PaymentStage2";
import PaymentStage3 from "./Payment-stage3/PaymentStage3";
import "./Payment.css";

export default function Payment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="payment-page">
      <PaymentHeader />
      <PaymentStage1 />
    </div>
  );
}
