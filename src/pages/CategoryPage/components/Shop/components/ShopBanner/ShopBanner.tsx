import "./ShopBanner.css";
import star_ from "../../../../../../images/icons/star.png";
import arrowLeft from "../../../../../../images/icons/arrow-leftAlt.png";
import arrowRight from "../../../../../../images/icons/arrow-rightAlt.png";
import Packet1 from "../../../../../../images/Products/Packet1.png";
import Packet2 from "../../../../../../images/Products/Packet2.png";
import Packet3 from "../../../../../../images/Products/Packet3.png";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useRef, useState } from "react";

export default function ShopBanner() {
  let getSlider = useRef<any>();
  let activeInd = useRef<number>(1);
  const [slideInd, activeSlideInd] = useState(1);

  function leftSlide() {
    if (getSlider.current.scrollLeft == 0) {
      activeInd.current = 3;
      activeSlideInd(activeInd.current);
      getSlider.current.scrollLeft = getSlider.current.clientWidth + 340;
    } else {
      getSlider.current.scrollLeft -= 340;
      activeInd.current--;
      activeSlideInd(activeInd.current);
    }
  }
  function rightSlide() {
    if (getSlider.current.scrollLeft > getSlider.current.clientWidth) {
      activeInd.current = 1;
      activeSlideInd(activeInd.current);
      getSlider.current.scrollLeft = 0;
    } else {
      getSlider.current.scrollLeft += 340;
      activeInd.current++;
      activeSlideInd(activeInd.current);
    }
  }
  function setIndIndex(index: number) {
    activeInd.current = index;
    activeSlideInd(activeInd.current);
    getSlider.current.scrollLeft = 340 * (index - 1);
  }

  return (
    <div className="ShopBanner">
      <div className="InfoProd col-6">
        <p>CONCENTRATES</p>
        <h2>Mix And Match Shatter/Budder 28g (4 X 7G)</h2>
        <div className="review">
          <div className="product-ratingPage">
            <img src={star_} alt="" />

            <h4>4.6/5</h4>
            <div className="sm-line"></div>
            <h4>135</h4>
            <p>Reviews</p>
          </div>
        </div>
        <div className="options">
          <div className="option">28g</div>
          <div className="option">1/2lb</div>
          <div className="option">1/4lb</div>
        </div>
        <div className="addCart_Price">
          <button>Add to Cart</button>
          <div className="price">
            $102.00 <span>$200.00</span>
          </div>
        </div>
      </div>
      <div className="SliderProd col-6">
        <div className="SliderShop">
          <div className="toLeftImageSlider" onClick={leftSlide}>
            <img src={arrowLeft} />
          </div>
          <div className="toRightImageSlider" onClick={rightSlide}>
            <img src={arrowRight} />
          </div>
          <div ref={getSlider} className="SliderImages">
            <img src={Packet1} />
            <img src={Packet2} />
            <img src={Packet3} />
          </div>
        </div>

        <div className="SliderIndicator">
          <div
            onClick={() => setIndIndex(1)}
            className={`SliderInd ${slideInd == 1 ? "SliderIndActive" : ""}`}
          >
            <div className="ING"></div>
          </div>
          <div
            onClick={() => setIndIndex(2)}
            className={`SliderInd ${slideInd == 2 ? "SliderIndActive" : ""}`}
          >
            <div className="ING"></div>
          </div>
          <div
            onClick={() => setIndIndex(3)}
            className={`SliderInd ${slideInd == 3 ? "SliderIndActive" : ""}`}
          >
            <div className="ING"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
