import "./ProductInfo.css";
import star_ from "../../../../../images/icons/star.png";
import Addon1 from "../../../../../images/productPage/Addon1.png";
import Addon2 from "../../../../../images/productPage/Addon2.png";
import Addon3 from "../../../../../images/productPage/Addon3.png";

export default function ProductInfo() {
  return (
    <>
      <p>CONCENTRATES</p>
      <h2>Mix And Match Shatter/Budder 28g (4 X 7G)</h2>
      <div className="addons_row">
        <p className="addon_">Indica</p>
        <p className="addon_">Sativa 100%</p>
      </div>
      <div className="price_review_splitter">
        <div className="price">
          <h3>
            <span>$200</span> $59
          </h3>
        </div>
        <div className="review">
          <div className="product-ratingPage">
            <img src={star_} alt="" />

            <h4>4.6/5</h4>
            <div className="sm-line"></div>
            <h4>135</h4>
            <p>Reviews</p>
          </div>
        </div>
      </div>
      <div className="Detail_Addons">
        <div className="Detail_Addon">
          <div className="img_side">
            <img src={Addon1} />
          </div>
          <div className="text_side">
            <p>EFFECTS</p>
            <p className="Get_Addon">
              Calming, Creative, Happy, Relaxing, Sleepy, Uplifting
            </p>
          </div>
        </div>
        <div className="Detail_Addon">
          <div className="img_side">
            <img src={Addon2} />
          </div>
          <div className="text_side">
            <p>MAY RELIEVE</p>
            <p className="Get_Addon">
              Anxiety, Arthritis, Chronic Pain, Depression, Fatigue,
              Inflammation, Insomnia, Irregular Bowel Movements, Migraines, Mood
              Swings
            </p>
          </div>
        </div>
        <div className="Detail_Addon">
          <div className="img_side">
            <img src={Addon3} />
          </div>
          <div className="text_side">
            <p className="Name_Addon">AROMAS</p>
            <p className="Get_Addon">Chemical, Citrus, Earthy, Pungent, Sour</p>
          </div>
        </div>
      </div>
      <p className="p_desc_title">DESCRIPTION</p>
      <p className="p_desc">
        Jungle Diamonds is a slightly indica dominant hybrid strain (60%
        indica/40% sativa) created through crossing the infamous Slurricane X
        Gorilla Glue #4 strains.
      </p>
      <div className="line_Split"></div>
    </>
  );
}
