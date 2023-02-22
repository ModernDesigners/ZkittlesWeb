import React, { useState } from "react";
import "./Section7.css";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../../../../components/ProductCard/ProductCard";
import Products from "../../../../api/products";
export default function Section7() {
  const [activeId, setActiveId] = useState<number>(0);
  const setActive = (id: number) => {
    setActiveId(id);
  };
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
  return (
    <section className="section7">
      <Container>
        <div className="section7-main">
          <div className="section7-header">
            <h1>RECENTLY ADDED</h1>
            <div className="section7-filter">
              <div className="section7-filter-list">
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
              <p className="showall">Show All</p>
            </div>
          </div>
          <div className="section7-cards">
            <Row>
              {Products.slice(0, 4).map((item, index) => (
                <Col lg={3} md={6} sm={12}>
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
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
}
