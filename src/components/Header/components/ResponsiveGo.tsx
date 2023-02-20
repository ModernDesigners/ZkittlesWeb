import { useState } from "react";
import dropdownImg from "../../../images/icons/arrowDown.png";
import "./ResponsiveGo.css";
interface ResponsiveNav {
  text: string;
  dropdown?: number;
  dropdownlist?: string[];
}
export default function ResponsiveGo({
  text,
  dropdown,
  dropdownlist,
}: ResponsiveNav) {
  let [openDrop, setOpenDrop] = useState<boolean>(false);
  let i = 0;
  return (
    <div className="responsiveGo">
      <div className={`responsiveGoB ${openDrop ? "DropOpen" : ""}`}>
        <p
          onClick={() => {
            setOpenDrop(!openDrop);
          }}
        >
          {text}
          {dropdown ? <img className="dropdownImg" src={dropdownImg} /> : ""}
        </p>
      </div>

      {dropdown ? (
        <>
          <div
            className={`responsiveGoDropdown ${
              openDrop ? "responsiveGoDropdownCome" : ""
            }`}
          >
            {dropdownlist?.map((item) => (
              <div key={i++} className="responsiveDropdownButton">
                {item}
              </div>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
