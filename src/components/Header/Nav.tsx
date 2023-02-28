import "./Nav.css";
import logo from "../../images/Logo.png";
import searchIcon from "../../images/icons/Search.png";
import CardIcon from "../../images/icons/Cart.png";
import { useState } from "react";
import TruckImage from "../../images/icons/Truck.png";
import GreenImage from "../../images/icons/Green.png";
import CoinImage from "../../images/icons/Coin.png";
import ResponsiveGo from "./components/ResponsiveGo";
import { Link } from "react-router-dom";

export default function Nav(props: { myCart: any; darkScreen: any }) {
  const openCart = () => {
    props.darkScreen.current.classList.add("darkScreenActive");
    props.myCart.current.classList.add("myCartActive");
  };

  const [navActive, setNavActive] = useState<boolean>(false);
  return (
    <nav>
      <div className="container navContainer">
        <div
          className={`navBurger ${navActive ? "navBurgerActive" : ""}`}
          onClick={() => setNavActive(!navActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="navLogo">
          <Link to="Home">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="navSearch">
          <input type="text" placeholder="Search" />
          <button>
            <img src={searchIcon} />
          </button>
        </div>
        <div className="navOptions">
          <span>Your Account</span>
          <div className="NavLineV"></div>
          <div className="CartNav" onClick={openCart}>
            <img src={CardIcon} />
          </div>
        </div>
      </div>
      <div className={`responsiveNav ${navActive ? "responsiveNavCome" : ""}`}>
        <img src={logo} className="responsiveNavLogo" alt="Logo" />

        <div className="responsiveNavContent">
          <p className="responsiveTextStart">Services</p>
          <div className="responsiveNavRow">
            <div className="responsiveNavBlock">
              <img src={TruckImage} />
              <p>Deliver Service</p>
            </div>
            <div className="responsiveNavBlock">
              <img src={GreenImage} />
              <p>Production Types</p>
            </div>
            <div className="responsiveNavBlock">
              <img src={CoinImage} />
              <p>Budget Converter</p>
            </div>
          </div>
          <p className="responsiveTextStart">Options</p>

          <div className="responsiveGoRow">
            <ResponsiveGo text="Shop All" />
            <ResponsiveGo
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
            <ResponsiveGo text="Edibles" />
            <ResponsiveGo
              dropdown={1}
              dropdownlist={["Mix", "Zkittles", "Match", "Gushers", "Budders"]}
              text="Concentrates"
            />
            <ResponsiveGo text="Mushrooms" />
            <ResponsiveGo
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
            <ResponsiveGo
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
            <ResponsiveGo text="Rewards" />
            <ResponsiveGo text="Blog" />
          </div>
        </div>
        <button className="responsiveSignIn">Sign In</button>
      </div>
    </nav>
  );
}
