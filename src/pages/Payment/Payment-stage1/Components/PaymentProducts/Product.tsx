import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import girchi from "../../../../../images/girchi.png";
interface show {
  stage3: boolean;
  cardPrice: number;
  quantity: number;
  cardTotalPrice: number;
  title: string;
}
export default function Product({
  stage3,
  cardPrice,
  quantity,
  cardTotalPrice,
  title,
}: show) {
  const stage1Product = (
    <>
      <div className="col-lg-6">
        <div className="product-quantity">
          <AiOutlineMinus />
          <div>
            <h4>{quantity}</h4>
          </div>
          <AiOutlinePlus />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="product-quantity-price">
          <h4>${cardPrice}.00</h4>
        </div>
      </div>
    </>
  );

  const stage3Product = (
    <>
      <div className="col-lg-6">
        <div className="product-quantity-price">
          <div className="stage3-product-middle">
            <p>2x1q1</p>
            <h4>$24</h4>
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
              <p>${cardTotalPrice}.00</p>
            </div>
          </Col>
        </div>
      </div>
    </div>
  );
}
