import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import girchi from "../../../../../images/girchi.png";
import { myUser } from "../../../../../App";

interface show {
  stage3: boolean;
  cardPrice?: number;
  quantity?: number;
  cardTotalPrice?: number;
  title?: string;
  id?: number;
}
export default function Product({
  stage3,
  cardPrice,
  quantity,
  cardTotalPrice,
  title,
  id,
}: show) {
  const User = useContext<any>(myUser);

  const increaseQuanitity = () => {
    const index = User.data.cart.findIndex((object: any) => {
      return object.productId === id;
    });
    User.data.cart[index].productAmount += 1;

    User.setUser({
      ...User.data,
    });
  };

  const decreaseQuanitity = () => {
    const index = User.data.cart.findIndex((object: any) => {
      return object.productId === id;
    });
    User.data.cart[index].productAmount !== 0
      ? (User.data.cart[index].productAmount -= 1)
      : null;

    User.setUser({
      ...User.data,
    });
  };

  const stage1Product = (
    <>
      <div className="col-lg-6">
        <div className="product-quantity">
          <AiOutlineMinus onClick={decreaseQuanitity} />
          <div>
            <h4>{quantity}</h4>
          </div>
          <AiOutlinePlus onClick={increaseQuanitity} />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="product-quantity-price">
          <h4>${cardPrice?.toFixed(2)}</h4>
        </div>
      </div>
    </>
  );

  const stage3Product = (
    <>
      <div className="col-lg-6">
        <div className="product-quantity-price">
          <div className="stage3-product-middle">
            <p>{quantity}x</p>
            <h4>${cardPrice}</h4>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <div className="stage1-product">
      <div className="product-image">
        <img src={girchi} alt="" />
      </div>
      <div className="products-information">
        <div className="product-information">
          <Col lg={3}>
            <p>{title}</p>
          </Col>
          <Col lg={6}>
            <div className="product-quantity-main">
              {stage3 ? stage3Product : stage1Product}
            </div>
          </Col>
          <Col lg={3}>
            <div className="product-price">
              <p>${cardTotalPrice?.toFixed(2)}</p>
            </div>
          </Col>
        </div>
      </div>
    </div>
  );
}
