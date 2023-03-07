import React, { useEffect } from "react";
import "./PaymentStage2.css";
import { Container } from "react-bootstrap";
import PaymentStage2Shipping from "./components/PaymentStage2Shipping/PaymentStage2Shipping";
import PaymentStage2Checkout from "./components/PaymentStage2Checkout/PaymentStage2Checkout";
interface promocode {
  promocodeDiscount: number;
  setPromocodeDiscount: any;
}
export default function PaymentStage2(props: promocode) {
  let Address = {
    FirstName: "",
    LastName: "",
    Country: "",
    Region: "",
    Region2: "",
    City: "",
    Province: "",
    Zip: "",
    Phone: "",
    Email: "",
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="payment-stage2">
      <Container>
        <div className="payment-stage2-main">
          <div className="payment-stage2-leftside">
            <PaymentStage2Shipping Address={Address} />
          </div>
          <div className="payment-stage2-rightside">
            <PaymentStage2Checkout Address={Address} />
          </div>
        </div>
      </Container>
    </div>
  );
}
