import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./PaymentStage3Total.css";
import "../../../Payment-stage1/PaymentStage1.css";
export default function PaymentStage3Total() {
  return (
    <div className="total-main">
      <div className="total-header">
        <h4>TOTAL</h4>
        <h3>$497.00</h3>
      </div>
      <div className="total-information">
        <Row>
          <Col lg={4}>
            <div className="total-leftside">
              <p>Shipping</p>
              <p>Shipping Opitons</p>
              <p>Email Money Transfer</p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="total-middle">
              <h4>New York,US</h4>
              <h4>Same-Day Dispatching</h4>
              <h4>Interac</h4>
            </div>
          </Col>
          <Col lg={4}>
            <div className="total-rightside">
              <div className="total-rightside-count">
                <div>
                  <p>Subtotal</p>
                  <p>Discount</p>
                  <p>Shipping Costs</p>
                  <p>Point</p>
                </div>
                <div>
                  <h4>$497.00</h4>
                  <h4>$0.0</h4>
                  <h4>$50.00</h4>
                  <h4>$250</h4>
                </div>
              </div>
              <div className="total-count">
                <p>TOTAL</p>
                <h3>$297.00</h3>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
