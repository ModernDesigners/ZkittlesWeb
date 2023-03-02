import { useRef } from "react";
import "./Section3.css";
import googleImage from "../../../../images/google.png";
import { customersFeedbackAPI } from "../../../../api/customersFeedback";
import { Container } from "react-bootstrap";
import StarsCalc from "./components/StarsCalc";
import star from "../../../../images/icons/star.png";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
export default function Section3() {
  let slider3 = useRef<any>(null);
  let sliderRow3 = useRef<any>(null);
  let feedBackCard = useRef<any>(null);

  function rightClick() {
    const scrollW = feedBackCard.current.clientWidth + 30;
    let maxScroll =
      sliderRow3.current.clientWidth - slider3.current.clientWidth;

    if (slider3.current.scrollLeft == maxScroll) {
      slider3.current.scrollLeft = 0;
    } else {
      slider3.current.scrollLeft += scrollW;
    }
  }

  function leftClick() {
    const scrollW = feedBackCard.current.clientWidth + 30;
    if (slider3.current.scrollLeft == 0) {
      slider3.current.scrollLeft = slider3.current.clientWidth;
    } else {
      slider3.current.scrollLeft -= scrollW;
    }
  }
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
          <div className="section3-slider">
            <div className="toLeft" onClick={leftClick}>
              <BsChevronLeft />
            </div>
            <div className="toRight" onClick={rightClick}>
              <BsChevronRight />
            </div>
            <div ref={slider3} className="section3-main-feedbacks">
              <div ref={sliderRow3} className="section3-row">
                {customersFeedbackAPI.map((item) => (
                  <div ref={feedBackCard} className="section3-card">
                    <div className="section3-card-header">
                      <div className="section3-card-user">
                        <img src={item.image} alt="" />
                        <h4>{item.name}</h4>
                      </div>
                      <div className="section3-card-line"></div>
                    </div>
                    <div className="section3-card-text">
                      <div className="stars">
                        <StarsCalc stars={item.stars} maxStars={5} />
                      </div>
                      <h4>{item.feedback}</h4>
                      <p>{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
