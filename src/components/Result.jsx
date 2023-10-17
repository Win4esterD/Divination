import React from "react";
import '../styles/results.scss';
import WaiteIMGs from "../JSON/waite-images.json";
import ResetButtom from './Reset-button';



// Use these only when you want to run tests, generating all the cards in a deck
// import CardsEng from '../JSON/cards-en.json';
// import CardsRus from '../JSON/cards-rus.json';

const inLove = {
  Русский: "В любви и отношениях - ",
  English: "In love and relationships - ",
  Español: "En amor y relaciones - ",
};

const InPofession = {
  Русский: "В профессии - ",
  English: "In profession - ",
  Español: "En profesión - ",
};

const InGeneral = {
  Русский: "В целом - ",
  English: "In general - ",
  Español: "En general - ",
};

const arcaneDesc = {
  Русский: "Описание аркана:",
  English: "Arcane description",
  Español: "Descripción de arcano",
};


const Result = ({
  ids,
  layout,
  cards,
  language,
  resetIds,
  resetCounter,
  layoutCards,
  results,
}) => {
  function generateOneCardResult(
    cardName,
    cardImage,
    arcaneDescription,
    prediction,
    meaning,
    love,
    profession,
    generally
  ) {
    return (
      <div className="results-wrapper">
        <div className="card-block">
          <p className="arcane-name"></p>
          <div className="arcane-image-div">
            <img className="arcane-image-img" src={cardImage}></img>
          </div>
        </div>
        <div className="result-text">
          <p className="arcane-meaning">{arcaneDesc[language]}</p>
          <p className="arcane-description">{arcaneDescription}</p>
          <p className="arcane-meaning">{meaning}</p>
          <p className="arcane-description">{prediction}</p>
          <div className="in-life-paragraphs">
            <p>
              <span className="in-life">{inLove[language]}</span>
              <span>{love}</span>
            </p>
            <p>
              <span className="in-life">{InPofession[language]}</span>
              <span>{profession}</span>
            </p>
            <p>
              <span className="in-life">{InGeneral[language]}</span>
              <span>{generally}</span>
            </p>
          </div>
        </div>
      </div>
    );
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

  //Smoothly scrolls to the results page, where the first card is presented
  function scrollToTheResult() {
    setTimeout(() => {
      if (results.current) {
        results.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 200);
  }

  function celticCrossResult() {
    const predictions = [];
    if (language === "Русский") {
      predictions.push(
        ...["Значение:", "Эмоции:", "Предложение:", "Перспективы:"]
      );
    } else if (language === "English") {
      predictions.push(
        ...["Meaning:", "Emotions:", "Proposal:", "Perspectives:"]
      );
    } else if (language === "Español") {
      predictions.push(
        ...["Significación:", "Emociones:", "Consejo:", "Perpectivas:"]
      );
    }

    if (ids.length === 10) {
      return (
        <div className="celtic-cross-results">
          {generateOneCardResult(
            cards[ids[0] - 1].name,
            WaiteIMGs[ids[0] - 1].image,
            cards[ids[0] - 1].description,
            cards[ids[0] - 1].meaning,
            predictions[0],
            cards[ids[0] - 1].love.split("-").slice(1).join("-"),
            cards[ids[0] - 1].profession.split("-").slice(1).join("-"),
            cards[ids[0] - 1].generally.split("-").slice(1).join("-")
          )}
          ;
          {generateOneCardResult(
            cards[ids[1] - 1].name,
            WaiteIMGs[ids[1] - 1].image,
            cards[ids[1] - 1].description,
            cards[ids[1] - 1].meaning,
            predictions[0],
            cards[ids[1] - 1].love.split("-").slice(1).join("-"),
            cards[ids[1] - 1].profession.split("-").slice(1).join("-"),
            cards[ids[1] - 1].generally.split("-").slice(1).join("-")
          )}
          ;
          {generateOneCardResult(
            cards[ids[2] - 1].name,
            WaiteIMGs[ids[2] - 1].image,
            cards[ids[2] - 1].description,
            cards[ids[2] - 1].emotions,
            predictions[1],
            cards[ids[2] - 1].love.split("-").slice(1).join("-"),
            cards[ids[2] - 1].profession.split("-").slice(1).join("-"),
            cards[ids[2] - 1].generally.split("-").slice(1).join("-")
          )}
          ;
          {generateOneCardResult(
            cards[ids[3] - 1].name,
            WaiteIMGs[ids[3] - 1].image,
            cards[ids[3] - 1].description,
            cards[ids[3] - 1].emotions,
            predictions[1],
            cards[ids[3] - 1].love.split("-").slice(1).join("-"),
            cards[ids[3] - 1].profession.split("-").slice(1).join("-"),
            cards[ids[3] - 1].generally.split("-").slice(1).join("-")
          )}
          ;
          {generateOneCardResult(
            cards[ids[4] - 1].name,
            WaiteIMGs[ids[4] - 1].image,
            cards[ids[4] - 1].description,
            cards[ids[4] - 1].meaning,
            predictions[0],
            cards[ids[4] - 1].love.split("-").slice(1).join("-"),
            cards[ids[4] - 1].profession.split("-").slice(1).join("-"),
            cards[ids[4] - 1].generally.split("-").slice(1).join("-")
          )}
          ;
          {generateOneCardResult(
            cards[ids[5] - 1].name,
            WaiteIMGs[ids[5] - 1].image,
            cards[ids[5] - 1].description,
            cards[ids[5] - 1].perspectives,
            predictions[3],
            cards[ids[5] - 1].love.split("-").slice(1).join("-"),
            cards[ids[5] - 1].profession.split("-").slice(1).join("-"),
            cards[ids[5] - 1].generally.split("-").slice(1).join("-")
          )}
          ;
          {generateOneCardResult(
            cards[ids[6] - 1].name,
            WaiteIMGs[ids[6] - 1].image,
            cards[ids[6] - 1].description,
            cards[ids[6] - 1].emotions,
            predictions[1],
            cards[ids[6] - 1].love.split("-").slice(1).join("-"),
            cards[ids[6] - 1].profession.split("-").slice(1).join("-"),
            cards[ids[6] - 1].generally.split("-").slice(1).join("-")
          )}
          ;
          {generateOneCardResult(
            cards[ids[7] - 1].name,
            WaiteIMGs[ids[7] - 1].image,
            cards[ids[7] - 1].description,
            cards[ids[7] - 1].emotions,
            predictions[1],
            cards[ids[7] - 1].love.split("-").slice(1).join("-"),
            cards[ids[7] - 1].profession.split("-").slice(1).join("-"),
            cards[ids[7] - 1].generally.split("-").slice(1).join("-")
          )}
          ;
          {generateOneCardResult(
            cards[ids[8] - 1].name,
            WaiteIMGs[ids[8] - 1].image,
            cards[ids[8] - 1].description,
            cards[ids[8] - 1].perspectives,
            predictions[3],
            cards[ids[8] - 1].love.split("-").slice(1).join("-"),
            cards[ids[8] - 1].profession.split("-").slice(1).join("-"),
            cards[ids[8] - 1].generally.split("-").slice(1).join("-")
          )}
          ;
          {generateOneCardResult(
            cards[ids[9] - 1].name,
            WaiteIMGs[ids[9] - 1].image,
            cards[ids[9] - 1].description,
            cards[ids[9] - 1].perspectives,
            predictions[3],
            cards[ids[9] - 1].love.split("-").slice(1).join("-"),
            cards[ids[9] - 1].profession.split("-").slice(1).join("-"),
            cards[ids[9] - 1].generally.split("-").slice(1).join("-")
          )}
          ;
          <ResetButtom
            resetButtonHandler={resetButtonHandler}
            language={language}
          />
          ;{scrollToTheResult()}
        </div>
      );
    }
  }

  function crossResults() {
    const predictions = [];
    if (language === "Русский") {
      predictions.push(
        ...[
          "Значение:",
          "Эмоции:",
          "Предложение:",
          "Перспективы:",
          "Не делайте этого:",
        ]
      );
    } else if (language === "English") {
      predictions.push(
        ...[
          "Meaning:",
          "Emotions:",
          "Proposal:",
          "Perspectives:",
          "Don't do that:",
        ]
      );
    } else if (language === "Español") {
      predictions.push(
        ...[
          "Significación:",
          "Emociones:",
          "Consejo:",
          "Perspectivas:",
          "No lo hagas",
        ]
      );
    }

    if (ids.length === 4) {
      return (
        <div className="cross-res">
          {generateOneCardResult(
            cards[ids[0] - 1].name,
            WaiteIMGs[ids[0] - 1].image,
            cards[ids[0] - 1].description,
            cards[ids[0] - 1].meaning,
            predictions[0],
            cards[ids[0] - 1].love.split("-").slice(1).join("-"),
            cards[ids[0] - 1].profession.split("-").slice(1).join("-"),
            cards[ids[0] - 1].generally.split("-").slice(1).join("-")
          )}
          ;
          {generateOneCardResult(
            cards[ids[1] - 1].name,
            WaiteIMGs[ids[1] - 1].image,
            cards[ids[1] - 1].description,
            cards[ids[1] - 1].proposal,
            predictions[4],
            cards[ids[1] - 1].love.split("-").slice(1).join("-"),
            cards[ids[1] - 1].profession.split("-").slice(1).join("-"),
            cards[ids[1] - 1].generally.split("-").slice(1).join("-")
          )}
          ;
          {generateOneCardResult(
            cards[ids[2] - 1].name,
            WaiteIMGs[ids[2] - 1].image,
            cards[ids[2] - 1].description,
            cards[ids[2] - 1].proposal,
            predictions[2],
            cards[ids[2] - 1].love.split("-").slice(1).join("-"),
            cards[ids[2] - 1].profession.split("-").slice(1).join("-"),
            cards[ids[2] - 1].generally.split("-").slice(1).join("-")
          )}
          ;
          {generateOneCardResult(
            cards[ids[3] - 1].name,
            WaiteIMGs[ids[3] - 1].image,
            cards[ids[3] - 1].description,
            cards[ids[3] - 1].perspectives,
            predictions[3],
            cards[ids[3] - 1].love.split("-").slice(1).join("-"),
            cards[ids[3] - 1].profession.split("-").slice(1).join("-"),
            cards[ids[3] - 1].generally.split("-").slice(1).join("-")
          )}
          ;
          <ResetButtom
            resetButtonHandler={resetButtonHandler}
            language={language}
          />
          ;{scrollToTheResult()}
        </div>
      );
    }
  }

  function loveOracleResults() {
    const predictions = [];
    if (language === "Русский") {
      predictions.push(
        ...[
          "Значение:",
          "Ваши чувства:",
          "Чувства человека к Вам:",
          "Совет оракула:",
        ]
      );
    } else if (language === "English") {
      predictions.push(
        ...[
          "Meaning:",
          "Your feelings:",
          "What the person feels to you:",
          "Oracle's proposal:",
        ]
      );
    } else if (language === "Español") {
      predictions.push(
        ...[
          "Significación:",
          "Sentimientos de usted:",
          "Que siente la persona a usted:",
          "El conjeso de Oráculo:",
        ]
      );
    }

    if (ids.length === 4) {
      return (
        <div className="love-oracle-results">
          {generateOneCardResult(
            cards[ids[0] - 1].name,
            WaiteIMGs[ids[0] - 1].image,
            cards[ids[0] - 1].description,
            cards[ids[0] - 1].meaning,
            predictions[0],
            cards[ids[0] - 1].love.split("-").slice(1).join("-"),
            cards[ids[0] - 1].profession.split("-").slice(1).join("-"),
            cards[ids[0] - 1].generally.split("-").slice(1).join("-")
          )}
          ;
          {generateOneCardResult(
            cards[ids[1] - 1].name,
            WaiteIMGs[ids[1] - 1].image,
            cards[ids[1] - 1].description,
            cards[ids[1] - 1].emotions,
            predictions[1],
            cards[ids[1] - 1].love.split("-").slice(1).join("-"),
            cards[ids[1] - 1].profession.split("-").slice(1).join("-"),
            cards[ids[1] - 1].generally.split("-").slice(1).join("-")
          )}
          ;
          {generateOneCardResult(
            cards[ids[2] - 1].name,
            WaiteIMGs[ids[2] - 1].image,
            cards[ids[2] - 1].description,
            cards[ids[2] - 1].emotions,
            predictions[2],
            cards[ids[2] - 1].love.split("-").slice(1).join("-"),
            cards[ids[2] - 1].profession.split("-").slice(1).join("-"),
            cards[ids[2] - 1].generally.split("-").slice(1).join("-")
          )}
          ;
          {generateOneCardResult(
            cards[ids[3] - 1].name,
            WaiteIMGs[ids[3] - 1].image,
            cards[ids[3] - 1].description,
            cards[ids[3] - 1].proposal,
            predictions[3],
            cards[ids[3] - 1].love.split("-").slice(1).join("-"),
            cards[ids[3] - 1].profession.split("-").slice(1).join("-"),
            cards[ids[3] - 1].generally.split("-").slice(1).join("-")
          )}
          ;
          <ResetButtom
            resetButtonHandler={resetButtonHandler}
            language={language}
          />
          ;{scrollToTheResult()};
        </div>
      );
    }
  }

  function compasResults() {
    const predictions = [];

    if (language === "Русский") {
      predictions.push(
        ...[
          "Значение:",
          "Эмоции:",
          "Это будет в ближайшее время:",
          "К этому приведёт в результате:",
        ]
      );
    } else if (language === "English") {
      predictions.push(
        ...[
          "Meaning:",
          "Emotions:",
          "This will happen soon:",
          "This will be the result:",
        ]
      );
    } else if (language === "Español") {
      predictions.push(
        ...[
          "Significación:",
          "Emociones:",
          "Eso pasará pronto:",
          "Eso será en resultado:",
        ]
      );
    }

    if (ids.length === 4) {
      return (
        <div className="compas-results">
          {generateOneCardResult(
            cards[ids[0] - 1].name,
            WaiteIMGs[ids[0] - 1].image,
            cards[ids[0] - 1].description,
            cards[ids[0] - 1].meaning,
            predictions[0],
            cards[ids[0] - 1].love.split("-").slice(1).join("-"),
            cards[ids[0] - 1].profession.split("-").slice(1).join("-"),
            cards[ids[0] - 1].generally.split("-").slice(1).join("-")
          )}
          ;
          {generateOneCardResult(
            cards[ids[1] - 1].name,
            WaiteIMGs[ids[1] - 1].image,
            cards[ids[1] - 1].description,
            cards[ids[1] - 1].perspectives,
            predictions[2],
            cards[ids[1] - 1].love.split("-").slice(1).join("-"),
            cards[ids[1] - 1].profession.split("-").slice(1).join("-"),
            cards[ids[1] - 1].generally.split("-").slice(1).join("-")
          )}
          ;
          {generateOneCardResult(
            cards[ids[2] - 1].name,
            WaiteIMGs[ids[2] - 1].image,
            cards[ids[2] - 1].description,
            cards[ids[2] - 1].emotions,
            predictions[1],
            cards[ids[2] - 1].love.split("-").slice(1).join("-"),
            cards[ids[2] - 1].profession.split("-").slice(1).join("-"),
            cards[ids[2] - 1].generally.split("-").slice(1).join("-")
          )}
          ;
          {generateOneCardResult(
            cards[ids[3] - 1].name,
            WaiteIMGs[ids[3] - 1].image,
            cards[ids[3] - 1].description,
            cards[ids[3] - 1].perspectives,
            predictions[3],
            cards[ids[3] - 1].love.split("-").slice(1).join("-"),
            cards[ids[3] - 1].profession.split("-").slice(1).join("-"),
            cards[ids[3] - 1].generally.split("-").slice(1).join("-")
          )}
          ;
          <ResetButtom
            resetButtonHandler={resetButtonHandler}
            language={language}
          />
          ;{scrollToTheResult()};
        </div>
      );
    }
  }

  //This function only serves for the tests, to generate all the cards in a deck
  /*   function showAllCardsInResults(deck) {
    const predictions = [];
    if (language === "Русский") {
      predictions.push(
        ...["Значение:", "Эмоции:", "Предложение:", "Перспективы:"]
      );
    } else if (language === "English") {
      predictions.push(
        ...["Meaning:", "Emotions:", "Proposal:", "Perspectives:"]
      );
    } else if (language === "Español") {
      predictions.push(
        ...["Significación:", "Emociones:", "Consejo:", "Perspectives:"]
      );
    }

    return (
      <div className="all-cards-result">
        {deck.map((card, index) => {
          return generateOneCardResult(
            card.name,
            WaiteIMGs[index].image,
            card.description,
            card.meaning,
            predictions[0],
            card.love.split("-").slice(1).join("-"),
            card.profession.split("-").slice(1).join("-"),
            card.generally.split("-").slice(1).join("-")
          );
        })}
      </div>
    );
  } */

  if (layout === "Celtic Cross") {
    return <div>{celticCrossResult()}</div>;
  } else if (layout === "Cross") {
    return <div>{crossResults()}</div>;
  } else if (layout === "Love Oracle") {
    return <div>{loveOracleResults()}</div>;
  } else if (layout === "Compas") {
    return <div>{compasResults()}</div>;
  }

  // To use when generation of all cards in a deck needed

  // return(
  //   <div>
  //     {showAllCardsInResults(cardsEsp)};
  //     </div>
  // )
};

export default Result;