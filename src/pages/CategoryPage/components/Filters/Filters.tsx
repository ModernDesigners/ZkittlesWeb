import { useState } from "react";
import StarsCalc from "../../../Homepage/Components/Section3/components/StarsCalc";
import "./Filters.css";

export default function Filters() {
  const [minInput, setMinInput] = useState(0);
  const [maxInput, setMaxInput] = useState(50000);
  const [activeSelector, setActiveSelector] = useState<null | number>(null);
  const [orderBy, setOrderBy] = useState<null | number>(0);
  const [stars, setStars] = useState<null | number>(null);
  const SelectorsAPI = [
    { name: "Sales", number: 12 },
    { name: "Cannabis", number: 430 },
    { name: "Pre-Rolls", number: 40 },
    { name: "CBD Oil", number: 20 },
    { name: "Magic Mushrooms", number: 34 },
    { name: "Extracts", number: 26 },
    { name: "Edibles", number: 32 },
    { name: "Vape Pens", number: 12 },
    { name: "Accessories", number: 10 },
    { name: "Bath & Body", number: 8 },
    { name: "Bundles", number: 24 },
    { name: "Wholesale", number: 28 },
  ];
  const OrdersAPI = [
    { name: "Default" },
    { name: "Review Count" },
    { name: "Popularity" },
    { name: "Average Rating" },
    { name: "Newness" },
    { name: "Price: Low to High" },
    { name: "Price: High to Low" },
    { name: "Random Products" },
    { name: "Product Name" },
  ];
  const StarsAPI = [
    { stars: 5 },
    { stars: 4 },
    { stars: 3 },
    { stars: 2 },
    { stars: 1 },
  ];
  function ClearFIlters() {
    setMinInput(0);
    setMaxInput(50000);
    setActiveSelector(null);
    setOrderBy(0);
    setStars(null);
  }
  return (
    <div className="Filters col-3">
      <div className="Filter_Container">
        <p className="StartFilter">Fllters</p>
        <div className="line_Split"></div>
        <div className="productCategory">
          <p className="l_Name">PRODUCT CATEGORY</p>
          {SelectorsAPI.map((item, index) => (
            <div className="selector" key={index}>
              <div
                onClick={() =>
                  activeSelector == index
                    ? setActiveSelector(null)
                    : setActiveSelector(index)
                }
                className={`selectorCheck ${
                  activeSelector == index ? "selectorChecked" : ""
                }`}
              ></div>
              <p className="selectorName">{item.name}</p>
              <div className="lineV"></div>
              <p className="selectorNubers">{item.number}</p>
            </div>
          ))}
        </div>
        <div className="line_Split"></div>
        <p className="l_Name">FILTER BY PRICE</p>
        <div className="priceSLider">
          <div className="priceRow">
            <div className="priceIndicator priceMin">$0</div>
            <div className="priceIndicator priceMax">$50,000.00</div>
          </div>
          <div className="price_Inputs">
            <input
              value={minInput}
              type="range"
              onChange={(e) => setMinInput(parseInt(e.target.value))}
              min="0"
              max="50000"
              step={1}
              className="priceInput minPrice"
            />
            <input
              type="range"
              value={maxInput}
              min={0}
              onChange={(e) => setMaxInput(parseInt(e.target.value))}
              max={50000}
              className="priceInput maxPrice"
            />
          </div>
          <button className="applyFilters">Apply</button>
        </div>
        <div className="line_Split"></div>
        <div className="productCategory">
          <p className="l_Name">ORDER BY</p>
          {OrdersAPI.map((item, index) => (
            <div className="selector" key={index}>
              <div
                onClick={() =>
                  orderBy == index ? setOrderBy(null) : setOrderBy(index)
                }
                className={`selectorCheck ${
                  orderBy == index ? "selectorChecked" : ""
                }`}
              ></div>
              <p className="selectorName">{item.name}</p>
            </div>
          ))}
        </div>
        <div className="line_Split"></div>
        <div className="productCategory">
          <p className="l_Name">FILTER BY REVIEWS</p>
          {StarsAPI.map((item, index) => (
            <div className="selector" key={index}>
              <div
                onClick={() =>
                  stars == index ? setStars(null) : setStars(index)
                }
                className={`star_selectorCheck ${
                  stars == index ? "selectorChecked" : ""
                }`}
              ></div>
              <div className="starsCount">
                <StarsCalc stars={item.stars} maxStars={5} />
              </div>
            </div>
          ))}
        </div>
        <div className="line_Split"></div>
        <button className="buttonAlt" onClick={ClearFIlters}>
          Clear Filters
        </button>
      </div>
    </div>
  );
}
