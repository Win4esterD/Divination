import React from 'react';
import '../styles/results.scss';
import WaiteIMGs from "../JSON/waite-images.json";
import ResetButtom from './Reset-button';


// Use these only when you want to run tests, generating all the cards in a deck
// import CardsEng from '../JSON/cards-en.json';
// import CardsRus from '../JSON/cards-rus.json';


class Result extends React.Component{

  constructor(props){
    super(props);
    this.resetButtonHandler = this.resetButtonHandler.bind(this);
  }

  generateOneCardResult(cardName, cardImage, arcaneDescription, prediction, meaning, love, profession, generally){
    const inLove = {
      "Русский": "В любви и отношениях - ",
      "English": "In love and relationships - ",
      "Español": "En amor y relaciones - ",
    };

    const InPofession = {
      "Русский": "В профессии - ",
      "English": "In profession - ",
      "Español": "En profesión - ",
    };

    const InGeneral = {
      "Русский": "В целом - ",
      "English": "In general - ",
      "Español": "En general - ",
    };

    const arcaneDesc = {
      "Русский": "Описание аркана:",
      "English": "Arcane description",
      "Español": "Descripción de arcano",
    };

    return(
      <div className="results-wrapper">
          <div className="card-block">
            <p className="arcane-name">{cardName}</p>
            <div className="arcane-image-div"><img className="arcane-image-img" src={cardImage}></img></div>
          </div>
          <div className="result-text">
            <p className="arcane-meaning">{arcaneDesc[this.props.language]}</p> 
            <p className="arcane-description">{arcaneDescription}</p>
            <p className="arcane-meaning">{meaning}</p>
            <p className="arcane-description">{prediction}</p>
            <div className="in-life-paragraphs">
              <p><span className="in-life">{inLove[this.props.language]}</span><span>{love}</span></p>
              <p><span className="in-life">{InPofession[this.props.language]}</span><span>{profession}</span></p>
              <p><span className="in-life">{InGeneral[this.props.language]}</span><span>{generally}</span></p>
            </div>
        </div>
      </div>
    );
  };

  //Allows to start over with current layout
  resetButtonHandler(){
    this.props.resetIds();
    this.props.resetCounter();
    const cards = document.querySelectorAll('.card');
    cards.forEach((el) => {
      el.removeAttribute('style');
    })
  }

  //Smoothly scrolls to the results page, where the first card is presented
  scrollToTheResult(){
    setTimeout(() => {
      const results = document.querySelector('.results-wrapper');
      if(results){
        results.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
        }
      }, 200)
  }

  celticCrossResult(){
    const predictions = [];
    const cards = this.props.cards;
    const ids = this.props.ids;
    if(this.props.language === "Русский"){
      predictions.push(...["Значение:", "Эмоции:", "Предложение:", "Перспективы:"]);
    }else if(this.props.language === "English"){
      predictions.push(...["Meaning:", "Emotions:", "Proposal:", "Perspectives:"]);
    }else if(this.props.language === "Español"){
      predictions.push(...["Significación:", "Emociones:", "Consejo:", "Perpectivas:"]);
    }

    if(this.props.ids.length === 10){
      return(
        <div className="celtic-cross-results">
          {this.generateOneCardResult(cards[ids[0] - 1].name, WaiteIMGs[ids[0] - 1].image, cards[ids[0] - 1].description, cards[ids[0] - 1].meaning, predictions[0], cards[ids[0] - 1].love.split('-').slice(1).join('-'), cards[ids[0] - 1].profession.split('-').slice(1).join('-'), cards[ids[0] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[1] - 1].name, WaiteIMGs[ids[1] - 1].image, cards[ids[1] - 1].description, cards[ids[1] - 1].meaning, predictions[0], cards[ids[1] - 1].love.split('-').slice(1).join('-'), cards[ids[1] - 1].profession.split('-').slice(1).join('-'), cards[ids[1] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[2] - 1].name, WaiteIMGs[ids[2] - 1].image, cards[ids[2] - 1].description, cards[ids[2] - 1].emotions, predictions[1], cards[ids[2] - 1].love.split('-').slice(1).join('-'), cards[ids[2] - 1].profession.split('-').slice(1).join('-'), cards[ids[2] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[3] - 1].name, WaiteIMGs[ids[3] - 1].image, cards[ids[3] - 1].description, cards[ids[3] - 1].emotions, predictions[1], cards[ids[3] - 1].love.split('-').slice(1).join('-'), cards[ids[3] - 1].profession.split('-').slice(1).join('-'), cards[ids[3] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[4] - 1].name, WaiteIMGs[ids[4] - 1].image, cards[ids[4] - 1].description, cards[ids[4] - 1].meaning, predictions[0], cards[ids[4] - 1].love.split('-').slice(1).join('-'), cards[ids[4] - 1].profession.split('-').slice(1).join('-'), cards[ids[4] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[5] - 1].name, WaiteIMGs[ids[5] - 1].image, cards[ids[5] - 1].description, cards[ids[5] - 1].perspectives, predictions[3], cards[ids[5] - 1].love.split('-').slice(1).join('-'), cards[ids[5] - 1].profession.split('-').slice(1).join('-'), cards[ids[5] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[6] - 1].name, WaiteIMGs[ids[6] - 1].image, cards[ids[6] - 1].description, cards[ids[6] - 1].emotions, predictions[1], cards[ids[6] - 1].love.split('-').slice(1).join('-'), cards[ids[6] - 1].profession.split('-').slice(1).join('-'), cards[ids[6] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[7] - 1].name, WaiteIMGs[ids[7] - 1].image, cards[ids[7] - 1].description, cards[ids[7] - 1].emotions, predictions[1], this.props.cards[ids[7] - 1].love.split('-').slice(1).join('-'), cards[ids[7] - 1].profession.split('-').slice(1).join('-'), cards[ids[7] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[8] - 1].name, WaiteIMGs[ids[8] - 1].image, cards[ids[8] - 1].description, cards[ids[8] - 1].perspectives, predictions[3], cards[ids[8] - 1].love.split('-').slice(1).join('-'), cards[ids[8] - 1].profession.split('-').slice(1).join('-'), cards[ids[8] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[9] - 1].name, WaiteIMGs[ids[9] - 1].image, cards[ids[9] - 1].description, cards[ids[9] - 1].perspectives, predictions[3], cards[ids[9] - 1].love.split('-').slice(1).join('-'), cards[ids[9] - 1].profession.split('-').slice(1).join('-'), cards[ids[9] - 1].generally.split('-').slice(1).join('-'))};
          <ResetButtom resetButtonHandler={this.resetButtonHandler} language={this.props.language}/>;
          {this.scrollToTheResult()}
        </div>
      
      )
    }
  }

