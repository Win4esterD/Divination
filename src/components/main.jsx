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
import MainContext from "../context/MainContext";

const Main = () => {
  const [deck, setDeck] = useState("");
  const layoutCards = useRef(null);
  const { counter, setCounter, language, layout, ids, setIds } =
    useContext(MainContext);

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
        collectIds(card.getAttribute("id"));
        card.style.display = "none";
        setCounter(counter + 1);
    }
  }

  function collectIds(value) {
    setIds((id) => [...id, value]);
  }

  function resetIds() {
    setIds([]);
  }

  function resetCounter() {
    setCounter(0);
  }

  const results = useRef(null);

  return (
    <main>
      <section className="ritual-table">
        <GreetingsMenu />
        <RitualSubjects />
        <Layout ref={layoutCards} setCounter={setCounter} counter={counter} />
        <CardsGenerator
          collectIds={collectIds}
          resetIds={resetIds}
          resetCounter={resetCounter}
          layout={layout}
          revealCard={revealCard}
        />
      </section>
      <section className="results" ref={results}>
        <Result
          results={results}
          ids={ids}
          layout={layout}
          cards={deck}
          language={language}
          resetIds={resetIds}
          resetCounter={resetCounter}
          layoutCards={layoutCards}
        />
      </section>
    </main>
  );
};

export default Main;
