import React, { useState } from "react";
import "./Section4.css";
import Products from "../../../../api/products";
import ProductCard from "../../../../components/ProductCard/ProductCard";
import { Row, Col, Container } from "react-bootstrap";

export default function Section4() {
  const [activeId, setActiveId] = useState<number>(0);

  const filterAPI = [
    {
      title: "Shop All Weed",
      id: 0,
    },
    {
      title: "Flowers",
      id: 1,
    },

    {
      title: "Mushrooms",
      id: 2,
    },

    {
      title: "Concentrate",
      id: 3,
    },

    {
      title: "Edibles",
      id: 4,
    },
  ];
  const setActive = (id: number) => {
    setActiveId(id);
  };
  return (
    <section className="section4">
      <Container>
        <div className="section4-header">
          <h1>CHOOSE YOUR WEED</h1>
          <div className="section4-filter">
            <h3>Filter by Interest</h3>
            {filterAPI.map((e) => (
              <div
                onClick={() => setActive(e.id)}
                className={activeId === e.id ? "active" : ""}
              >
                <p>{e.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="section4-main">
          <Row>
            {Products.map((item, index) => (
              <Col lg={3} md={6}>
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
                />
              </Col>
            ))}
          </Row>
        </div>
        <div className="section4-footer">
          <div>
            <h1>REFER A FRIENDS</h1>
            <h3>
              And get <span>$30!</span>
            </h3>
          </div>
          <div>
            <button>Refer Here</button>
          </div>
        </div>
      </Container>
    </section>
  );
}