  crossResults(){
    const predictions = [];
    const cards = this.props.cards;
    const ids = this.props.ids;
    if(this.props.language === "Русский"){
      predictions.push(...["Значение:", "Эмоции:", "Предложение:", "Перспективы:", "Не делайте этого:"]);
    }else if(this.props.language === "English"){
      predictions.push(...["Meaning:", "Emotions:", "Proposal:", "Perspectives:", "Don't do that:"]);
    }else if(this.props.language === "Español"){
      predictions.push(...["Significación:", "Emociones:", "Consejo:", "Perspectivas:", "No lo haga"]);
    }

    if(this.props.ids.length === 4){
      return(
        <div className="cross-res">
          {this.generateOneCardResult(cards[ids[0] - 1].name, WaiteIMGs[ids[0] - 1].image, cards[ids[0] - 1].description, cards[ids[0] - 1].meaning, predictions[0], cards[ids[0] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[0] - 1].profession.split('-').slice(1).join('-'), cards[ids[0] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[1] - 1].name, WaiteIMGs[ids[1] - 1].image, cards[ids[1] - 1].description, cards[ids[1] - 1].proposal, predictions[4], cards[ids[1] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[1] - 1].profession.split('-').slice(1).join('-'), cards[ids[1] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[2] - 1].name, WaiteIMGs[ids[2] - 1].image, cards[ids[2] - 1].description, cards[ids[2] - 1].proposal, predictions[2], cards[ids[2] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[2] - 1].profession.split('-').slice(1).join('-'), cards[ids[2] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[3] - 1].name, WaiteIMGs[ids[3] - 1].image, cards[ids[3] - 1].description, cards[ids[3] - 1].perspectives, predictions[3], cards[ids[3] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[3] - 1].profession.split('-').slice(1).join('-'), cards[ids[3] - 1].generally.split('-').slice(1).join('-'))};
          <ResetButtom resetButtonHandler={this.resetButtonHandler} language={this.props.language}/>;
          {this.scrollToTheResult()}
        </div>
      )
    }
  }

