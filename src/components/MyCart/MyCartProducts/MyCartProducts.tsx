import "./MyCartProducts.css";
import Product from "./Product";
import payment1 from "../../../images/payments/mastercard.png";
import payment2 from "../../../images/payments/mastercard-1.png";
import payment3 from "../../../images/payments/mastercard-2.png";
import payment4 from "../../../images/payments/mastercard-3.png";
import Products from "../../../api/products";
import { Link } from "react-router-dom";

export default function MyCartProducts(props: { CartProducts: any }) {
  let getPrice = 0;

  function getCartItem(productId: number, productAmount: number, index: any) {
    let getProduct: any = Products.filter((x) => x.id == productId);
    getPrice += getProduct[0].price * productAmount;
    return (
      <Product
        key={index}
        id={productId}
        title={getProduct[0].name}
        quanitity={productAmount}
        price={getProduct[0].price}
        totalPrice={getProduct[0].price * productAmount}
      />
    );
  }

  return (
    <div className="mycart-products-main">
      {props.CartProducts.map((item: any, index: any) =>
        getCartItem(item.productId, item.productAmount, index)
      )}
      <div className="total-price">
        <h4>TOTAL</h4>
        <h3>${getPrice}</h3>
      </div>
      <Link to="Payment">
        <button>Checkout</button>
      </Link>
      <div className="payment">
        <p>SECURE PAYMENTS PROVIDED BY</p>
        <div className="payment-method">
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
