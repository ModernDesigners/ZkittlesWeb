import { FiMinus, FiPlus } from "react-icons/fi";
import ProductAdding from "../ProductAdding/ProductAdding";
import "./AddCard.css";
import checked_circle from "../../../../../../../images/icons/checked_circle.png";
import { useState } from "react";

export default function AddCard() {
  const [productCount, setProductCount] = useState(1);
  function getDecreaseCount() {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    }
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
            <button className="Button_AddCard">
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
