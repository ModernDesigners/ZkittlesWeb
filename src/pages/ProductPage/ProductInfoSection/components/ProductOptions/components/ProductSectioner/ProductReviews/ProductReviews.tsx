import "./ProductReviews.css";
import avatar1 from "../../../../../../../../images/users/Avatar1.png";
import avatar2 from "../../../../../../../../images/users/Avatar2.png";
import star from "../../../../../../../../images/icons/star.png";
import star_ from "../../../../../../../../images/icons/starAlt.png";
import starB_ from "../../../../../../../../images/icons/starAltB.png";
export default function ProductReviews() {
  return (
    <div className="ReviewCards">
      <div className="ReviewCard">
        <div className="ReviewCardStarter">
          <img src={avatar1} />
          <p>
            Vikki Starr <span>January 15, 2023</span>
          </p>
        </div>
        <div className="line_Split"></div>
        <div className="ReviewCardStars">
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star_} />
        </div>
        <div className="ReviewCardContent">
          Absolutely love TopShelfBC; affordable on any budget and such fast
          delivery, straight to my door! I recommend them to all my friends and
          family for their 420 needs.
        </div>
      </div>
      <div className="ReviewCard">
        <div className="ReviewCardStarter">
          <img src={avatar2} />
          <p>
            Terry Baskey <span>January 15, 2023</span>
          </p>
        </div>
        <div className="line_Split"></div>
        <div className="ReviewCardStars">
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
        </div>
        <div className="ReviewCardContent">
          Best damn place to buy your canabis at great prices
        </div>
      </div>
      <div className="showMoreCards">Show More</div>
      <div className="line_Split"></div>
      <div className="WriteReview">
        <p className="WriteReviewHead">Add A Review</p>
        <p className="WriteReviewRating">
          Your rating <span>:</span>
          <img src={starB_} />
          <img src={starB_} />
          <img src={starB_} />
          <img src={starB_} />
          <img src={starB_} />
        </p>
        <p className="WriteReviewRev">
          Your Review <span>*</span>
        </p>
        <textarea placeholder="Enter your review"></textarea>
        <button>Submit</button>
      </div>
    </div>
  );
}
