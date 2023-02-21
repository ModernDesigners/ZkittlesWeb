import React from "react";
import "./Section5.css";
import { Container, Row, Col } from "react-bootstrap";
import { S5CardAPI } from "../../../../api/s5card";
import s5image from "../../../../images/section5card.png";
export default function Section5() {
  return (
    <section className="section5">
      <Container>
        <div className="section5-main">
          <div className="section5-header">
            <h1>
              HOW TO ORDER WEED ONLINE FROM TOP SHELF BC - MAIL ORDER MARIJUANA
            </h1>
            <p>
              Ordering weed online from Top Shelf BC is easy. We are proud to
              have made the process accessible across multiple platforms and
              simple to understand, meaning that more people can come to us to
              buy their cannabis products online.
            </p>
          </div>
          <div className="section5-cards">
            <Row>
              {S5CardAPI.map((e) => (
                <Col lg={6} md={6} sm={6}>
                  <div className="section5-card">
                    <div className="section5-card-image">
                      <img src={s5image} alt="" />
                      <div className="section5-id">
                        <p>{e.id}</p>
                      </div>
                    </div>
                    <div className="section5-card-text">
                      <h3>{e.title}</h3>
                      <p>{e.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
}
