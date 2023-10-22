import React from 'react';
// import '../styles/components/reset-button.scss';

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