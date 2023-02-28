import { FiMinus, FiPlus } from "react-icons/fi";
import ProductAdding from "../ProductAdding/ProductAdding";
import "./AddCard.css";
import checked_circle from "../../../../../../../images/icons/checked_circle.png";
import { useState, useContext } from "react";
import { MyUser } from "../../../../../../../App";

export default function AddCard(ProductData: any) {
  const Product = { id: 12 };
  ProductData = ProductData.ProductData.ProductData;

  const [productCount, setProductCount] = useState(1);
  function getDecreaseCount() {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    }
  }

  const User = useContext(MyUser);
  function addUserCard(ProductId: number, ProductAmount: number) {
    const newUser = User.data;
    const thisProduct = {
      productId: ProductData.id,
      productAmount: ProductAmount,
    };
    let DelInd = newUser.cart.findIndex(
      (item: any) => item.productId == thisProduct.productId
    );
    if (DelInd !== -1) {
      newUser.cart.splice(DelInd, 1);
    }
    newUser.cart.push(thisProduct);
    User.setUser(newUser);
    console.log(User.data);
  }

  return (
    <div className="addCartBlock">
      <ProductAdding name="Khalifa Kush (AAAA)" times={2} price={120.0} />
      <ProductAdding name="Add Integra Pack - 4g" price={2.0} />
      <div className="line_Split"></div>
      <div className="Number_Adding">
        <div className="addCarter">
          <div className="Counter">
            <div className="C_Minus C_Calcs" onClick={getDecreaseCount}>
              <FiMinus />
            </div>
            <span className="C_Times">{productCount}</span>
            <div
              className="C_Plus C_Calcs"
              onClick={() => setProductCount(productCount + 1)}
            >
              <FiPlus />
            </div>
            <div className="LineV"></div>
            <div className="InStock">In Stock</div>
          </div>
          <div className="Button_AddCard_Block">
            <button
              className="Button_AddCard"
              onClick={() => addUserCard(Product.id, productCount)}
            >
              Add Card
              <div className="LineV"></div>
              $120.00
            </button>
          </div>
        </div>
        <div className="line_Split"></div>
        <div className="checked_titles_row">
          <div className="checked_titles">
            <img src={checked_circle} />
            Free Xpress Shipping on orders over <span>$149</span>
          </div>
          <div className="checked_titles">
            <img src={checked_circle} /> Order before 12:00pm for same day
            dispatch
          </div>
          <div className="checked_titles">
            <img src={checked_circle} /> Support & ordering open 7 day a week
          </div>
        </div>
      </div>
    </div>
  );
}
