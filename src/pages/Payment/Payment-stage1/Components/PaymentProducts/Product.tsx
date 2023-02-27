import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import girchi from "../../../../../images/girchi.png";
interface show {
  show: boolean;
  stage3: boolean;
}
export default function Product({ show, stage3 }: show) {
  const stage1Product = (
    <>
      <div className="col-lg-6">
        <div className="product-quantity">
          <AiOutlineMinus />
          <div>
            <h4>1</h4>
          </div>
          <AiOutlinePlus />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="product-quantity-price">
          <h4>$24</h4>
        </div>
      </div>
    </>
  );

  const stage3Product = (
    <>
      <div className="col-lg-6">
        <div className="product-quantity-price">
          <div className="stage3-product-middle">
            <p>2x</p>
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
            <p>Add Integra Pack - 4g</p>
          </Col>
          <Col lg={6}>
            <div className="product-quantity-main">
              {stage3 ? stage3Product : stage1Product}
            </div>
          </Col>
          <Col lg={3}>
            <div className="product-price">
              <p>$240.00</p>
            </div>
          </Col>
        </div>
        {show ? (
          <>
            {" "}
            <div className="product-information">
              <Col lg={3}>
                <p>Add Integra Pack - 4g</p>
              </Col>
              <Col lg={6}>
                <div className="product-quantity-main">
                  {stage3 ? stage3Product : stage1Product}
                </div>
              </Col>
              <Col lg={3}>
                <div className="product-price">
                  <p>$240.00</p>
                </div>
              </Col>
            </div>
            <div className="subtotal-main">
              <p>Subtotal</p>
              <h4>$245.00</h4>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
