import React from "react";
import { Col, Row } from "react-bootstrap";
import deliveryIcon1 from "../../../../images/payment-page/delivery1.png";
import deliveryIcon2 from "../../../../images/payment-page/delivery2.png";
import deliveryIcon3 from "../../../../images/payment-page/delivery3.png";
import "./PaymentDelivery.css";
export default function PaymentDelivery() {
  return (
    <div className="payment-delivery">
      <div className="payment-delivery-header">
        <h4>Delivery</h4>
        <h4>Free Returns</h4>
      </div>

      <div className="payment-delivery-cards">
        <Row>
          <DeliveryCard
            icon={deliveryIcon1}
            title="Order by 10pm Orders overs $100"
            description="We deliver Monday to Saturday - excluding Holidays  return it to us for a refund  return it to us for a refund"
          />

          <DeliveryCard
            icon={deliveryIcon2}
            title="Order on Orders overs $100"
            description="30 days to return it to us for a refund. We have made returns SO EASY - you can now return your order to a store or send it with FedEx FOR FREE"
          />

          <DeliveryCard
            icon={deliveryIcon3}
            title="Free next day delivery to stores."
            description="Home delivery is $4.99 for orders under $100 and is FREE for all orders over $100"
          />
        </Row>
      </div>
    </div>
  );
}
interface DeliveryInterface {
  icon: string;
  title: string;
  description: string;
}
function DeliveryCard({ icon, title, description }: DeliveryInterface) {
  return (
    <Col lg={4}>
      <div className="payment-delivery-card">
        <div className="delivery-card-icon">
          <img src={icon} alt="" />
        </div>
        <div className="delivery-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
}
