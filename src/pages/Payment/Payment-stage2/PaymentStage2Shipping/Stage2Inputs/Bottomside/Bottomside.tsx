import React from "react";
import "./Bottomside.css";
export default function Bottomside() {
  return (
    <>
      <div className="bottomside-checkox">
        <input type="checkbox" id="chkbox" />
        <label htmlFor="chkbox">
          <h4>Ship to a different Adress?</h4>
        </label>
      </div>
      <div>
        <p className="input-p">Order Notes (optional)</p>
        <textarea />
      </div>

      <div>
        <h4>Where did you hear About Us?</h4>
        <textarea placeholder="Notes about your order, e.g. special notes for delivery." />
      </div>
    </>
  );
}
