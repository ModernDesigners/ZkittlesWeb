import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./PaymentStage3Total.css";
import "../../../Payment-stage1/PaymentStage1.css";
import { myUser } from "../../../../../App";
import Products from "../../../../../api/products";
interface promocode {
  promocodeDiscount: number;
  setPromocodeDiscount: any;
}
export default function PaymentStage3Total(props: promocode) {
  const User = useContext<any>(myUser);

  const subtotal = () => {
    let result = 0;
    User.data.cart.map((e: any) => {
      result += Products[e.productId].price * e.productAmount;
    });

    return "$" + result.toFixed(2);
  };
  const allTotal = () => {
    let subtotal = 0;
    User.data.cart.map((e: any) => {
      subtotal += Products[e.productId].price * e.productAmount;
    });

    let shippingCost = 0;
    User.data.cart.map((e: any) => {
      shippingCost += Products[e.productId].shippingWeight * 1.44;
    });

    return (
      "$" +
      (subtotal + shippingCost - User.data.points - props.promocodeDiscount)
    );
  };
  console.log(props.promocodeDiscount);

  return (
    <div className="total-main">
      <div className="total-header">
        <h4>TOTAL</h4>
        <h3>{subtotal()}</h3>
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
                  <h4>{subtotal()}</h4>
                  <h4>-${props.promocodeDiscount.toFixed(2)}</h4>
                  <h4>$50.00</h4>
                  <h4>-${User.data.points}</h4>
                </div>
              </div>
              <div className="total-count">
                <p>TOTAL</p>
                <h3>{allTotal()}</h3>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="total-footer">
        <p>New Order, Click button bellow</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
}
