import React, { useContext } from "react";
import "./PaymentProducts.css";
import { Container, Col } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Product from "./Product";
import { myUser } from "../../../../../App";
export default function PaymentProducts() {
  const User = useContext<any>(myUser);

  console.log(User);

  return (
    <>
      <div className="stage1-products">
        <div className="stage1-products-header">
          <h3>Your Cart</h3>
          <p>(0)</p>
        </div>

        <Product
          stage3={false}
          cardPrice={120}
          quantity={2}
          cardTotalPrice={240}
          title={"1x Khalifa Kush (AAAA)"}
        />
      </div>
    </>
  );
}
