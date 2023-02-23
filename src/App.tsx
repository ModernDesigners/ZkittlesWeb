import React, { useRef } from "react";
import AlertSale from "./components/AlertSale/AlertSale";
import Footer from "./components/Footer/Footer";
import HeaderNav from "./components/Header/HeaderNav";
import MyCart from "./components/MyCart/MyCart";
import "./container.css";
import "./index.css";

import {
  Section,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
} from "./pages/Homepage/Components";
import ProductPage from "./pages/ProductPage/ProductPage";
function App() {
  const myCart = useRef<any>(null);
  return (
    <div className="App">
      <>
        <MyCart myCart={myCart} />
        <HeaderNav myCart={myCart} />
        <Section />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Footer />
      </>
    </div>
  );
}

export default App;
