import React from "react";
import AlertSale from "./components/AlertSale";
import HeaderNav from "./components/Header/HeaderNav";

import "./container.css";
import "./index.css";

import {
  Section,
  Section1,
  Section2,
  Section3,
} from "./pages/Homepage/Components";
function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
