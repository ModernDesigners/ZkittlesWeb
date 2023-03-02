import React from "react";
import "./Topside.css";
export default function Topside(props: { Address: any }) {
  return (
    <>
      <div className="fullname">
        <div>
          <p className="input-p">FIRST NAME *</p>
          <input
            type="text"
            onChange={(e) => (props.Address.FirstName = e.target.value)}
            className="big-input"
          />
        </div>

        <div>
          <p className="input-p">LAST NAME *</p>
          <input
            type="text"
            onChange={(e) => (props.Address.LastName = e.target.value)}
            className="big-input"
          />
        </div>
      </div>
      <div className="country-location">
        <div>
          <p className="input-p">COUNTRY / REGION *</p>
          <input
            type="text"
            onChange={(e) => (props.Address.Country = e.target.value)}
          />
        </div>
        <div>
          <p className="input-p">COUNTRY / REGION *</p>

          <input
            style={{ marginBottom: 23 }}
            type="text"
            onChange={(e) => (props.Address.Region = e.target.value)}
            placeholder="House number and street name"
          />
          <input
            type="text"
            onChange={(e) => (props.Address.Region2 = e.target.value)}
            placeholder="Apartment, suite, unit, etc. (optional)"
          />
        </div>
      </div>
      <div className="more-information">
        <div className="more-information-topside">
          <div>
            <p className="input-p">TOWN / CITY *</p>
            <input
              type="text"
              onChange={(e) => (props.Address.City = e.target.value)}
            />
          </div>
          <div>
            <p className="input-p">Province *</p>
            <input
              type="text"
              onChange={(e) => (props.Address.Province = e.target.value)}
            />
          </div>
          <div>
            <p className="input-p">Postcode / ZIP *</p>
            <input
              type="text"
              onChange={(e) => (props.Address.Zip = e.target.value)}
            />
          </div>
        </div>
        <div className="more-information-bottomside">
          <div>
            <p className="input-p">phone optional</p>
            <input
              type="text"
              onChange={(e) => (props.Address.Phone = e.target.value)}
            />
          </div>
          <div>
            <p className="input-p">email address</p>
            <input
              type="text"
              onChange={(e) => (props.Address.Email = e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
