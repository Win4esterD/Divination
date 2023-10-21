import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

const CardsGenerator = ({
  resetIds,
  resetCounter,
  layout,
  revealCard,
  counter,
}) => {
  const cardsWrapper = useRef(null);

  useEffect(() => {
    resetCounter();
    resetIds();
  }, [layout]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //generates cards, where "num" is id of the card to be generated
  function generateOneCard(num) {
    return (
      <Card
        id={num.toString()}
        key={num}
        clickHandler={revealCard}
        layout={layout}
        className={"card"}
      />
    );
  }

  //Fills table with cards to pick
  function generateAllCards() {
    const result = [];
    const numCounter = [];

    while (result.length !== 78) {
      let randInt = getRandomInt(1, 79);
      if (!numCounter.includes(randInt)) {
        numCounter.push(randInt);
        result.push(generateOneCard(randInt));
      }
    }
    return result;
  }

  const [cardsToPick, setCardsToPick] = useState(generateAllCards());

  useEffect(() => {
    if(counter === 0) {
      setCardsToPick(generateAllCards());
    }
  }, [layout, counter]);


  return (
    <div ref={cardsWrapper} className="cards-wrapper">
      {cardsToPick}
    </div>
  );
};

export default CardsGenerator;
