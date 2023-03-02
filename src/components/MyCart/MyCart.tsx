import React, { useContext, useRef, useState } from "react";
import "./MyCart.css";
import cart from "../../images/cart-bag1.png";
import { AiOutlineRight } from "react-icons/ai";
import MyCartProducts from "./MyCartProducts/MyCartProducts";

export default function MyCart(props: {
  myCart: any;
  darkScreen: any;
  User: any;
}) {
  const myCart = useRef<any>(null);
  const darkScreen = useRef<any>(null);
  const closeCart = () => {
    props.darkScreen.current.classList.remove("darkScreenActive");
    props.myCart.current.classList.remove("myCartActive");
  };

  return (
    <>
      <div className="darkScreen" ref={props.darkScreen}></div>
      <div className="mycart-main" ref={props.myCart}>
        <div className="mycart-header">
          <h3>Your Cart</h3>
          <p>({props.User.cart.length})</p>
        </div>
        <div className="mycart-close-icon" onClick={closeCart}>
          <AiOutlineRight />
        </div>
        {props.User.cart.length == 0 ? (
          <>
            <div className="mycart-empty-main">
              <div className="mycart-empty-content">
                <div>
                  <img src={cart} alt="" />
                </div>
                <button>Show Product</button>
              </div>
            </div>
          </>
        ) : (
          <MyCartProducts
            closeCart={closeCart}
            CartProducts={props.User.cart}
          />
        )}
      </div>
    </>
  );
}
