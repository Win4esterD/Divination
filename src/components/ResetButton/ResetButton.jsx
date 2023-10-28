import React from 'react';
import './resetButton.scss';

const buttonLanguages = {
  Русский: "Начать Заново",
  English: "Start Over",
  Español: "De Nuevo",
};

const ResetButton = ({ resetButtonHandler, language }) => {
  return (
    <button className="reset-button" onClick={resetButtonHandler}>
      {buttonLanguages[language]}
    </button>
  );
};

export default ResetButton;