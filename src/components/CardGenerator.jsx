import React, { useEffect,  useMemo, useRef, forwardRef } from "react";
import WaiteIMGs from "../JSON/waite-images.json";
import Card from "./Card";


const CardsGenerator = ({
  collectIds,
  resetIds,
  counter,
  increaseCounter,
  resetCounter,
  layout,
}) => {

  const cardSound = new Audio("./assets/audio/card-fly.mp3");

  useEffect(() => {
    // const layouts = document.querySelector(".layouts");
    // layouts.addEventListener("change", () => {
      // resetCounter();
      // resetIds();
      // const cards = document.querySelectorAll(".card");
      // cards.forEach((el) => {
        // el.removeAttribute("style");
      // });
    // });

    // const cards = document.querySelectorAll(".card");
    resetCounter();
    resetIds();
  }, [layout]);

  const cardRef = useRef(null);


  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //Revealing cards
  function revealCard(event) {
    const card = event.target;
    const layoutCards = document.querySelectorAll(".layout-card");
    if (counter < layoutCards.length) {
      cardSound.play();
      layoutCards[counter].style.backgroundImage = `url(${
        WaiteIMGs[card.id - 1].image
      })`;
      collectIds(card.id);
      increaseCounter();
      card.style.display = "none";
    }
  }

  //generates cards, where "num" is id of the card to be generated
  function generateOneCard(num) {
    return (
      <Card
        id={num.toString()}
        key={num.toString()}
        clickHandler={revealCard}
        layout={layout}
        className={'card'}
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
