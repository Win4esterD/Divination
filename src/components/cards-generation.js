import React from "react";


class CardsGenerator extends React.Component{

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  generateCard(num){
    return (
      <div id={String(num)} className="card">{String(num)}</div>
    )
  }

  generateCards(){
    const result = [];
    const numCounter = [];

    while(result.length !== 78){
      let randInt = this.getRandomInt(0, 78);
      if(!numCounter.includes(randInt)){
        numCounter.push(randInt);
        result.push(this.generateCard(randInt))
      }
    }

    return result
  }

  render(){
    return (
      <div className="cards-wrapper">
        {this.generateCards().map((card) => {
          return card
        })}
      </div>
    )
  }
}

export default CardsGenerator