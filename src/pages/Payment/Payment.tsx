import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import PaymentHeader from "./Payment-stage1/Components/PaymentHeader/PaymentHeader";
import PaymentProducts from "./Payment-stage1/Components/PaymentProducts/PaymentProducts";
import PaymentStage1 from "./Payment-stage1/PaymentStage1";
import PaymentStage2Shipping from "./Payment-stage2/components/PaymentStage2Shipping/PaymentStage2Shipping";
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
    </div>
  );
}
