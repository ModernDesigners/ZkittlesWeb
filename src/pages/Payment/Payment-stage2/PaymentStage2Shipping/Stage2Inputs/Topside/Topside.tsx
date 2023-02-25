import React from "react";
import "./Topside.css";
export default function Topside() {
  return (
    <>
      <div className="fullname">
        <div>
          <p className="input-p">FIRST NAME *</p>
          <input type="text" className="big-input" />
        </div>

        <div>
          <p className="input-p">FIRST NAME *</p>
          <input type="text" className="big-input" />
        </div>
      </div>
      <div className="country-location">
        <div>
          <p className="input-p">COUNTRY / REGION *</p>
          <input type="text" />
        </div>
        <div>
          <p className="input-p">COUNTRY / REGION *</p>

          <input
            style={{ marginBottom: 23 }}
            type="text"
            placeholder="House number and street name"
          />
          <input
            type="text"
            placeholder="Apartment, suite, unit, etc. (optional)"
          />
        </div>
      </div>
      <div className="more-information">
        <div className="more-information-topside">
          <div>
            <p className="input-p">TOWN / CITY *</p>
            <input type="text" />
          </div>
          <div>
            <p className="input-p">TOWN / CITY *</p>
            <input type="text" />
          </div>
          <div>
            <p className="input-p">TOWN / CITY *</p>
            <input type="text" />
          </div>
        </div>
        <div className="more-information-bottomside">
          <div>
            <p className="input-p">phone optional</p>
            <input type="text" />
          </div>
          <div>
            <p className="input-p">email adress</p>
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  );
}
