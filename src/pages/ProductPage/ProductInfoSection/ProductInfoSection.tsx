import { useParams } from "react-router-dom";
import Products from "../../../api/products";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import ProductOptions from "./components/ProductOptions/ProductOptions";
import "./ProductInfoSection.css";

export default function ProductInfoSection() {
  let ProductId: any = useParams().id;
  const ProductGet: any = Products.filter((x) => x.id == parseInt(ProductId));
  const ProductData: any = ProductGet[0];
  return (
    <div className="ProductInfoSection">
      <ProductInfo ProductData={ProductData} />
      <ProductOptions ProductData={ProductData} />
    </div>
  );
}
