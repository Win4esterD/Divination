import React, { useEffect, useRef, useContext } from "react";
import MainContext from "../context/MainContext";

const Card = ({ id, clickHandler, className}) => {
  const card = useRef(null);
  const {layout} = useContext(MainContext);
  useEffect(() => {
    card.current.removeAttribute('style');
  }, [layout])
  return (
    <div className={className} id={id} onClick={clickHandler} ref={card}></div>
  );
};

export default Card;
