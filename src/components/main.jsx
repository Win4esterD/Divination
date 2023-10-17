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
import { useState, useEffect } from "react";

const Main = ({ language, layout }) => {

  const [ids, setIds] = useState([]);
  const [counter, setCounter] = useState(0);
  const [deck, setDeck] = useState("");

  useEffect(() => {
    determineLanguage(language);
    setInterfaceLanguage(language);
  }, [language]);

  function determineLanguage(value) {
    if (value === "Русский") {
      setDeck(cardsRus);
      setInterfaceLanguage(language);
      localStorage.setItem("language", "Русский");
    } else if (value === "English") {
      setDeck(cardsEng);
      setInterfaceLanguage(language);
      localStorage.setItem("language", "English");
    } else if (value === "Español") {
      setDeck(cardsEsp);
      setInterfaceLanguage(language);
      localStorage.setItem("language", "Español");
    }
  }

  //Sets language for the interface elements
  function setInterfaceLanguage(language) {
    const headerUl = document.querySelector(".header__ul");
    const layouts = document.querySelector(".layouts");
    const lang = document.querySelector(".language");

    if (language === "English") {
      headerUl.firstChild.innerHTML = "Tarot theory";
      headerUl.firstChild.nextSibling.firstChild.innerHTML = "Layouts: ";
      layouts[0].innerHTML = "Celtic Cross";
      layouts[1].innerHTML = "Cross";
      layouts[2].innerHTML = "Love Oracle";
      layouts[3].innerHTML = "Compas";
      headerUl.lastChild.firstChild.innerHTML = "Language: ";
      lang.value = language;
    } else if (language === "Русский") {
      headerUl.firstChild.innerHTML = "Теория Таро";
      headerUl.firstChild.nextSibling.firstChild.innerHTML = "Расклады: ";
      layouts[0].innerHTML = "Кельтский Крест";
      layouts[1].innerHTML = "Крест";
      layouts[2].innerHTML = "Оракул Любви";
      layouts[3].innerHTML = "Компас";
      headerUl.lastChild.firstChild.innerHTML = "Язык: ";
      lang.value = language;
    } else if (language === "Español") {
      headerUl.firstChild.innerHTML = "Teoría Del Tarot";
      headerUl.firstChild.nextSibling.firstChild.innerHTML = "Correlaciones: ";
      layouts[0].innerHTML = "Cruz Celta";
      layouts[1].innerHTML = "Cruz";
      layouts[2].innerHTML = "Oráculo de Amor";
      layouts[3].innerHTML = "Compás";
      headerUl.lastChild.firstChild.innerHTML = "Lengua: ";
      lang.value = language;
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
    setCounter(counter => counter += 1);
  }

  return (
    <main>
      <section className="ritual-table">
        <GreetingsMenu />
        <RitualSubjects />
        <Layout />
        <CardsGenerator
          collectIds={collectIds}
          resetIds={resetIds}
          counter={counter}
          increaseCounter={increaseCounter}
          resetCounter={resetCounter}
          layout={layout}
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
