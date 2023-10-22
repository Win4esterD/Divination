"use client";
import styles from "./header.module.scss";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { layoutNames } from "../../variables/layoutData";
import interfaceLocalizations from "../../variables/interfaceLocalizations";
import Image from "next/image";
import burgerImg from "../../../public/assets/IMG/burger_menu.png";


const Header = ({ setLayout, setLanguage, language }) => {
  const [screenWidth, setScreenWidth] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const header = useRef(null);
  const list = useRef(null);
  const layout = useRef(null);
  const langMenu = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    setScreenWidth(window.screen.width);
    getLayout();
    getLanguage();
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

  function getLayout() {
    if (localStorage.getItem("layoutNumber")) {
      layout.current.value = layout.current.value =
        localStorage.getItem("layoutNumber");
    }
  }

  function getLanguage() {
    if (localStorage.getItem("language")) {
      langMenu.current.value = localStorage.getItem("language");
    }
  }

  return (
    <header
      className={styles.header}
      ref={header}
      style={screenWidth > 496 ? { height: "4.25rem" } : { height: "2em" }}
    >
      <nav className="header__nav">
        <ul
          ref={list}
          className={styles.header__ul}
          style={screenWidth > 496 ? { display: "flex" } : { display: "none" }}
        >
          <li className={styles.header__li}>
            <a href="#">{interfaceLocalizations[language][0]}</a>
          </li>
          <li className={styles.header__li}>
            <span>{interfaceLocalizations[language][1]}</span>
            <select
              className={styles.layouts}
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
              <option className={styles.layouts__option + " " + "1"} value="0">
                {interfaceLocalizations[language][2]}
              </option>
              <option className={styles.layouts__option + " " + "2"} value="1">
                {interfaceLocalizations[language][3]}
              </option>
              <option className={styles.layouts__option + " " + "3"} value="2">
                {interfaceLocalizations[language][4]}
              </option>
              <option className={styles.layouts__option + " " + "4"} value="3">
                {interfaceLocalizations[language][5]}
              </option>
              {/* <option className="layouts__option">Следующий шаг</option>
                <option className="layouts__option">Путь</option> */}
            </select>
          </li>
          <li className={styles.header__li}>
            <span>{interfaceLocalizations[language][6]}</span>
            <select
              className={styles.language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
              ref={langMenu}
            >
              <option value="Русский" className={styles.language__option}>
                Русский
              </option>
              <option value="English" className={styles.language__option}>
                English
              </option>
              <option value="Español" className={styles.language__option}>
                Español
              </option>
            </select>
          </li>
        </ul>
        {/* <img
          onClick={revealBurgerMenu}
          className="burger-menu"
          src="assets/IMG/burger_menu.png"
          alt="burger-menu"
        ></img> */}
        <Image
          onClick={revealBurgerMenu}
          className={styles["burger-menu"]}
          src={burgerImg}
          alt="burger-menu"
        />
      </nav>
    </header>
  );
};

export default Header;
