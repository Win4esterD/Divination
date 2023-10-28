'use client'
import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import MainContext from "./context/MainContext";
import WaiteIMGs from "./JSON/waite-images.json";
import { useState, useEffect } from "react";
import useLanguageAndLayout from "./hooks/useLanguageAndLayout";

const App = () => {

  // const [layout, setLayout] = useState(
  //   localStorage.getItem("layout")
  //     ? localStorage.getItem("layout")
  //     : "Celtic Cross"
  // );
  // const [language, setLanguage] = useState(
  //   localStorage.getItem("language")
  //     ? localStorage.getItem("language")
  //     : "English"
  // );
  

  const [counter, setCounter] = useState(0);
  const [ids, setIds] = useState([]);
  const [layout, language, setLayout, setLanguage] = useLanguageAndLayout();
  

  return (
    <>
      <Header
        setLayout={setLayout}
        setLanguage={setLanguage}
        language={language}
        layout={layout}
      />
      <MainContext.Provider
        value={{
          layout,
          language,
          counter,
          setCounter,
          language,
          layout,
          ids,
          setIds,
          WaiteIMGs,
        }}
      >
        <Main />
      </MainContext.Provider>
      <Footer />
    </>
  );
};

export default App;
