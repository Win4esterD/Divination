import React from 'react';
import '../styles/results.scss';
import WaiteIMGs from "../JSON/waite-images.json";
import ResetButtom from './Reset-button';


class Result extends React.Component{

  constructor(props){
    super(props);
    this.resetButtonHandler = this.resetButtonHandler.bind(this);
  }

  generateOneCardResult(cardName, cardImage, arcaneDescription, prediction, meaning, love, profession, generally){
    return(
      <div className="results-wrapper">
          <div className="card-block">
            <p className="arcane-name">{cardName}</p>
            <div className="arcane-image-div"><img className="arcane-image-img" src={cardImage}></img></div>
          </div>
          <div className="result-text">
            <p className="arcane-meaning">Описание аркана:</p> 
            <p className="arcane-description">{arcaneDescription}</p>
            <p className="arcane-meaning">{meaning}</p>
            <p className="arcane-description">{prediction}</p>
            <div className="in-life-paragraphs">
              <p><span className="in-life">В любви и отношениях - </span><span>{love}</span></p>
              <p><span className="in-life">В профессии - </span><span>{profession}</span></p>
              <p><span className="in-life">В целом - </span><span>{generally}</span></p>
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
    }

    if(this.props.ids.length === 4){
      return(
        <div className="cross-res">
          {this.generateOneCardResult(cards[ids[0] - 1].name, WaiteIMGs[ids[0] - 1].image, cards[ids[0] - 1].description, cards[ids[0] - 1].meaning, predictions[0], cards[ids[0] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[0] - 1].profession.split('-').slice(1).join('-'), cards[ids[0] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[1] - 1].name, WaiteIMGs[ids[1] - 1].image, cards[ids[1] - 1].description, cards[ids[1] - 1].proposal, predictions[4], cards[ids[1] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[1] - 1].profession.split('-').slice(1).join('-'), cards[ids[1] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[2] - 1].name, WaiteIMGs[ids[2] - 1].image, cards[ids[2] - 1].description, cards[ids[2] - 1].proposal, predictions[2], cards[ids[2] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[2] - 1].profession.split('-').slice(1).join('-'), cards[ids[2] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[3] - 1].name, WaiteIMGs[ids[3] - 1].image, cards[ids[3] - 1].description, cards[ids[3] - 1].perspectives, predictions[3], cards[ids[3] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[3] - 1].profession.split('-').slice(1).join('-'), cards[ids[3] - 1].generally.split('-').slice(1).join('-'))};
          <button className="reset-button" onClick={this.resetButtonHandler}>Начать заново</button>
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
    }

    if(this.props.ids.length === 4){
      return(
        <div className="love-oracle-results">
          {this.generateOneCardResult(cards[ids[0] - 1].name, WaiteIMGs[ids[0] - 1].image, cards[ids[0] - 1].description, cards[ids[0] - 1].meaning, predictions[0], cards[ids[0] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[0] - 1].profession.split('-').slice(1).join('-'), cards[ids[0] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[1] - 1].name, WaiteIMGs[ids[1] - 1].image, cards[ids[1] - 1].description, cards[ids[1] - 1].emotions, predictions[1], cards[ids[1] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[1] - 1].profession.split('-').slice(1).join('-'), cards[ids[1] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[2] - 1].name, WaiteIMGs[ids[2] - 1].image, cards[ids[2] - 1].description, cards[ids[2] - 1].emotions, predictions[2], cards[ids[2] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[2] - 1].profession.split('-').slice(1).join('-'), cards[ids[2] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[3] - 1].name, WaiteIMGs[ids[3] - 1].image, cards[ids[3] - 1].description, cards[ids[3] - 1].proposal, predictions[3], cards[ids[3] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[3] - 1].profession.split('-').slice(1).join('-'), cards[ids[3] - 1].generally.split('-').slice(1).join('-'))};
          <button className="reset-button" onClick={this.resetButtonHandler}>Начать заново</button>;
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
      predictions.push(...["Значение:", "Эмоции:", "Это будет в ближайшее время:", "К этому всё приведёт:"]);
    }

    if(this.props.ids.length === 4){
      return(
        <div className="compas-results">
          {this.generateOneCardResult(cards[ids[0] - 1].name, WaiteIMGs[ids[0] - 1].image, cards[ids[0] - 1].description, cards[ids[0] - 1].meaning, predictions[0], cards[ids[0] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[0] - 1].profession.split('-').slice(1).join('-'), cards[ids[0] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[1] - 1].name, WaiteIMGs[ids[1] - 1].image, cards[ids[1] - 1].description, cards[ids[1] - 1].perspectives, predictions[2], cards[ids[1] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[1] - 1].profession.split('-').slice(1).join('-'), cards[ids[1] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[2] - 1].name, WaiteIMGs[ids[2] - 1].image, cards[ids[2] - 1].description, cards[ids[2] - 1].emotions, predictions[1], cards[ids[2] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[2] - 1].profession.split('-').slice(1).join('-'), cards[ids[2] - 1].generally.split('-').slice(1).join('-'))};
          {this.generateOneCardResult(cards[ids[3] - 1].name, WaiteIMGs[ids[3] - 1].image, cards[ids[3] - 1].description, cards[ids[3] - 1].perspectives, predictions[3], cards[ids[3] - 1].love.split('-').slice(1).join('-'), cards[this.props.ids[3] - 1].profession.split('-').slice(1).join('-'), cards[ids[3] - 1].generally.split('-').slice(1).join('-'))};
          <button className="reset-button" onClick={this.resetButtonHandler}>Начать заново</button>;
          <ResetButtom resetButtonHandler={this.resetButtonHandler} language={this.props.language}/>;
          {this.scrollToTheResult()};
        </div>
      )
    }
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

    // return(
      
    //   <div className="celtic-cross-results">
    //       {this.generateOneCardResult(CardsRus[17 - 1].name, WaiteIMGs[17 - 1].image, CardsRus[17 - 1].description, CardsRus[17 - 1].meaning, "Не делайте этого:", CardsRus[17 - 1].love.split('-')[1], CardsRus[17 - 1].profession.split('-')[1], CardsRus[17 - 1].generally.split('-').slice(1).join('-'))};
    //       {this.generateOneCardResult(CardsRus[5 - 1].name, WaiteIMGs[5 - 1].image, CardsRus[5 - 1].description, CardsRus[5 - 1].meaning, "Сейчас этого делать не стоит", CardsRus[5 - 1].love.split('-')[1], CardsRus[5 - 1].profession.split('-')[1], CardsRus[5 - 1].generally.split('-').slice(1).join('-'))};
    //       {this.generateOneCardResult(CardsRus[6 - 1].name, WaiteIMGs[6 - 1].image, CardsRus[6 - 1].description, CardsRus[6 - 1].meaning, "Сейчас этого делать не стоит", CardsRus[6 - 1].love.split('-')[1], CardsRus[6 - 1].profession.split('-')[1], CardsRus[6 - 1].generally.split('-').slice(1).join('-'))};
    //       {this.generateOneCardResult(CardsRus[15 - 1].name, WaiteIMGs[15 - 1].image, CardsRus[15 - 1].description, CardsRus[15 - 1].meaning, "Сейчас этого делать не стоит", CardsRus[15 - 1].love.split('-')[1], CardsRus[15 - 1].profession.split('-')[1], CardsRus[15 - 1].generally.split('-').slice(1).join('-'))};
    //       {this.generateOneCardResult(CardsRus[37 - 1].name, WaiteIMGs[37 - 1].image, CardsRus[37 - 1].description, CardsRus[37 - 1].meaning, "Сейчас этого делать не стоит", CardsRus[37 - 1].love.split('-')[1], CardsRus[37 - 1].profession.split('-')[1], CardsRus[37 - 1].generally.split('-').slice(1).join('-'))};
          
    //     </div>
    // )
    
  }
}

export default Result;