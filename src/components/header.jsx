import "../styles/header.scss";
import React from "react";
import { useEffect, useState, useRef } from "react";
import layoutNames from "../variables/layoutNames";

const Header = ({ setLayout, setLanguage }) => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [isOpen, setIsOpen] = useState(false);
  const header = useRef(null);
  const list = useRef(null);
  const layout = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    saveLayout();
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  function resizeHandler() {
    setScreenWidth(window.screen.width);
  }

  function revealBurgerMenu() {
    if (isOpen) {
      header.current.style.height = "2em";
      list.current.style.display = "none";
      setIsOpen(false);
    } else {
      header.current.style.height = "7.5em";
      list.current.style.display = "flex";
      setIsOpen(true);
    }
  }

  function saveLayout() {
    if (localStorage.getItem("layoutNumber")) {
      layout.current.value =
        layout.current[localStorage.getItem("layoutNumber")].value;
    }
  }

  return (
    <header
      ref={header}
      style={screenWidth > 496 ? { height: "4.25rem" } : { height: "2em" }}
    >
      <nav className="header__nav">
        <ul
          ref={list}
          className="header__ul"
          style={screenWidth > 496 ? { display: "flex" } : { display: "none" }}
        >
          <li className="header__li">
            <a href="#">Теория ТАРО</a>
          </li>
          <li className="header__li">
            <span>Расклады: </span>
            <select
              className="layouts"
              ref={layout}
              onChange={() => {
                setLayout(layoutNames[layout.current.value]);
                localStorage.setItem(
                  "layout",
                  layoutNames[layout.current.value]
                );
                localStorage.setItem("layoutNumber", layout.current.value);
              }}
            >
              <option className="layouts__option 1" value="0">
                Кельтский крест
              </option>
              <option className="layouts__option 2" value="1">
                Крест
              </option>
              <option className="layouts__option 3" value="2">
                Оракул любви
              </option>
              <option className="layouts__option 4" value="3">
                Компас
              </option>
              {/* <option className="layouts__option">Следующий шаг</option>
                <option className="layouts__option">Путь</option> */}
            </select>
          </li>
          <li className="header__li">
            <span>Язык: </span>
            <select
              className="language"
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
            >
              <option value="Русский" className="language__option">
                Русский
              </option>
              <option value="English" className="language__option">
                English
              </option>
              <option value="Español" className="language__option">
                Español
              </option>
            </select>
          </li>
        </ul>
        <img
          onClick={revealBurgerMenu}
          className="burger-menu"
          src="assets/IMG/burger_menu.png"
          alt="burger-menu"
        ></img>
      </nav>
    </header>
  );
};

export default Header;
