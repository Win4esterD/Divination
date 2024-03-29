import React, { useEffect, useContext, useState } from "react";
import MainContext from "../../context/MainContext";
import { layoutLength } from "../../variables/layoutData";
import cardSound from "@/variables/cardSound";

const Card = ({ id, className }) => {
  const { layout, ids, setCounter, counter, setIds } = useContext(MainContext);
  const [display, setDisplay] = useState("block");

  useEffect(() => {
    setDisplay("block");
  }, [layout]);

  useEffect(() => {
    if (counter === 0) {
      setDisplay("block");
    }
  }, [counter]);


  return (
    <div
      className={className}
      id={id}
      onClick={() => {
        if (counter < layoutLength[layout]) {
          try{
            cardSound.play();
          }catch(err) {

          }
          setCounter(counter + 1);
          setIds([...ids, id]);
          setDisplay("none");
        }
      }}
      style={{ display: display }}
    ></div>
  );
};

export default Card;
