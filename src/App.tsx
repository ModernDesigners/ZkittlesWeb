import React, { useRef } from "react";
import AlertSale from "./components/AlertSale/AlertSale";
import Footer from "./components/Footer/Footer";
import MarginNav from "./components/Header/components/MarginNav";
import HeaderNav from "./components/Header/HeaderNav";
import MyCart from "./components/MyCart/MyCart";
import "./container.css";
import "./index.css";

import Home from "./pages/Homepage/Home";
import Payment from "./pages/Payment/Payment";
import ProductPage from "./pages/ProductPage/ProductPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
function App() {
  const myCart = useRef<any>(null);
  const darkScreen = useRef<any>(null);
  return (
    <div className="App">
      <>
        <MarginNav />
        <MyCart myCart={myCart} darkScreen={darkScreen} />
        <HeaderNav myCart={myCart} darkScreen={darkScreen} />
        <CategoryPage />
        <Footer />
      </>
    </div>
  );
}

export default App;
