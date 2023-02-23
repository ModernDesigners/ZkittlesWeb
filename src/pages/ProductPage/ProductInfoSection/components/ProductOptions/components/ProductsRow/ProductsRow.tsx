import "./ProductsRow.css";
import girchi from "../../../../images/girchi.png";
import Products from "../../../../../../../api/products";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useRef } from "react";
import ProductCard from "../../../../../../../components/ProductCard/ProductCard";

export default function ProductsRow() {
  let slider = useRef<any>(null);
  let sliderRow = useRef<any>(null);
  let productCard = useRef<any>(null);

  function rightClick() {
    const scrollW = productCard.current.clientWidth + 50;
    let maxScroll = sliderRow.current.clientWidth - slider.current.clientWidth;

    if (slider.current.scrollLeft == maxScroll) {
      slider.current.scrollLeft = 0;
    } else if (
      slider.current.scrollLeft >
      slider.current.clientWidth - scrollW
    ) {
      slider.current.scrollLeft = slider.current.clientWidth;
    } else {
      slider.current.scrollLeft += scrollW;
    }
  }

  function leftClick() {
    const scrollW = productCard.current.clientWidth + 50;
    if (slider.current.scrollLeft == 0) {
      slider.current.scrollLeft = slider.current.clientWidth;
    } else {
      slider.current.scrollLeft -= scrollW;
    }
  }

  return (
    <div className="ProductsRow Get_Push_Down">
      <p className="starter">Featured Product</p>
      <div className="ProductsRowwer">
        <div className="section2-products-main-slider">
          <div className="toLeft" onClick={leftClick}>
            <BsChevronLeft />
          </div>
          <div className="toRight" onClick={rightClick}>
            <BsChevronRight />
          </div>
          <div ref={slider} className="section2-products-main">
            <div ref={sliderRow} className="section2-products-main-row">
              {Products.map((item, index) => (
                <ProductCard
                  reffer={productCard}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
