import { useState } from "react";
import star from "../../../../../images/icons/starB.png";
import starAlt from "../../../../../images/icons/starAltB.png";

export default function StarsCalc(props: { stars: number; maxStars: number }) {
  let stars_array: any = [];
  for (let i = 0; i < props.stars; i++) {
    stars_array.push(<img key={i} src={star} alt="" />);
  }
  let empty_stars = props.maxStars - props.stars;
  for (let m = 0; m < empty_stars; m++) {
    stars_array.push(<img key={m + "i"} src={starAlt} alt="" />);
  }
  return <>{stars_array}</>;
}
