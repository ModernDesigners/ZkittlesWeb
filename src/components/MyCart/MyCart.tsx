import React, { useRef } from "react";
import "./MyCart.css";
import cart from "../../images/cart-bag1.png";
import { AiOutlineRight } from "react-icons/ai";

export default function MyCart(props: { myCart: any }) {
  const myCart = useRef<any>(null);
  const closeCart = () => {
    props.myCart.current.classList.remove("active");
    setTimeout(() => {
      props.myCart.current.style.display = "none";
    }, 400);
  };
  return (
    <div className="mycart" ref={props.myCart} style={{ display: "none" }}>
      <div className="mycart-main">
        <div className="mycart-header">
          <h3>Your Cart</h3>
          <p>(0)</p>
        </div>
        <div className="mycart-empty-main">
          <div className="mycart-close-icon" onClick={closeCart}>
            <AiOutlineRight />
          </div>

          <div className="mycart-empty-content">
            <div>
              <img src={cart} alt="" />
            </div>
            <button>Show Product</button>
          </div>
        </div>
      </div>
    </div>
  );
}
