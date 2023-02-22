import Option from "./components/Option";
import "./HeaderNav.css";
import searchIcon from "../../images/icons/Search.png";
import Nav from "./Nav";
import AlertSale from "../AlertSale/AlertSale";

export default function Header() {
  return (
    <>
      <div className="WebStarter">
        <AlertSale />

        <Nav />
        <div className="header">
          <div className="responsiveSearch">
            <input type="text" placeholder="Search" />
            <button>
              <img src={searchIcon} />
            </button>
          </div>

          <Option text="Shop All" />
          <Option
            dropdown={1}
            dropdownlist={[
              "Purple Gushers",
              "Budder",
              "Shatter",
              "Tuna",
              "Cortal",
            ]}
            text="Flower"
          />
          <Option text="Edibles" />
          <Option
            dropdown={1}
            dropdownlist={["Mix", "Zkittles", "Match", "Gushers", "Budders"]}
            text="Concentrates"
          />
          <Option text="Mushrooms" />
          <Option
            dropdown={1}
            dropdownlist={[
              "Daily Sales",
              "Weekend Sales",
              "Flash Sales",
              "Refer Sales",
              "20% Sales",
            ]}
            text="Promotions/Bundles"
          />
          <Option
            dropdown={1}
            dropdownlist={[
              "Sales Support",
              "Customer Service",
              "Online Chat",
              "Returns",
              "Redeems",
            ]}
            text="Support"
          />
          <Option text="Rewards" />
          <Option text="Blog" />
        </div>
      </div>
    </>
  );
}
