import React from "react";
import "./Section8.css";
import { Container, Row } from "react-bootstrap";
import Section8Card from "./Section8Card";
import image1 from "../../../../images/s8-image1.png";
import image2 from "../../../../images/s8-image2.png";

export default function Section8() {
  return (
    <section className="section8">
      <Container>
        <div className="section8-line"></div>
        <div className="section8-cards">
          <Row>
            <Section8Card
              link="Show Indica"
              title="Indica"
              description="This type of cannabis is commonly taken by those who want to sink into a state of total relaxation in every limb. This reduces stress overall and can take your worries and fatigue away. Because of its relaxing effects, it is suggested to use this type of cannabis at night. It is particularly recommended for people who have trouble sleeping, be it due to insomnia, pain or other associated sleep issues."
              image={image1}
            />
            <Section8Card
              link="Show Sativa"
              title="Sativa"
              description="This type of cannabis is commonly taken by those who want to sink into a state of total relaxation in every limb. This reduces stress overall and can take your worries and fatigue away. Because of its relaxing effects, it is suggested to use this type of cannabis at night. It is particularly recommended for people who have trouble sleeping, be it due to insomnia, pain or other associated sleep issues."
              image={image1}
            />
            <Section8Card
              link="Show Hybrids"
              title="Hybrids"
              description="This type of cannabis is commonly taken by those who want to sink into a state of total relaxation in every limb. This reduces stress overall and can take your worries and fatigue away. Because of its relaxing effects, it is suggested to use this type of cannabis at night. It is particularly recommended for people who have trouble sleeping, be it due to insomnia, pain or other associated sleep issues."
              image={image2}
            />
          </Row>
        </div>
      </Container>
    </section>
  );
}
