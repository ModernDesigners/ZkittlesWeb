import React from "react";
import "./Section9.css";
import { Container, Row } from "react-bootstrap";
import Section9Card from "./Section9Card";
import img1 from "../../../../images/section9-card1.png";

import img2 from "../../../../images/section9-card2.png";

import img3 from "../../../../images/section9-card3.png";

export default function Section9() {
  return (
    <section className="section9">
      <Container>
        <div className="section9-header">
          <h2>WEED EDUCATION</h2>
        </div>
        <div className="section9-cards">
          <Row>
            <Section9Card
              image={img1}
              date="January 24, 2023"
              title="12 Mistakes To Avoid When Buying Cannabis Online"
              description="Buying cannabis online can be a great way to get your hands on the products you need without leaving the comfort of your home. But …"
            />

            <Section9Card
              image={img2}
              date="January 24, 2023"
              title="12 Mistakes To Avoid When Buying Cannabis Online"
              description="Buying cannabis online can be a great way to get your hands on the products you need without leaving the comfort of your home. But …"
            />

            <Section9Card
              image={img3}
              date="January 24, 2023"
              title="12 Mistakes To Avoid When Buying Cannabis Online"
              description="Buying cannabis online can be a great way to get your hands on the products you need without leaving the comfort of your home. But …"
            />
          </Row>
        </div>
      </Container>
    </section>
  );
}
