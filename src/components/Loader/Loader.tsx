import { useEffect, useRef, useState } from "react";
import "./Loader.css";

export default function Loader(props: { unshow: number }) {
  const LoaderBlock: any = useRef(null);

  useEffect(() => {
    if (props.unshow == 0) {
      LoaderBlock.current.style.opacity = 0;

      let stm = setTimeout(() => {
        LoaderBlock.current.classList.add("disabledLoader");
      }, 250);
      return () => {
        clearTimeout(stm);
      };
    } else {
      LoaderBlock.current.classList.remove("disabledLoader");
      LoaderBlock.current.style.opacity = 1;
    }
  }, [props.unshow]);
  return (
    <div ref={LoaderBlock} className="Loader">
      <div className="Loader_Inside"></div>
    </div>
  );
}
