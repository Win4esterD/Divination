import React, { useEffect, useMemo } from "react";
import Card from "./Card";

const CardsGenerator = ({ resetIds, resetCounter, layout, revealCard }) => {
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
        key={num.toString()}
        clickHandler={revealCard}
        layout={layout}
        className={"card"}
      />
    );
  }

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

  const allCards = useMemo(generateAllCards, [layout]);

  return (
    <div className="cards-wrapper">
      {generateAllCards().map((card) => {
        return card;
      })}
    </div>
  );
};

export default CardsGenerator;
