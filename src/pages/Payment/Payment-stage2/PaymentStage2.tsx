import React from "react";
import "./PaymentStage2.css";
import { Container } from "react-bootstrap";
import PaymentStage2Shipping from "./components/PaymentStage2Shipping/PaymentStage2Shipping";
import PaymentStage2Checkout from "./components/PaymentStage2Checkout/PaymentStage2Checkout";
export default function PaymentStage2() {
  return (
    <div className="payment-stage2">
      <Container>
        <div className="payment-stage2-main">
          <div className="payment-stage2-leftside">
            <PaymentStage2Shipping />
          </div>
          <div className="payment-stage2-rightside">
            <PaymentStage2Checkout />
          </div>
        </div>
      </Container>
    </div>
  );
}
