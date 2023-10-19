import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import MainContext from "./context/MainContext";
import { useState } from "react";

const App = () => {
  const [layout, setLayout] = useState(
    localStorage.getItem("layout")
      ? localStorage.getItem("layout")
      : "Celtic Cross"
  );

  const [language, setLanguage] = useState(
    localStorage.getItem("language")
      ? localStorage.getItem("language")
      : "English"
  );
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Header setLayout={setLayout} setLanguage={setLanguage} language={language}/>
      <MainContext.Provider
        value={{ layout, language, counter, setCounter, language, layout }}
      >
        <Main />
      </MainContext.Provider>
      <Footer />
    </>
  );
};

export default App;
