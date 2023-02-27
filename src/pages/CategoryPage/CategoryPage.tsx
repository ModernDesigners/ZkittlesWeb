import "./CategoryPage.css";

import Truck from "../../images/icons/Truck.png";
import Green from "../../images/icons/Green.png";
import Coin from "../../images/icons/Coin.png";
import Filters from "./components/Filters/Filters";
import Shop from "./components/Shop/Shop";
import { useState } from "react";

export default function CategoryPage() {
  const [filters, setFilters] = useState<boolean>(false);
  return (
    <div className="CategoryPage">
      <div className="Category_Starter">
        <div className="container">
          <div className="col-3 Category_Starter_Option">
            <div className="img_i_block_">
              <img src={Truck} />
            </div>
            Reliable Shipping
            <div className="HeaderLine"></div>
          </div>
          <div className="col-3 Category_Starter_Option">
            <div className="img_i_block_">
              <img src={Green} />
            </div>
            You’re Safe With Us
            <div className="HeaderLine"></div>
          </div>
          <div className="col-3 Category_Starter_Option">
            <div className="img_i_block_">
              <img src={Coin} />
            </div>
            Best Quality & Pricing
          </div>
        </div>
      </div>
      <div className="container">
        <div className="CategoryPageRow">
          <Filters filters={filters} setFilters={setFilters} />
          <Shop filters={filters} setFilters={setFilters} />
        </div>
      </div>
    </div>
  );
}
