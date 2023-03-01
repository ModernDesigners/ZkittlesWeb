import { useState } from "react";
import { BiCheck } from "react-icons/bi";
import AddCard from "./components/AddCard/AddCard";
import ProductSectioner from "./components/ProductSectioner/ProductSectioner";
import "./ProductOptions.css";

export default function ProductOptions(props: { ProductData: any }) {
  const [activeOption, setActiveOption] = useState(0);
  const [weightActive, setWeightActive] = useState(0);
  const OptionsAPI = [{ name: "28g" }, { name: "1/2lb" }, { name: "1/4lb" }];
  const WeightOptionAPI = [{ name: "4g (+$2.00)" }, { name: "8g (+$3.00)" }];
  return (
    <div className="ProductOptions">
      <div className="FirstOptions">
        <div className="F_Splited col-lg-6 col-md-6 col-sm-6">
          <p>WEIGHT</p>
          <div className="F_Splitted_Row">
            {OptionsAPI.map((item, index) => (
              <div
                key={index}
                className={`F_Option ${
                  activeOption == index ? "F_Option_Active" : ""
                }`}
                onClick={() => setActiveOption(index)}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
        <div className="F_Splited col-lg-6 col-md-6 col-sm-6">
          <p>ADD INTEGRA PACK</p>
          <div className="F_Splitted_Row">
            {WeightOptionAPI.map((item, index) => (
              <div
                key={index}
                onClick={function () {
                  if (weightActive == index) {
                    setWeightActive(4);
                  } else {
                    setWeightActive(index);
                  }
                }}
                className="F_Weight"
              >
                <div
                  className={`F_Checker ${
                    weightActive == index ? "F_Checked" : ""
                  }`}
                >
                  <BiCheck color="white" size={18} />
                </div>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="addon_alert">
        Purchase this product now and earn <span>80</span> Points!
      </div>
      <AddCard ProductData={props.ProductData} />
      <div className="line_Split"></div>
      <div className="little_details">
        <div className="col-lg-6 col-md-6 col-sm-6 little_dets">
          <div className="col-4 little_question">
            SKU <span>:</span>
          </div>
          <div className="col-8 little_answer">N/A</div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 little_dets">
          <div className="col-4 little_question">
            Categories <span>:</span>
          </div>
          <div className="col-8 little_answer">
            <span>AAAA Weed</span>, <span>Indica</span>
          </div>
        </div>
      </div>
      <div className="line_Split line_Split_B"></div>
      <ProductSectioner />
    </div>
  );
}
