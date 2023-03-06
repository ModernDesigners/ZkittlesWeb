import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import girchi from "../../images/girchi.png";
import star_ from "../../images/icons/star.png";
import { myUser } from "../../App";
import "./productcard.css";

interface ProductCard {
  reffer?: any;
  id: number;
  image: string;
  type: string;
  name: string;
  star: number;
  reviews: number;
  optional_addon: string;
  price: number;
  sizes: string[];
  old_price?: string;
  in_stock: boolean;
}

export default function ProductCard({
  reffer,
  id,
  image,
  type,
  name,
  star,
  reviews,
  optional_addon,
  price,
  sizes,
  old_price,
  in_stock,
}: ProductCard) {
  const addCardButtons: any = useRef(0);
  const [productGet, setProductGet] = useState(1);
  useEffect(() => {
    addCardButtons.current.classList.add("adding");
    let stm = setTimeout(() => {
      addCardButtons.current.classList.remove("adding");
    }, 400);
    return () => {
      clearTimeout(stm);
    };
  }, [productGet]);
  let opt_show = 0;

  if (optional_addon == "" || optional_addon.length == 0) {
    opt_show = 0;
  } else {
    opt_show = 1;
  }

  const User = useContext(myUser);

  function buttonLock() {
    setProductGet(productGet + 1);
  }

  function addCard() {
    buttonLock();

    const newUser = { ...User.data };
    let DelInd = newUser.cart.findIndex((item: any) => item.productId == id);
    let thisProduct: any;
    if (DelInd !== -1) {
      thisProduct = {
        productId: id,
        productAmount: newUser.cart[DelInd].productAmount + 1,
      };
      newUser.cart.splice(DelInd, 1);
    } else {
      thisProduct = {
        productId: id,
        productAmount: 1,
      };
    }
    newUser.cart.push(thisProduct);
    User.setUser(newUser);
  }

  return (
    <div ref={reffer} className="product-card">
      <div className="product-card-image">
        <img src={girchi} alt="" />
        <div className="product-card-whitebg"></div>
        {in_stock ? null : (
          <div className="out-of-stock">
            <p>Out Of Stock</p>
          </div>
        )}
      </div>
      <div className="product-text">
        <div className="product-text-header">
          <p>{type}</p>
          <h3>{name}</h3>
          <div className="product-rating">
            <img src={star_} alt="" />

            <h4>{star}/5</h4>
            <div className="sm-line"></div>
            <h4>{reviews}</h4>
            <p>Reviews</p>
          </div>
          <div className="sativa-procentage">
            {opt_show ? <p>{optional_addon}</p> : ""}
          </div>
        </div>
        <div className="product-text-middle">
          <h3>
            {old_price ? (
              <>
                <span>{old_price}</span> ${price}
              </>
            ) : (
              <>
                ${price} <span className="gramSpan">/ gram</span>
              </>
            )}
          </h3>
          <div className="product-weights">
            {sizes.map((item, index) => (
              <div key={index}>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <button className="add-cart" ref={addCardButtons} onClick={addCard}>
            Add to Cart
          </button>
          <Link to={"/ZkittlesWeb/Product/" + id}>
            <button className="see_Details">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
