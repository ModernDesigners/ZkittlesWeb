import React, { useContext } from "react";
import "./PaymentProducts.css";
import Product from "./Product";
import { myUser } from "../../../../../App";
import Products from "../../../../../api/products";
export default function PaymentProducts() {
  const User = useContext<any>(myUser);

  return (
    <>
      <div className="stage1-products">
        <div className="stage1-products-header">
          <h3>Your Cart</h3>
          <p>(0)</p>
        </div>

        {User.data.cart.map((e: any, index: number) => (
          <Product
            key={index}
            id={e.productId}
            stage3={false}
            cardPrice={Products[e.productId].price}
            quantity={e.productAmount}
            cardTotalPrice={e.productAmount * Products[e.productId].price}
            title={Products[e.productId].name}
          />
        ))}
      </div>
    </>
  );
}
