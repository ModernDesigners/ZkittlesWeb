import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import whiteLogo from "../../images/WhiteLogo.png";
import payment1 from "../../images/payments/mastercard.png";
import payment2 from "../../images/payments/mastercard-1.png";
import payment3 from "../../images/payments/mastercard-2.png";
import payment4 from "../../images/payments/mastercard-3.png";
export default function Footer() {
  return (
    <footer>
      <div className="footer-topside-main">
        <h1>UNLOCK 20% OFF YOUR FIRST ORDER</h1>
        <p>Reveal coupon code by entering your email</p>
        <div className="footer-topside-line"></div>
        <div className="footer-inputs">
          <input type="text" placeholder="Email Adress" />
          <input type="submit" value="Reval coupon" />
        </div>
      </div>
      <Container>
        <div className="footer-main">
          <Row>
            <Col lg={5}>
              <div className="footer-card first-card">
                <img src={whiteLogo} alt="" />
                <p>
                  #1 Canadian top rated online dispensary that meets the
                  customers needs in every single medical marijuana aspect. The
                  team here at TopShelfBC is heavily involved in the Canadian
                  cannabis industry for over 15 years. We strive to provide the
                  top quality products, service and care at the lowest prices
                  you’ll ever find.
                </p>
              </div>
            </Col>

            <Col lg={4}>
              <div className="footer-card">
                <h3>Buy weed online </h3>
                <p>Buy weed online in New Brunswick</p>
                <p>Buy weed online in Prince Edward Island</p>
                <p>Buy weed online in Northwest Territories</p>
                <p>Buy weed online in Saskatchewan</p>
                <div className="footer-payment">
                  <div>
                    <img src={payment1} alt="" />
                  </div>
                  <div>
                    <img src={payment2} alt="" />
                  </div>
                  <div>
                    <img src={payment3} alt="" />
                  </div>
                  <div>
                    <img src={payment4} alt="" />
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={2}>
              <div className="footer-card">
                <h3>MORE </h3>
                <p>Mushrooms</p>
                <p>Promotions / Bundles</p>
                <p>Blog</p>
                <p>Support</p>
                <p>Reward</p>
                <p>Shipping Faq</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="footer-bottom">
          <p>© 2022 Top Shelf BC. All Rights Reserved. </p>
          <div>
            <p>Out Of Stock</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
