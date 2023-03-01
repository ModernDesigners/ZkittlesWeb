import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Products from "../../../api/products";
import girchi from "../../../images/girchi.png";
import { myUser } from "../../../App";
interface cartProps {
  id: number;
  title: string;
  quanitity: number;
  price: number;
  totalPrice: number;
}
export default function Product({
  id,
  title,
  quanitity,
  price,
  totalPrice,
}: cartProps) {
  const User = useContext(myUser);

  function removeFromCart() {
    let getUserData = { ...User.data };
    let saveCart: object[] = getUserData.cart.filter(
      (x: any) => x.productId !== id
    );
    getUserData.cart = saveCart;

    User.setUser(getUserData);
  }
  return (
    <div className="mycart-products">
      <div className="mycart-product">
        <div className="mycart-product-information">
          <div className="mycart-product-image">
            <img src={girchi} alt="" />
          </div>
          <div>
            <h3>{title}</h3>
            <p>
              {quanitity}x ${price}
            </p>
          </div>
          <div className="R_Side">
            <div className="productcart-close-icon" onClick={removeFromCart}>
              <AiOutlineClose />
            </div>
            <h4>${totalPrice}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
