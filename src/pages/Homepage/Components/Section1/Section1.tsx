import React from "react";
import "./Section1.css";
import { Container, Row } from "react-bootstrap";
import Section1Card from "./Section1Card";
import TruckImage from "../../../../images/icons/Truck.png";
import GreenImage from "../../../../images/icons/Green.png";
import CoinImage from "../../../../images/icons/Coin.png";

export default function Section1() {
  return (
    <section className="section1">
      <Container>
        <Row>
          <Section1Card
            img={TruckImage}
            title="Reliable Shipping"
            description="Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!"
          />

          <Section1Card
            img={GreenImage}
            title="You’re Safe With Us"
            description="Our secure payment system accepts the most common forms of payments making the checkout process quicker! The payments we accept are debit, all major credit cards, and cryptocurrency."
          />

          <Section1Card
            img={CoinImage}
            title="Best Quality & Pricing"
            description="Here at Green Society, we take pride in the quality of our products and service. Our prices are set to ensure you receive your medication at a reasonable price and safely"
          />
        </Row>
      </Container>
    </section>
  );
}
