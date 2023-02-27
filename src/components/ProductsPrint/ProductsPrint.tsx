import React from "react";
import Products from "../../api/products";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductsPrint(props: { count: number }) {
  let countRender = 0;
  let getRenders: any;

  return (
    <>
      {Products.map((item, index) =>
        index < props.count ? (
          <ProductCard
            key={index}
            id={item.id}
            image={item.image}
            type={item.type}
            name={item.name}
            star={item.star}
            reviews={item.reviews}
            optional_addon={item.optional_addon}
            price={item.price}
            old_price={item.old_price}
            sizes={item.sizes}
            in_stock={item.in_stock}
          />
        ) : (
          ""
        )
      )}
    </>
  );
}
