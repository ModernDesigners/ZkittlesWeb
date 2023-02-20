import React from "react";
import "./Section3.css";
import googleImage from "../../../../images/google.png";
import star from "../../../../images/icons/star.png";
import starAlt from "../../../../images/icons/starAlt.png";
import user from "../../../../images/users/Avatar1.png";
import { Container } from "react-bootstrap";

export default function Section3() {
  return (
    <section className="section3">
      <Container>
        <h1 className="section3-headerh1">CUSTOMER TESTIMONAILS</h1>
        <div className="section3-main">
          <div className="section3-leftside-card">
            <h2>VOTED BEST ONLINE DISPENSARY IN CANADA</h2>
            <div className="section3-line"></div>
            <img src={googleImage} alt="" />
            <h3>EXELLENCET</h3>

            <div className="section3-leftside-rating">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <div className="section3-small-line"></div>
              <h3>on 135 </h3>
              <p>Reviews</p>
            </div>
          </div>
          <div className="section3-card">
            <div className="section3-card-header">
              <div className="section3-card-user">
                <img src={user} alt="" />
                <h4>Vikki Starr</h4>
              </div>
              <div className="section3-card-line"></div>
            </div>
            <div className="section3-card-text">
              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={starAlt} alt="" />
              </div>
              <h4>
                Absolutely love TopShelfBC; affordable on any budget and such
                fast delivery, straight to my door! I recommend them to all my
                friends and family for their 420 needs.
              </h4>
              <p>January 15, 2023</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
