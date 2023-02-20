import "./Section2.css";
import girchi from "../../../../images/girchi.png";
// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import ProductCard from "../../../../components/ProductCard/ProductCard";
import Products from "../../../../api/products";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function Section2() {
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
          <div className="section2-products-main">
            <div className="toLeft">
              <BsChevronLeft />
            </div>
            <div className="toRight">
              <BsChevronRight />
            </div>
            {Products.map((item, index) => (
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
                sizes={item.sizes}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
