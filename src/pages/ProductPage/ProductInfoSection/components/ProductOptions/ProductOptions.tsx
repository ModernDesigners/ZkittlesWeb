import "./ProductOptions.css";

export default function ProductOptions() {
  return (
    <div className="ProductOptions">
      <div className="FirstOptions">
        <div className="F_Splited col-6">
          <p>WEIGHT</p>
          <div className="F_Splited_Row">
            <div className="F_Option">28g</div>
            <div className="F_Option">1/2lb</div>
            <div className="F_Option">1/4lb</div>
          </div>
        </div>
        <div className="F_Splited col-6">
          <p>ADD INTEGRA PACK</p>
          <div className="F_Splited_Row"></div>
        </div>
      </div>
    </div>
  );
}
