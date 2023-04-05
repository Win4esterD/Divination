import React from 'react';
import '../styles/ritual-table.scss';
import '../styles/results.scss';
import RitualSubjects from './ritual-subjects';
import CardsGenerator from './cards-generator';
import Layout from './Layout';
import Result from './Result';
import cardsRus from "../JSON/cards-rus.json";
import cardsEng from "../JSON/cards-en.json";
import cardsEsp from "../JSON/cards-es.json";

class Main extends React.Component{

  state = {
    ids: [],
    counter: 0,
    layout: "Celtic Cross",
    deck: '',
    language: localStorage.getItem('language')? localStorage.getItem('language'): 'English',
  }


  constructor(props){
    super(props);
    this.collectIds = this.collectIds.bind(this);
    this.resetIds = this.resetIds.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.increaseCounter = this.increaseCounter.bind(this);
    this.getLayout = this.getLayout.bind(this);
  }

  componentDidMount(){ 
    const language = document.querySelector('.language');
    this.determineLanguage(this.state.language);
    this.setInterfaceLanguage(this.state.language);

    language.addEventListener('change', () => {
      this.determineLanguage(language.value);
      this.setInterfaceLanguage();
    });
  }

  determineLanguage(value){
    if(value === "Русский"){
      this.setState({deck: cardsRus});
      this.state.deck = cardsRus;
      this.state.language = value;
      this.setState({language: value});
      this.setInterfaceLanguage(this.state.language);
      localStorage.setItem('language', "Русский")
    }else if(value === "English"){
      this.setState({deck: cardsEng});
      this.state.deck = cardsEng;
      this.state.language = value;
      this.setState({language: value});
      this.setInterfaceLanguage(this.state.language);
      localStorage.setItem('language', "English")
    }else if(value === "Español"){
      this.setState({deck: cardsEsp});
      this.state.deck = cardsEsp;
      this.state.language = value;
      this.setState({language: value});
      this.setInterfaceLanguage(this.state.language);
      localStorage.setItem('language', "Español")
    }
  }

  //Sets language for the interface elements
  setInterfaceLanguage(language){
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

  collectIds(value){
    this.state.ids.push(value);
  }

  resetIds(){
    this.state.ids = [];
    this.setState({ids: []});
  }

  resetCounter(){
    this.setState({counter: 0});
  }

  increaseCounter(){
    this.setState({counter: this.state.counter + 1});
  }

  getLayout(value){
    this.state.layout = value;
    this.setState({layout: value});
  }

  render(){
    return (
      <main>
        <section className="ritual-table">
          <RitualSubjects/>
          <Layout getLayout={this.getLayout} layout={this.state.layout}/>
          <CardsGenerator collectIds={this.collectIds} resetIds={this.resetIds} counter={this.state.counter} increaseCounter={this.increaseCounter} resetCounter={this.resetCounter}/>
        </section>
        <section className="results">
          <Result ids={this.state.ids} layout={this.state.layout} cards={this.state.deck} language={this.state.language} resetIds={this.resetIds} resetCounter={this.resetCounter}/>
        </section>
      </main>
    )
  }
}

export default Main;