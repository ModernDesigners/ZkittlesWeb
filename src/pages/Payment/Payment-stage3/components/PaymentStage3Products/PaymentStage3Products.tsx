import React from "react";
import PaymentProducts from "../../../Payment-stage1/Components/PaymentProducts/PaymentProducts";
import Product from "../../../Payment-stage1/Components/PaymentProducts/Product";
import PaymentStage3Total from "../PaymentStage3Total/PaymentStage3Total";
import "./PaymentStage3Products.css";
export default function PaymentStage3Products() {
  return (
    <div className="stage3-products">
      <Product stage3={false} show={true} />
      <Product stage3={true} show={false} />
    </div>
  );
}
