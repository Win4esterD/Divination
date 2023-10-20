import React, { useEffect, useRef, useContext } from "react";
import MainContext from "../context/MainContext";

const Card = ({ id, clickHandler, className, index }) => {
  const card = useRef(null);
  const { layout, ids, WaiteIMGs } = useContext(MainContext);

  const layoutPosition = ids[index];
  const backgroundImage = layoutPosition
    ? { backgroundImage: `url(${WaiteIMGs[layoutPosition - 1].image})` }
    : {};
  useEffect(() => {
    card.current.removeAttribute("style");
  }, [layout]);

  return (
    <div
      className={className}
      id={id}
      onClick={clickHandler}
      ref={card}
      style={backgroundImage}
    ></div>
  );
};

export default Card;
