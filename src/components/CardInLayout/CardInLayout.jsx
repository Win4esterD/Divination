import React, { useEffect, useRef, useContext } from "react";
import MainContext from "../../context/MainContext";

const CardInLayout = ({ className, index }) => {
  const card = useRef(null);
  const { layout, ids, WaiteIMGs } = useContext(MainContext);

  const layoutPosition = ids[index];
  const backgroundImage = layoutPosition
    ? { backgroundImage: `url(${WaiteIMGs[layoutPosition - 1].image})` }
    : {};
  useEffect(() => {
    card.current.removeAttribute("style");
  }, [layout]);

  return <div className={className} ref={card} style={backgroundImage}></div>;
};

export default CardInLayout;
