import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./PaymentCheckout.css";
import payment1 from "../../../../../images/payments/mastercard-1.png";
import payment2 from "../../../../../images/payments/mastercard-2.png";
import payment3 from "../../../../../images/payments/mastercard-3.png";
import payment4 from "../../../../../images/payments/mastercard.png";
import { myUser } from "../../../../../App";
import Products from "../../../../../api/products";
import Promocodes from "../../../../../api/promocodes";
interface promocode {
  promocodeDiscount: number;
  setPromocodeDiscount: any;
}
export default function PaymentCheckout(props: promocode) {
  const User = useContext<any>(myUser);
  let [getPromocode, setPromocode] = useState("");
  let [getUsedPromocode, setUsedPromocode] = useState(0);

  let [Discount, setDiscount] = useState(0);
  let [promocodeCallBack, setPromocodeCallBack] = useState<null | number>(null);
  const subtotal = () => {
    let result = 0;
    User.data.cart.map((e: any) => {
      result += Products[e.productId].price * e.productAmount;
    });

    return result.toFixed(2);
  };

  function CheckPromocode() {
    let getResult = Promocodes.filter((x) => x.promocode == getPromocode);
    setPromocode("");
    if (getResult.length == 1) {
      if (!User.data.coupons.includes(getPromocode) && getUsedPromocode === 0) {
        setUsedPromocode(1);
        User.data.coupons.unshift(getResult[0].promocode);
        User.setUser({ ...User.data });

        setDiscount((parseInt(subtotal()) / 100) * getResult[0].sale);

        props.setPromocodeDiscount(
          (parseInt(subtotal()) / 100) * getResult[0].sale
        );

        setPromocodeCallBack(1);
      } else {
        setPromocodeCallBack(2);
      }
    } else {
      setPromocodeCallBack(0);
    }
  }
  return (
    <div className="payment-stage1-rightside">
      <div className="payment-rightside-stage1-header">
        <div className="price-info">
          <p>Subtotal</p>
          <h4>${subtotal()}</h4>
        </div>
        <div className="price-info">
          <p>Discount</p>
          <h4>${Discount.toFixed(2)}</h4>
        </div>
        <div className="price-info">
          <p>Shipping Costs</p>
          <h4>$50.00</h4>
        </div>
        <div className="coupon-code">
          <input
            onChange={(e) => setPromocode(e.target.value)}
            value={getPromocode}
            type="text"
            placeholder="Coupon code"
          />
          <input
            onClick={CheckPromocode}
            type="submit"
            className="ApplyCoupon"
            value="Apply Coupon"
          />
        </div>
        <div className="coupon-code-callback">
          {promocodeCallBack == 1 ? (
            <span className="correct">Coupon Applied !</span>
          ) : (
            ""
          )}
          {promocodeCallBack == 0 ? (
            <span className="wrong">Coupon Not Found !</span>
          ) : (
            ""
          )}
          {promocodeCallBack == 2 ? (
            <span className="wrong">Coupon Aleady Redeemed !</span>
          ) : (
            ""
          )}
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
        <Link to="/Payment/Stage2">
          <button>
            <p>Checkout </p>
            <div className="line"></div>
            <p>${subtotal()}</p>
          </button>
        </Link>
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
