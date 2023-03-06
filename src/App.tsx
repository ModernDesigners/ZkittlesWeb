import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
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
import { Route, Routes, useLocation } from "react-router-dom";
import PaymentStage1 from "./pages/Payment/Payment-stage1/PaymentStage1";
import PaymentStage2 from "./pages/Payment/Payment-stage2/PaymentStage2";
import PaymentStage3 from "./pages/Payment/Payment-stage3/PaymentStage3";

export const myUser = createContext<any>({});

function App() {
  let routePath = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [routePath]);
  const myCart = useRef<any>(null);
  const darkScreen = useRef<any>(null);

  const userInfo = {
    name: "Luka",
    mail: "ModernDesignGe@gmail.com",
    points: 250,
    coupons: [],
    cart: [],
    address: [],
  };

  const [User, setUser] = useState<object>(userInfo);
  const [promocodeDiscount, setPromocodeDiscount] = useState(0);

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
              <Route path="Payment">
                <Route
                  path="Stage1"
                  element={
                    <PaymentStage1
                      promocodeDiscount={promocodeDiscount}
                      setPromocodeDiscount={setPromocodeDiscount}
                    />
                  }
                />
                <Route
                  path="Stage2"
                  element={
                    <PaymentStage2
                      promocodeDiscount={promocodeDiscount}
                      setPromocodeDiscount={setPromocodeDiscount}
                    />
                  }
                />
                <Route
                  path="Stage3"
                  element={
                    <PaymentStage3
                      promocodeDiscount={promocodeDiscount}
                      setPromocodeDiscount={setPromocodeDiscount}
                    />
                  }
                />
              </Route>
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
