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

  const [language, setLanguage] = useState(localStorage.getItem('language')? localStorage.getItem('language'): "English");

  return (
    <>
      <Header setLayout={setLayout} setLanguage={setLanguage} />
      <MainContext.Provider value={{layout, language}}>
        <Main language={language} layout={layout}/>
      </MainContext.Provider>
      <Footer />
    </>
  );
};

export default App;
