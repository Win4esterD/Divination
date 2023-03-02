import React from 'react';
import '../styles/results.scss';
import WaiteIMGs from "../JSON/waite-images.json";


class Result extends React.Component{

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

  celticCrossResult(){
    const predictions = [];
    if(this.props.language === "Русский"){
      predictions.push(...["Значение", "Эмоции", "Предложение", "Перспективы"])
    }

    if(this.props.ids.length === 10){
      return(
        <div className="celtic-cross-results">
          {this.generateOneCardResult(this.props.cards[this.props.ids[0] - 1].name, WaiteIMGs[this.props.ids[0] - 1].image, this.props.cards[this.props.ids[0] - 1].description, this.props.cards[this.props.ids[0] - 1].meaning, predictions[0], this.props.cards[this.props.ids[0] - 1].love.split('-')[1], this.props.cards[this.props.ids[0] - 1].profession.split('-')[1], this.props.cards[this.props.ids[0] - 1].generally.split('-')[1])}
          {this.generateOneCardResult(this.props.cards[this.props.ids[1] - 1].name, WaiteIMGs[this.props.ids[1] - 1].image, this.props.cards[this.props.ids[1] - 1].description, this.props.cards[this.props.ids[1] - 1].meaning, predictions[0], this.props.cards[this.props.ids[1] - 1].love.split('-')[1], this.props.cards[this.props.ids[1] - 1].profession.split('-')[1], this.props.cards[this.props.ids[1] - 1].generally.split('-')[1])}
          {this.generateOneCardResult(this.props.cards[this.props.ids[2] - 1].name, WaiteIMGs[this.props.ids[2] - 1].image, this.props.cards[this.props.ids[2] - 1].description, this.props.cards[this.props.ids[2] - 1].emotions, predictions[1], this.props.cards[this.props.ids[2] - 1].love.split('-')[1], this.props.cards[this.props.ids[2] - 1].profession.split('-')[1], this.props.cards[this.props.ids[2] - 1].generally.split('-')[1])}
          {this.generateOneCardResult(this.props.cards[this.props.ids[3] - 1].name, WaiteIMGs[this.props.ids[3] - 1].image, this.props.cards[this.props.ids[3] - 1].description, this.props.cards[this.props.ids[3] - 1].emotions, predictions[1], this.props.cards[this.props.ids[3] - 1].love.split('-')[1], this.props.cards[this.props.ids[3] - 1].profession.split('-')[1], this.props.cards[this.props.ids[3] - 1].generally.split('-')[1])}
          {this.generateOneCardResult(this.props.cards[this.props.ids[4] - 1].name, WaiteIMGs[this.props.ids[4] - 1].image, this.props.cards[this.props.ids[4] - 1].description, this.props.cards[this.props.ids[4] - 1].meaning, predictions[0], this.props.cards[this.props.ids[4] - 1].love.split('-')[1], this.props.cards[this.props.ids[4] - 1].profession.split('-')[1], this.props.cards[this.props.ids[4] - 1].generally.split('-')[1])}
          {this.generateOneCardResult(this.props.cards[this.props.ids[5] - 1].name, WaiteIMGs[this.props.ids[5] - 1].image, this.props.cards[this.props.ids[5] - 1].description, this.props.cards[this.props.ids[5] - 1].perspectives, predictions[3], this.props.cards[this.props.ids[5] - 1].love.split('-')[1], this.props.cards[this.props.ids[5] - 1].profession.split('-')[1], this.props.cards[this.props.ids[5] - 1].generally.split('-')[1])}
          {this.generateOneCardResult(this.props.cards[this.props.ids[6] - 1].name, WaiteIMGs[this.props.ids[6] - 1].image, this.props.cards[this.props.ids[6] - 1].description, this.props.cards[this.props.ids[6] - 1].emotions, predictions[1], this.props.cards[this.props.ids[6] - 1].love.split('-')[1], this.props.cards[this.props.ids[6] - 1].profession.split('-')[1], this.props.cards[this.props.ids[6] - 1].generally.split('-')[1])}
          {this.generateOneCardResult(this.props.cards[this.props.ids[7] - 1].name, WaiteIMGs[this.props.ids[7] - 1].image, this.props.cards[this.props.ids[7] - 1].description, this.props.cards[this.props.ids[7] - 1].emotions, predictions[1], this.props.cards[this.props.ids[7] - 1].love.split('-')[1], this.props.cards[this.props.ids[7] - 1].profession.split('-')[1], this.props.cards[this.props.ids[7] - 1].generally.split('-')[1])}
          {this.generateOneCardResult(this.props.cards[this.props.ids[8] - 1].name, WaiteIMGs[this.props.ids[8] - 1].image, this.props.cards[this.props.ids[8] - 1].description, this.props.cards[this.props.ids[8] - 1].perspectives, predictions[3], this.props.cards[this.props.ids[8] - 1].love.split('-')[1], this.props.cards[this.props.ids[8] - 1].profession.split('-')[1], this.props.cards[this.props.ids[8] - 1].generally.split('-')[1])}
          {this.generateOneCardResult(this.props.cards[this.props.ids[9] - 1].name, WaiteIMGs[this.props.ids[9] - 1].image, this.props.cards[this.props.ids[9] - 1].description, this.props.cards[this.props.ids[9] - 1].perspectives, predictions[3], this.props.cards[this.props.ids[9] - 1].love.split('-')[1], this.props.cards[this.props.ids[9] - 1].profession.split('-')[1], this.props.cards[this.props.ids[9] - 1].generally.split('-')[1])}
        </div>
      
      )
    }
  }
  
  render(){
    if(this.props.layout === "Celtic Cross"){
      return (
        <div>{this.celticCrossResult()}</div>
      )
    }
  }
}

export default Result;