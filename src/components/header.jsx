import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import '../styles/header.scss'

class Header extends React.Component{
  render(){
    return (
      <header>
        <nav className="header__nav">
          <ul className="header__ul">
            <li className="header__li"><a href="#">Теория ТАРО</a></li>
            <li className="header__li">
              <span>Расклады: </span>
              <select className="layouts">
                <option className="layouts__option 1">Кельтский крест</option>
                <option className="layouts__option 2">Крест</option>
                <option className="layouts__option 3">Оракул любви</option>
                {/* <option className="layouts__option">Компас</option>
                <option className="layouts__option">Следующий шаг</option>
                <option className="layouts__option">Путь</option> */}
              </select>
            </li>
            <li className="header__li">
              <span>Язык: </span>
              <select className="language">
                <option className="language__option">Русский</option>
                <option className="language__option">English</option>
                <option className="language__option">Español</option>
              </select>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header