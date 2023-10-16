import React from 'react';
import '../styles/ritual-table.scss';
import '../styles/results.scss';
import RitualSubjects from './RitualSubjects';
import CardsGenerator from './CardGenerator';
import Layout from './Layout';
import Result from './Result';
import GreetingsMenu from './Greetings';
import cardsRus from "../JSON/cards-rus.json";
import cardsEng from "../JSON/cards-en.json";
import cardsEsp from "../JSON/cards-es.json";
// import MainContext from '../context/MainContext';
import { useState, useEffect} from 'react';

const Main = () => {
  const [state, setState] = useState({
    ids: [],
    counter: 0,
    layout: localStorage.getItem('layout')? localStorage.getItem('layout'): "Celtic Cross",
    deck: '',
    language: localStorage.getItem('language')? localStorage.getItem('language'): 'English',
  });

  // state = {
  //   ids: [],
  //   counter: 0,
  //   layout: localStorage.getItem('layout')? localStorage.getItem('layout'): "Celtic Cross",
  //   deck: '',
  //   language: localStorage.getItem('language')? localStorage.getItem('language'): 'English',
  // }


  // constructor(props){
  //   super(props);
  //   collectIds = collectIds.bind(this);
  //   resetIds = resetIds.bind(this);
  //   resetCounter = resetCounter.bind(this);
  //   increaseCounter = increaseCounter.bind(this);
  //   getLayout = getLayout.bind(this);
  // }

  // componentDidMount(){ 
  //   const language = document.querySelector('.language');
  //   determineLanguage(state.language);
  //   setInterfaceLanguage(state.language);

  //   language.addEventListener('change', () => {
  //     determineLanguage(language.value);
  //     setInterfaceLanguage();
  //   });
  // }

   useEffect(() => {
    const language = document.querySelector('.language');
    determineLanguage(state.language);
    setInterfaceLanguage(state.language);

      language.addEventListener('change', () => {
      determineLanguage(language.value);
      setInterfaceLanguage();
    });
  }, []);

  function determineLanguage(value){
    if(value === "Русский"){
      setState({deck: cardsRus});
      state.deck = cardsRus;
      state.language = value;
      setState({language: value});
      setInterfaceLanguage(state.language);
      localStorage.setItem('language', "Русский")
    }else if(value === "English"){
      setState({deck: cardsEng});
      state.deck = cardsEng;
      state.language = value;
      setState({language: value});
      setInterfaceLanguage(state.language);
      localStorage.setItem('language', "English")
    }else if(value === "Español"){
      setState({deck: cardsEsp});
      state.deck = cardsEsp;
      state.language = value;
      setState({language: value});
      setInterfaceLanguage(state.language);
      localStorage.setItem('language', "Español")
    }
  }

  //Sets language for the interface elements
  function setInterfaceLanguage(language){
    const headerUl = document.querySelector('.header__ul');
    const layouts = document.querySelector('.layouts');
    const lang = document.querySelector('.language');

    if(language === "English"){
      headerUl.firstChild.innerHTML = "Tarot theory";
      headerUl.firstChild.nextSibling.firstChild.innerHTML = "Layouts: ";
      layouts[0].innerHTML = "Celtic Cross";
      layouts[1].innerHTML = "Cross";
      layouts[2].innerHTML = "Love Oracle";
      layouts[3].innerHTML = "Compas";
      headerUl.lastChild.firstChild.innerHTML = "Language: ";
      lang.value = language;
    }else if (language === "Русский"){
      headerUl.firstChild.innerHTML = "Теория Таро";
      headerUl.firstChild.nextSibling.firstChild.innerHTML = "Расклады: ";
      layouts[0].innerHTML = "Кельтский Крест";
      layouts[1].innerHTML = "Крест";
      layouts[2].innerHTML = "Оракул Любви";
      layouts[3].innerHTML = "Компас";
      headerUl.lastChild.firstChild.innerHTML = "Язык: ";
      lang.value = language;
    }else if(language === "Español"){
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

  function collectIds(value){
    state.ids.push(value);
  }

  function resetIds(){
    state.ids = [];
    setState({ids: []});
  }

  function resetCounter(){
    setState({counter: 0});
  }

  function increaseCounter(){
    setState({counter: state.counter + 1});
  }

  function getLayout(value){
    state.layout = value;
    setState({layout: value});
  }

    return (
      <main>
        <section className="ritual-table">
          <GreetingsMenu />
          <RitualSubjects/>
          <Layout getLayout={getLayout} layout={state.layout}/>
          <CardsGenerator collectIds={collectIds} resetIds={resetIds} counter={state.counter} increaseCounter={increaseCounter} resetCounter={resetCounter}/>
        </section>
        <section className="results">
          <Result ids={state.ids} layout={state.layout} cards={state.deck} language={state.language} resetIds={resetIds} resetCounter={resetCounter}/>
        </section>
      </main>
    )
}

export default Main;