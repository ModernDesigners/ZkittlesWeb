import React from "react";
import "./PaymentProducts.css";
import { Container, Col } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Product from "./Product";
export default function PaymentProducts() {
  return (
    <>
      <div className="stage1-products">
        <div className="stage1-products-header">
          <h3>Your Cart</h3>
          <p>(0)</p>
        </div>

        <Product stage3={false} show={true} />
        <Product stage3={false} show={false} />
        <Product stage3={false} show={false} />
      </div>
    </>
  );
}
