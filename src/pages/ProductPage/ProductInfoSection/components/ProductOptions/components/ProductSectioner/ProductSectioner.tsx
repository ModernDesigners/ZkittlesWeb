import { useState } from "react";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductReferFriend from "./ProductReferFriend/ProductReferFriend";
import ProductReviews from "./ProductReviews/ProductReviews";
import "./ProductSectioner.css";

export default function ProductSectioner() {
  const [productActiveSection, setProductActiveSection] = useState(0);
  const ProductSections = [
    { name: "Description" },
    { name: "Reviews" },
    { name: "Refer a Friend" },
  ];

  let ProductSection: string | JSX.Element = <ProductDescription />;
  switch (productActiveSection) {
    case 0:
      ProductSection = <ProductDescription />;
      break;
    case 1:
      ProductSection = <ProductReviews />;

      break;
    case 2:
      ProductSection = <ProductReferFriend />;

      break;
    default:
      ProductSection = <ProductDescription />;
  }
  return (
    <>
      <div className="ProductSelectors">
        {ProductSections.map((item, index) => (
          <div
            key={index}
            onClick={() => setProductActiveSection(index)}
            className={`ProductSelector ${
              index == productActiveSection ? "ProductSelectorActive" : ""
            }`}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="line_Split line_Split_margin"></div>
      {ProductSection}
    </>
  );
}
