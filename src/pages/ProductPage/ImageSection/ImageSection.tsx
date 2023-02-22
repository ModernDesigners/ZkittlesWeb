import "./ImageSection.css";
import girchi from "../../../images/girchi.png";
import google from "../../../images/users/Avatar1.png";
import { useEffect, useRef, useState } from "react";

export default function ImageSection() {
  const getImage = useRef<any>(null);
  const [imageActive, setImageActive] = useState<number>(0);
  useEffect(() => {
    getImage.current.src = imagesAPI[imageActive].image;
  }, [imageActive]);
  const imagesAPI = [
    {
      image: girchi,
    },
    {
      image: google,
    },

    {
      image: girchi,
    },

    {
      image: girchi,
    },

    {
      image: girchi,
    },
  ];
  return (
    <div className="ImageSection">
      <div className="Head_Image">
        <img ref={getImage} src={girchi} />
      </div>
      <div className="Select_Images">
        {imagesAPI.map((item, index) => (
          <div
            key={index}
            onClick={() => setImageActive(index)}
            className={`Image_Selector ${
              index == imageActive ? "Image_SelectorActive" : ""
            }`}
          >
            <img src={item.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
