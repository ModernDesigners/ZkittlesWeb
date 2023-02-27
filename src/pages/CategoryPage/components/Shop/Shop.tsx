import "./Shop.css";
import DropDownIcon from "../../../../images/icons/arrowDown.png";
import TopSellingSection from "./components/TopSellingSection/TopSellingSection";
import ProductsPrint from "../../../../components/ProductsPrint/ProductsPrint";
import arrowLeft from "../../../../images/icons/arrow-left.png";
import arrowRight from "../../../../images/icons/arrow-right.png";
import ShopBanner from "./components/ShopBanner/ShopBanner";

export default function Shop(props: any) {
  return (
    <div className="Shop col-lg-8 col-md-12 col-sm-12">
      <div className="ShopStarter">
        <p className="StartFilter">Shop</p>
        <div
          className="Shorts"
          onClick={() => props.setFilters(!props.filters)}
        >
          Filter <img src={DropDownIcon} />
        </div>
        <div className="Shorts">
          Short By Lates <img src={DropDownIcon} />
        </div>
      </div>
      <div className="line_Split"></div>
      <div className="descriptionStart">
        <p className="limeStart">Cannabis</p>
        <p className="desc">
          Here at WestCoastSupply’s “ cannabis section, we showcase the best
          Indica, Hybrid, and Sativa medical cannabis strain selections at the
          best prices online. You can be assured that all our strains go through
          a strict screening process to ensure that all your cannabis needs are
          top-quality. All of our flowers are sourced from reputable growers,
          based in British Columbia, Canada. We have hige grade selection comes
          from growers that produce AAAA+ quality cannabis flowers and have many
          years of experience in the cannabis industry. You are guaranteed to be
          receiving high-quality flowers at the best prices online with our
          unbeatable sales!
        </p>
      </div>
      <TopSellingSection />
      <div className="ProductsRow">
        <ProductsPrint count={6} />
      </div>
      <ShopBanner />
      <div className="ProductsRow">
        <ProductsPrint count={6} />
      </div>
      <div className="line_Split"></div>
      <div className="last_Row">
        <p className="results">Showing 1-30 of 393 results</p>
        <div className="GetPages">
          <div className="Arrows-C Circl">
            <img src={arrowLeft} />
          </div>
          <div className="Circl CirclActive">1</div>
          <div className="Circl">2</div>
          <div className="Circl">3</div>
          <div className="Circl">4</div>
          <div className="Circl">...</div>
          <div className="Circl">55</div>
          <div className="Arrows-C Circl">
            <img src={arrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
}
