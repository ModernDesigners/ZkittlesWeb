import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
interface Section9CardInterface {
  title: string;
  description: string;
  image: string;
  date: string;
}
export default function Section9Card({
  image,
  description,
  date,
  title,
}: Section9CardInterface) {
  return (
    <Col lg={4} md={12}>
      <div className="section9-card">
        <div className="section9-card-image">
          <img src={image} alt="" />
        </div>
        <div className="section9-card-text">
          <p>{date}</p>
          <h2>{title}</h2>
          <p>{description}</p>
          <Link to={"/"}>Read More</Link>
        </div>
      </div>
    </Col>
  );
}
