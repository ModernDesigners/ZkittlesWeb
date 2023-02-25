import React from "react";
import "./PaymentStage2Checkout.css";
import { Link } from "react-router-dom";
import payment1 from "../../../../images/payments/mastercard-1.png";
import payment2 from "../../../../images/payments/mastercard-2.png";
import payment3 from "../../../../images/payments/mastercard-3.png";
import payment4 from "../../../../images/payments/mastercard.png";
export default function PaymentStage2Checkout() {
  return (
    <div className="payment-stage1-rightside">
      <div className="payment-rightside-stage1-header">
        <div className="price-info">
          <p>Subtotal</p>
          <h4>$497.00</h4>
        </div>
        <div className="price-info">
          <p>Shipping</p>
          <h4>New York,US</h4>
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
        <label htmlFor="checkbox1">
          <input type="checkbox" id="checkbox1" />

          <p>
            I confirm that my address is 100% correct and WILL NOT hold Top
            Shelf BC liable if this shipment is sent to an incorrect address. *
          </p>
        </label>
        <label htmlFor="checkbox2">
          <input type="checkbox" id="checkbox2" />

          <p>
            I confirm that my address is 100% correct and WILL NOT hold Top
            Shelf BC liable if this shipment is sent to an incorrect address. *
          </p>
        </label>
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
