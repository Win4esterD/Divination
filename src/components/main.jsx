import React from 'react';
import '../styles/ritual-table.scss';
import '../styles/results.scss';
import RitualSubjects from './ritual-subjects';
import CardsGenerator from './cards-generator';
import Layout from './Layout';
import Result from './Result';
import cardsRus from "../JSON/cards-rus.json";

class Main extends React.Component{

  state = {
    ids: [],
    counter: 0,
    layout: "Celtic Cross",
    deck: '',
    language: '',
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
    this.determineLanguage(language.value)
    language.addEventListener('change', () => {
      this.determineLanguage(language.value);
    });
  }

  determineLanguage(value){
    if(value === "Русский"){
      this.setState({deck: cardsRus});
      this.state.deck = cardsRus;
      this.state.language = value;
      this.setState({language: value});
    }else if(value === "English"){
      this.setState({deck: cardsRus});
      this.state.deck = cardsRus;
      this.state.language = value;
      this.setState({language: value});
    }else if(value === "Español"){
      this.setState({deck: cardsRus});
      this.state.deck = cardsRus;
      this.state.language = value;
      this.setState({language: value});
    }
  }

  collectIds(value){
    this.state.ids.push(value);
  }

  resetIds(){
    this.state.ids = [];
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
          <Result ids={this.state.ids} layout={this.state.layout} cards={this.state.deck} language={this.state.language}/>
        </section>
      </main>
    )
  }
}

export default Main;