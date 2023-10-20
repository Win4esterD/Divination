import React, { useEffect, useContext, useState } from "react";
import MainContext from "../context/MainContext";
import { layoutLength } from "../variables/layoutData";
import { cardSound } from "../variables/cardSound";

const Card = ({ id, className }) => {
  const { layout, ids, setCounter, counter, setIds } = useContext(MainContext);
  const [display, setDisplay] = useState('flex-block');
  useEffect(() => {
    setDisplay("flex-block");
  }, [layout]);

  useEffect(() => {
    if(counter === 0) {
      setDisplay("flex-block");
    }
  }, [counter]);

  return (
    <div
      className={className}
      id={id}
      onClick={() => {
        if (counter < layoutLength[layout]) {
          cardSound.play();
          setCounter(counter + 1);
          setIds([...ids, id]);
          setDisplay('none');
        }
      }}
      style={{display: display}}
    ></div>
  );
};

export default Card;
