import { useState } from "react";
import "./AlertSale.css";

export default function AlertSale() {
  const [time, setTime] = useState(0);
  const date = new Date();
  {
    setInterval(() => {
      setTime(date.getSeconds());
    }, 1000);
  }

  return (
    <div className="AlertSale">
      <p>LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.</p>
      {date.getHours()} : {date.getMinutes()} :{" "}
      {date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}
    </div>
  );
}
