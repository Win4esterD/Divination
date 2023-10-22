import React from "react";
import '../styles/greetings-menu.scss';

const GreetingsMenu = () => {
  function setText(){
    const russian = "Добро пожаловать в приложение для гадания на картах ТАРО. Это твой ритуальный стол для гадания. Выбери расклад в верхней части экрана, подумай о вопросе, который хочешь задать оракулу, после чего начни тянуть карты. Более подробно о раскладах можешь узнать в разделе “Теория”.";
    return russian;
  }

    return(
      <div className="greetings-menu">
        <div className="greetings">
          <p className="greetings-text">{setText()}</p>
          <button className="ok-button">
            <b className="ok">OK</b>
          </button>
        </div>
      </div>
    )
}

export default GreetingsMenu;