  loveOracleResults(){
    const predictions = [];
    const cards = this.props.cards;
    const ids = this.props.ids;
    if(this.props.language === "Русский"){
      predictions.push(...["Значение:", "Ваши чувства:", "Чувства человека к Вам:", "Совет оракула:"]);
    }else if(this.props.language === "English"){
      predictions.push(...["Meaning:", "Your feelings:", "What the person feels to you:", "Oracle's proposal:"]);
    }else if(this.props.language === "Español"){
      predictions.push(...["Significación:", "Sentimientos de usted:", "Que siente la persona a usted:", "El conjeso de Oráculo:"]);
    }

    if(this.props.ids.length === 4){
      return(
        <div className="love-oracle-results">
          {this.generateOneCardResult(cards[ids[0] - 1].name, WaiteIMGs[ids[0] - 1].image, cards[ids[0] - 1].description, cards[ids[0] - 1].meaning, predictions[0], cards[ids[0] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[0] - 1].profession.split('-').slice(1).join('-'), cards[ids[0] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[1] - 1].name, WaiteIMGs[ids[1] - 1].image, cards[ids[1] - 1].description, cards[ids[1] - 1].emotions, predictions[1], cards[ids[1] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[1] - 1].profession.split('-').slice(1).join('-'), cards[ids[1] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[2] - 1].name, WaiteIMGs[ids[2] - 1].image, cards[ids[2] - 1].description, cards[ids[2] - 1].emotions, predictions[2], cards[ids[2] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[2] - 1].profession.split('-').slice(1).join('-'), cards[ids[2] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[3] - 1].name, WaiteIMGs[ids[3] - 1].image, cards[ids[3] - 1].description, cards[ids[3] - 1].proposal, predictions[3], cards[ids[3] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[3] - 1].profession.split('-').slice(1).join('-'), cards[ids[3] - 1].generally.split('-').slice(1).join('-'))};
          <ResetButtom resetButtonHandler={this.resetButtonHandler} language={this.props.language}/>;
          {this.scrollToTheResult()};
        </div>
      )
    }
  };

  compasResults(){
    const predictions = [];
    const cards = this.props.cards;
    const ids = this.props.ids;

    if(this.props.language === "Русский"){
      predictions.push(...["Значение:", "Эмоции:", "Это будет в ближайшее время:", "К этому приведёт в результате:"]);
    }else if(this.props.language === "English"){
      predictions.push(...["Meaning:", "Emotions:", "This will happen soon:", "This will be the result:"]);
    }else if(this.props.language === "Español"){
      predictions.push(...["Significación:", "Emociones:", "Eso pasará pronto:", "Eso será en resultado:"]);
    }

    if(this.props.ids.length === 4){
      return(
        <div className="compas-results">
          {this.generateOneCardResult(cards[ids[0] - 1].name, WaiteIMGs[ids[0] - 1].image, cards[ids[0] - 1].description, cards[ids[0] - 1].meaning, predictions[0], cards[ids[0] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[0] - 1].profession.split('-').slice(1).join('-'), cards[ids[0] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[1] - 1].name, WaiteIMGs[ids[1] - 1].image, cards[ids[1] - 1].description, cards[ids[1] - 1].perspectives, predictions[2], cards[ids[1] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[1] - 1].profession.split('-').slice(1).join('-'), cards[ids[1] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[2] - 1].name, WaiteIMGs[ids[2] - 1].image, cards[ids[2] - 1].description, cards[ids[2] - 1].emotions, predictions[1], cards[ids[2] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[2] - 1].profession.split('-').slice(1).join('-'), cards[ids[2] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[3] - 1].name, WaiteIMGs[ids[3] - 1].image, cards[ids[3] - 1].description, cards[ids[3] - 1].perspectives, predictions[3], cards[ids[3] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[3] - 1].profession.split('-').slice(1).join('-'), cards[ids[3] - 1].generally.split('-').slice(1).join('-'))};
          <ResetButtom resetButtonHandler={this.resetButtonHandler} language={this.props.language}/>;
          {this.scrollToTheResult()};
        </div>
      )
    }
  }


  //This function only serves for the tests, to generate all the cards in a deck
  showAllCardsInResults(deck){
    const predictions = [];
    if(this.props.language === "Русский"){
      predictions.push(...["Значение:", "Эмоции:", "Предложение:", "Перспективы:"]);
    }else if(this.props.language === "English"){
      predictions.push(...["Meaning:", "Emotions:", "Proposal:", "Perspectives:"]);
    }else if(this.props.language === "Español"){
      predictions.push(...["Significación:", "Emociones:", "Consejo:", "Perspectives:"]);
    }
    

    return(
      <div className="all-cards-result">
        {deck.map((card, index) => {
          return this.generateOneCardResult(card.name, WaiteIMGs[index].image, card.description, card.meaning, predictions[0], card.love.split('-').slice(1).join('-'), card.profession.split('-').slice(1).join('-'), card.generally.split('-').slice(1).join('-'))
        })}
      </div>
    )
  }
  
  render(){
    if(this.props.layout === "Celtic Cross"){
      return (
        <div>{this.celticCrossResult()}
        </div>
      )
    }else if(this.props.layout === "Cross"){
      return (
        <div>{this.crossResults()}
        </div>
      )
    }else if(this.props.layout === "Love Oracle"){
      return (
        <div>{this.loveOracleResults()}
        </div>
      )
    }else if(this.props.layout === "Compas"){
      return(
        <div>{this.compasResults()}
        </div>
      )
    }


    // To use when generation of all cards in a deck needed

    // return(
    //   <div>
    //     {this.showAllCardsInResults(CardsRus)};
    //     </div>
    // )
    
  }
}

export default Result;