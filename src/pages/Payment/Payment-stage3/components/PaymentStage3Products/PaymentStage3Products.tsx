import React, { useContext } from "react";
import PaymentProducts from "../../../Payment-stage1/Components/PaymentProducts/PaymentProducts";
import Product from "../../../Payment-stage1/Components/PaymentProducts/Product";
import PaymentStage3Total from "../PaymentStage3Total/PaymentStage3Total";
import "./PaymentStage3Products.css";
import { myUser } from "../../../../../App";
import Products from "../../../../../api/products";
export default function PaymentStage3Products() {
  const User = useContext<any>(myUser);
  return (
    <div className="stage3-products">
      {User.data.cart?.map((e: any) => (
        <Product
          stage3={true}
          title={Products[e.productId].name}
          quantity={e.productAmount}
          cardPrice={Products[e.productId].price}
          cardTotalPrice={Products[e.productId].price * e.productAmount}
        />
      ))}
    </div>
  );
}
