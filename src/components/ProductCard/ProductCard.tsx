import React from "react";
import girchi from "../../images/girchi.png";
import star_ from "../../images/icons/star.png";

import "./productcard.css";

interface ProductCard {
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
  let opt_show = 0;

  if (optional_addon == "" || optional_addon.length == 0) {
    opt_show = 0;
  } else {
    opt_show = 1;
  }

  return (
    <div className="product-card">
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
                ${price} <span>/ gram</span>
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
          <button className="add-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
