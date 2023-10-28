import { useEffect, useState } from "react";

export default function useLanguageAndLayout() {
  const [layout, setLayout] = useState();
  const [language, setLanguage] = useState();

  useEffect(() => {
    if(localStorage.getItem('layout')) {
      setLayout(localStorage.getItem("layout"));
    } else {
      setLayout("Celtic Cross");
    }

    if(localStorage.getItem('language')) {
      setLanguage(localStorage.getItem("language"));
    } else {
      setLanguage(localStorage.getItem("language"));
    }

  }, []);

  

  return [layout, language, setLayout, setLanguage];
}
