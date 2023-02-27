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

export const MyUser = createContext<any>({});

function App() {
  const myCart = useRef<any>(null);
  const darkScreen = useRef<any>(null);

  const userInfo = {
    name: "Luka",
    mail: "ModernDesignGe@gmail.com",
    cart: [],
  };

  const [User, setUser] = useState<object>(userInfo);

  // const MyUser = useContext<any>(MyUserContext);
  return (
    <div className="App">
      <>
        <MyUser.Provider value={{ data: User, setUser: setUser }}>
          <MarginNav />
          <MyCart myCart={myCart} darkScreen={darkScreen} />
          <HeaderNav myCart={myCart} darkScreen={darkScreen} />
          <ProductPage />
          <Footer />
        </MyUser.Provider>
      </>
    </div>
  );
}

export default App;
