"use client";
import React, { useEffect, useContext, useState } from "react";
import MainContext from "../../context/MainContext";
import { layoutLength } from "../../variables/layoutData";

const cardSound = new Audio("../../assets/audio/card-fly.mp3");

const Card = ({ id, className }) => {
  const { layout, ids, setCounter, counter, setIds } = useContext(MainContext);
  const [display, setDisplay] = useState("block");
  // const [cardSound, setCardSound] = useState('');

  // useEffect(
  //   () => setCardSound(new Audio("../../assets/audio/card-fly.mp3")),
  //   []
  // );

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
          cardSound.play();
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
