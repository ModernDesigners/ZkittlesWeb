import React from "react";
import { Col } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import girchi from "../../../../../images/girchi.png";
interface show {
  show: boolean;
}
export default function Product({ show }: show) {
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
            </div>{" "}
          </>
        ) : null}
      </div>
    </div>
  );
}
