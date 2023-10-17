import React from "react";
import "../styles/ritual-table.scss";
import "../styles/results.scss";
import RitualSubjects from "./RitualSubjects";
import CardsGenerator from "./CardGenerator";
import Layout from "./Layout";
import Result from "./Result";
import GreetingsMenu from "./Greetings";
import cardsRus from "../JSON/cards-rus.json";
import cardsEng from "../JSON/cards-en.json";
import cardsEsp from "../JSON/cards-es.json";
import { useState, useEffect, useRef, useContext } from "react";
import { cardSound } from "../variables/cardSound";
import WaiteIMGs from "../JSON/waite-images.json";
import MainContext from "../context/MainContext";

const Main = () => {

  const [ids, setIds] = useState([]);
  const [deck, setDeck] = useState("");
  const layoutCards = useRef(null);
  const { counter, setCounter, language, layout } = useContext(MainContext);


  
  useEffect(() => {
    determineLanguage(language);
  }, [language]);

  function determineLanguage(value) {
    if (value === "Русский") {
      setDeck(cardsRus);
      localStorage.setItem("language", "Русский");
    } else if (value === "English") {
      setDeck(cardsEng);
      localStorage.setItem("language", "English");
    } else if (value === "Español") {
      setDeck(cardsEsp);
      localStorage.setItem("language", "Español");
    }
  }

  function revealCard(event) {
    const card = event.target;
    const layoutLength = layoutCards.current.children.length;
    if (counter < layoutLength) {
      cardSound.play();
      layoutCards.current.children[counter].style.backgroundImage = `url(${
        WaiteIMGs[card.id - 1].image
      })`;
      collectIds(card.id);
      increaseCounter();

      card.style.display = "none";
    }
  }

  function collectIds(value) {
    setIds(id => [...id, value]);
  }

  function resetIds() {
    setIds([]);
  }

  function resetCounter() {
    setCounter(0);
  }

  function increaseCounter() {
    setCounter(counter + 1);
  }

  return (
    <main>
      <section className="ritual-table">
        <GreetingsMenu />
        <RitualSubjects />
        <Layout ref={layoutCards}/>
        <CardsGenerator
          collectIds={collectIds}
          resetIds={resetIds}
          // counter={counter}
          increaseCounter={increaseCounter}
          resetCounter={resetCounter}
          layout={layout}
          revealCard={revealCard}
        />
      </section>
      <section className="results">
        <Result
          ids={ids}
          layout={layout}
          cards={deck}
          language={language}
          resetIds={resetIds}
          resetCounter={resetCounter}
        />
      </section>
    </main>
  );
};

export default Main;