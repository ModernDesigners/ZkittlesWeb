import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import HeaderNav from "../../components/Header/HeaderNav";
import {
  Section,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
  Section9,
} from "./Components";

export default function Home(props: { myCart: any }) {
  const routePath = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [routePath]);
  return (
    <>
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Footer />
    </>
  );
}
