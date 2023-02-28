import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ImageSection from "./ImageSection/ImageSection";
import ProductsRow from "./ProductInfoSection/components/ProductOptions/components/ProductsRow/ProductsRow";
import ProductInfoSection from "./ProductInfoSection/ProductInfoSection";
import "./ProductPage.css";
export default function ProductPage() {
  const routePath = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [routePath]);

  return (
    <div className="ProductPage">
      <div className="container">
        <div className="ProductPage_content">
          <ImageSection />
          <ProductInfoSection />
        </div>
        <div className="line_Split_B "></div>
        <ProductsRow />
      </div>
    </div>
  );
}
