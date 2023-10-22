import React from "react";
import ritualTable from "./ritual-table.module.scss";
import resultsStyle from "./results.module.scss";
import RitualSubjects from "../RitualSubjects/RitualSubjects";
import CardsGenerator from "../CardGenerator/CardGenerator";
import Layout from "../Layout/Layout";
import Result from "../Result/Result";
import cardsRus from "../../JSON/cards-rus.json";
import cardsEng from "../../JSON/cards-en.json";
import cardsEsp from "../../JSON/cards-es.json";
import { useState, useEffect, useRef, useContext } from "react";
import MainContext from "../../context/MainContext";

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

  function collectIds(value) {
    setIds((id) => [...id, value]);
  }

  function resetIds() {
    setIds([]);
  }

  function resetCounter() {
    setCounter(0);
  }

  //Allows to start over with current layout
  function resetButtonHandler() {
    resetIds();
    resetCounter();
    const cards = layoutCards.current.childNodes;
    cards.forEach((el) => {
      el.removeAttribute("style");
    });
  }

  const results = useRef(null);

  return (
    <main>
      <section className={ritualTable["ritual-table"]}>
        <RitualSubjects />
        <Layout ref={layoutCards} setCounter={setCounter} counter={counter} />
        <CardsGenerator
          collectIds={collectIds}
          resetIds={resetIds}
          resetCounter={resetCounter}
          layout={layout}
          resetButtonHandler={resetButtonHandler}
          counter={counter}
        />
      </section>
      <section className={resultsStyle.results} ref={results}>
        <Result
          results={results}
          ids={ids}
          layout={layout}
          cards={deck}
          language={language}
          resetIds={resetIds}
          resetCounter={resetCounter}
          layoutCards={layoutCards}
          resetButtonHandler={resetButtonHandler}
        />
      </section>
    </main>
  );
};

export default Main;
