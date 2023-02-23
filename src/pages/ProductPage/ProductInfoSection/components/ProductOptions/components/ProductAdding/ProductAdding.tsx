import "./ProductAdding.css";
export default function ProductAdding(props: {
  name: string;
  times?: number;
  price: number;
}) {
  return (
    <div className="ProductAdding">
      <div className="Getter Get_1">
        <span className="name">{props.name}</span>
        <span className="times">{props.times ? props.times + "x" : ""}</span>
      </div>

      <div className="Getter Get_2">
        <span className="price">${props.price + ".00"}</span>
      </div>
    </div>
  );
}
