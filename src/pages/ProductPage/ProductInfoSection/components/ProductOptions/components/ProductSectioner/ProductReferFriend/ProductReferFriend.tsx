import "./ProductReferFriend.css";
import copyIcon from "../../../../../../../../images/icons/copy.png";
import facebook from "../../../../../../../../images/icons/facebook.png";
import twitter from "../../../../../../../../images/icons/twitter.png";
import whatsapp from "../../../../../../../../images/icons/whatsapp.png";
import addPlus from "../../../../../../../../images/icons/add.png";

export default function ProductReferFriend() {
  return (
    <div className="ProductReferFriend">
      <div className="ReferStarter">
        <p className="start">Referral Program</p>
        <p className="desc">
          Absolutely love TopShelfBC; affordable on any budget and such fast
          delivery, straight to my door! I recommend them to all my friends and
          family for their 420 needs.
        </p>
      </div>
      <div className="line_Split"></div>
      <div className="refferalUrlBlock">
        <div className="lineB"></div>
        <div className="content">
          <p className="start">Your Referral URL</p>
          <p className="desc">
            Referral code is available only to users with at least one order.
          </p>
        </div>
        <div className="copyUrl">
          <img src={copyIcon} />
        </div>
      </div>
      <div className="refferalUrlBlock">
        <div className="lineB"></div>
        <div className="content">
          <p className="start">Your Coupon Code to share</p>
          <p className="desc">
            Referral code is available only to users with at least one order.
          </p>
        </div>
        <div className="copyUrl">
          <img src={copyIcon} />
        </div>
      </div>
      <div className="line_Split"></div>
      <div className="socialRow">
        <div className="socialBlock">
          <div className="img_block fbb">
            <img src={facebook} />
          </div>
          <p>Share Via Facebook</p>
        </div>
        <div className="socialBlock">
          <div className="img_block tbb">
            <img src={twitter} />
          </div>
          <p>Share Via Facebook</p>
        </div>
        <div className="socialBlock">
          <div className="img_block wbb">
            <img src={whatsapp} />
          </div>
          <p>Share Via Facebook</p>
        </div>
      </div>
      <p className="ligher">Or share via email</p>
      <div className="inpRowwer inpRw1">
        <div className="labelInp">
          <p className="label">Email</p>
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="labelInp">
          <p className="label">Name</p>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="addPlus">
          <img src={addPlus} />
        </div>
      </div>
      <div className="inpRowwer">
        <div className="labelInp">
          <input
            type="text"
            placeholder="Enter your email"
            value="johndoe@example.com"
          />
        </div>
        <div className="labelInp">
          <input type="text" placeholder="Enter your name" value="John Doe" />
        </div>
      </div>
      <button className="sendMailButton">Send Emails</button>
    </div>
  );
}
