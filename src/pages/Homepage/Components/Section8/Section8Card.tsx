import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
interface Section8CardInterface {
  title: string;
  image: string;
  description: string;
  link: string;
}
export default function Section8Card({
  title,
  description,
  image,
  link,
}: Section8CardInterface) {
  return (
    <Col lg={4} md={12}>
      <div className="section8-card">
        <div className="section8-card-image">
          <img src={image} alt="" />
        </div>
        <div className="section8-card-text">
          <h2>{title}</h2>
          <p>{description}</p>
          <Link to={"/"}>{link}</Link>
        </div>
      </div>
    </Col>
  );
}
