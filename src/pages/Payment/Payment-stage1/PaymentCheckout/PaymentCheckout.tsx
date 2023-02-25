import React from "react";
import { Link } from "react-router-dom";
import "./PaymentCheckout.css";
import payment1 from "../../../../images/payments/mastercard-1.png";
import payment2 from "../../../../images/payments/mastercard-2.png";
import payment3 from "../../../../images/payments/mastercard-3.png";
import payment4 from "../../../../images/payments/mastercard.png";
export default function PaymentCheckout() {
  return (
    <div className="payment-stage1-rightside">
      <div className="payment-rightside-stage1-header">
        <div className="price-info">
          <p>Subtotal</p>
          <h4>$497.00</h4>
        </div>
        <div className="price-info">
          <p>Discount</p>
          <h4>$0.0</h4>
        </div>
        <div className="price-info">
          <p>Shipping Costs</p>
          <h4>$50.00</h4>
        </div>
        <div className="coupon-code">
          <input type="text" placeholder="Coupon code" />
          <input type="submit" value="Apply Coupon" />
        </div>
      </div>
      <div className="payment-rightside-stage1-middle">
        <div className="progress-bar">
          <div className="bar"></div>
        </div>
        <p className="text-p">
          Get Free <span className="span1">Shipping</span> for orders over{" "}
          <span className="span2">$100.00</span>
        </p>
        <Link to={"/"}>Continue Shopping</Link>
        <button>
          <p>Checkout </p>
          <div className="line"></div>
          <p>$547.00</p>
        </button>
      </div>
      <div className="payment-rightside-stage1-footer">
        <p>SECURE PAYMENTS PROVIDED BY</p>
        <div className="payment-methods">
          <div>
            <img src={payment1} alt="" />
          </div>
          <div>
            <img src={payment2} alt="" />
          </div>
          <div>
            <img src={payment3} alt="" />
          </div>
          <div>
            <img src={payment4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
