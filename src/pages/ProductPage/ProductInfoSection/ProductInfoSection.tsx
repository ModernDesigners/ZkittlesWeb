import ProductInfo from "./components/ProductInfo/ProductInfo";
import ProductOptions from "./components/ProductOptions/ProductOptions";
import "./ProductInfoSection.css";

export default function ProductInfoSection() {
  return (
    <div className="ProductInfoSection">
      <ProductInfo />
      <ProductOptions />
    </div>
  );
}
