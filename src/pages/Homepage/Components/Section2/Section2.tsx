import "./Section2.css";
import girchi from "../../../../images/girchi.png";
// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import ProductCard from "../../../../components/ProductCard/ProductCard";
import Products from "../../../../api/products";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useEffect, useRef } from "react";

export default function Section2() {
  let slider = useRef<any>(null);
  let sliderRow = useRef<any>(null);
  let productCard = useRef<any>(null);

  function rightClick() {
    const scrollW = productCard.current.clientWidth + 30;
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
    const scrollW = productCard.current.clientWidth + 30;
    if (slider.current.scrollLeft == 0) {
      slider.current.scrollLeft = slider.current.clientWidth;
    } else {
      slider.current.scrollLeft -= scrollW;
    }
  }

  return (
    <section className="section2">
      <div className="section2-header">
        <h1>BEST DISPENSARY TO BUY WEED ONLINE IN CANADA</h1>
        <div className="section2-filter">
          <div>
            <p>Best Sellers</p>
          </div>
          <div>
            <p>Bundles & Promotions</p>
          </div>
          <div>
            <p>On Sale</p>
          </div>
        </div>
      </div>
      <Container>
        <div className="section2-main">
          <div className="section2-leftsidecard">
            <div className="section2-leftsidecard-image">
              <img src={girchi} alt="" />
              <div className="section2-leftside-whitebg"></div>
            </div>
            <div className="section2-leftsidecard-text">
              <h3>Shop our Best Sellers</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius
                lorem blandit lectus magnis feugiat.
              </p>
              {/* <Link to={"/"}>Veiw All</Link> */}
            </div>
          </div>
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
      </Container>
    </section>
  );
}
