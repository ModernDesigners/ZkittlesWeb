import ImageSection from "./ImageSection/ImageSection";
import ProductsRow from "./ProductInfoSection/components/ProductOptions/components/ProductsRow/ProductsRow";
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
        <div className="line_Split_B "></div>
        <ProductsRow />
      </div>
    </div>
  );
}
