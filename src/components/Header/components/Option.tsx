import "./Option.css";
import dropdownImg from "../../../images/icons/arrowDown.png";
interface OptionInterface {
  text: string;
  dropdown?: number;
  dropdownlist?: string[];
}
export default function Option({
  text,
  dropdown,
  dropdownlist,
}: OptionInterface) {
  let i = 0;
  return (
    <div className="HeaderOption">
      {text}
      {dropdown ? (
        <>
          <img className="dropdownImg" src={dropdownImg} />
          <div className="DropdownBar">
            {dropdownlist?.map((item) => (
              <div key={i++} className="DropdownButton">
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
