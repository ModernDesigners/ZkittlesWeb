import React, { createContext, useContext, useRef, useState } from "react";
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
import { Route, Routes } from "react-router-dom";

export const myUser = createContext<any>({});

function App() {
  const myCart = useRef<any>(null);
  const darkScreen = useRef<any>(null);

  const userInfo = {
    name: "Luka",
    mail: "ModernDesignGe@gmail.com",
    cart: [
      {
        productAmount: 111,
        productId: 4,
      },
      {
        productAmount: 1,
        productId: 2,
      },
    ],
  };

  const [User, setUser] = useState<object>(userInfo);

  return (
    <div className="App">
      <>
        <myUser.Provider value={{ data: User, setUser: setUser }}>
          <MarginNav />
          <MyCart myCart={myCart} darkScreen={darkScreen} User={User} />
          <HeaderNav myCart={myCart} darkScreen={darkScreen} />
          <Routes>
            <Route path="/">
              <Route index element={<Home myCart={myCart} />} />
              <Route path="Home" element={<Home myCart={myCart} />} />
              <Route path="Payment" element={<Payment />} />
              <Route path="Product/:id" element={<ProductPage />} />
            </Route>
          </Routes>
          <Footer />
        </myUser.Provider>
      </>
    </div>
  );
}

export default App;
