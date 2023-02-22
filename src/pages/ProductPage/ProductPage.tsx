import ImageSection from "./ImageSection/ImageSection";
import ProductInfoSection from "./ProductInfoSection/ProductInfoSection";
import "./ProductPage.css";
export default function ProductPage() {
  return (
    <div className="ProductPage">
      <div className="container">
        <div className="ProductPage_content">
          <ImageSection />
          <ProductInfoSection />
        </div>
      </div>
    </div>
  );
}
