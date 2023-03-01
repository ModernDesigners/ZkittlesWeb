import { FiMinus, FiPlus } from "react-icons/fi";
import ProductAdding from "../ProductAdding/ProductAdding";
import "./AddCard.css";
import checked_circle from "../../../../../../../images/icons/checked_circle.png";
import { useState, useContext, useRef, useEffect } from "react";
import { myUser } from "../../../../../../../App";

export default function AddCard(props: { ProductData: any }) {
  const [productCount, setProductCount] = useState(1);
  const [productGet, setProductGet] = useState(1);
  const addCardButton: any = useRef(0);
  const User = useContext(myUser);

  useEffect(() => {
    addCardButton.current.classList.add("adding");
    let stm = setTimeout(() => {
      addCardButton.current.classList.remove("adding");
    }, 500);
    return () => {
      clearTimeout(stm);
    };
  }, [productGet]);

  function buttonLock() {
    setProductGet(productGet + 1);
  }

  function getDecreaseCount() {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    }
  }

  function addUserCard() {
    buttonLock();
    const newUser = { ...User.data };
    let DelInd = newUser.cart.findIndex(
      (item: any) => item.productId == props.ProductData.id
    );
    let thisProduct: any;
    if (DelInd !== -1) {
      thisProduct = {
        productId: props.ProductData.id,
        productAmount: newUser.cart[DelInd].productAmount + productCount,
      };
      newUser.cart.splice(DelInd, 1);
    } else {
      thisProduct = {
        productId: props.ProductData.id,
        productAmount: productCount,
      };
    }
    newUser.cart.push(thisProduct);
    User.setUser(newUser);
    setProductCount(1);
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
              ref={addCardButton}
              className="Button_AddCard"
              onClick={addUserCard}
            >
              Add Card
              <div className="LineV"></div>${props.ProductData.price}
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
