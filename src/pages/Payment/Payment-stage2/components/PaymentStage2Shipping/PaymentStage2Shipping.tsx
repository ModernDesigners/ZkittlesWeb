import React from "react";
import "./PaymentStage2Shipping.css";
import Bottomside from "./Stage2Inputs/Bottomside/Bottomside";
import Topside from "./Stage2Inputs/Topside/Topside";
export default function PaymentStage2Shipping() {
  return (
    <div className="stage2-shipping">
      <div className="stage2-header">
        <h4>Shipping</h4>
        <p>(3)</p>
      </div>
      <div className="stage2-inputs-main">
        <Topside />
        <Bottomside />
      </div>
    </div>
  );
}
