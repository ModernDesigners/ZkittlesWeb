import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Section6.css";
import img from "../../../../images/icons/Home/carbon_security.png";
import { s6card } from "../../../../api/s6card";

export default function Section6() {
  return (
    <section className="section6">
      <Container>
        <div className="section6-main">
          <div className="section6-header">
            <h1>
              WHAT MAKES US THE <span>#1</span> ONLINE MARIJUANA DISPENSARY IN
              CANADA?
            </h1>
            <p>
              When it comes to what makes us the foremost online marijuana
              dispensary in Canada, we could wax lyrical about our positive
              qualities. Instead, to make this information clearer, we’ve
              highlighted the six prioritized features that we feel makes us a
              cut above the rest.
            </p>
          </div>
          <div className="section6-cards">
            <Row>
              {s6card.map((e) => (
                <Col lg={4}>
                  <div className="section6-card">
                    <img src={e.image} alt="" />
                    <div className="section6-card-text">
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
