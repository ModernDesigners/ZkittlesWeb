import React from "react";
import { Col } from "react-bootstrap";
interface Section1CardInterface {
  img: string;
  title: string;
  description: string;
}
export default function Section1Card({
  img,
  title,
  description,
}: Section1CardInterface) {
  return (
    <Col lg={4} md={12}>
      <div className="section1card-main">
        <div className="section1card-image">
          <img src={img} alt="" />
        </div>
        <div className="section1card-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
}
