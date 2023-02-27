import React from "react";
import "./PaymentStage3.css";
import { Container } from "react-bootstrap";
import { AiOutlineCheck } from "react-icons/ai";
import Product from "../Payment-stage1/Components/PaymentProducts/Product";
import PaymentStage3Products from "./components/PaymentStage3Products/PaymentStage3Products";
import PaymentStage3Total from "./components/PaymentStage3Total/PaymentStage3Total";
export default function PaymentStage3() {
  return (
    <div className="payment-stage3">
      <Container>
        <div className="stage3-header">
          <h4>Your Order</h4>
          <div>
            <div>
              <AiOutlineCheck />
            </div>
            <p>Paid</p>
          </div>
        </div>
        <PaymentStage3Products />
        <PaymentStage3Total />
      </Container>
    </div>
  );
}
