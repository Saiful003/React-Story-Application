import React, { useContext, useState } from "react";

const appContext = React.createContext();

export function useAppContext() {
  return useContext(appContext);
}

function AppContextProvider({ children }) {
  const [storyImg, setStoryImg] = useState("");
  const [storyText, setStoryText] = useState("");
  function getData(data) {
    setStoryImg(data);
  }

  function getTypeValue(text) {
    setStoryText(text);
  }

  const appValue = {
    getData,
    storyImg,
    getTypeValue,
    storyText,
  };

  return <appContext.Provider value={appValue}>{children}</appContext.Provider>;
}

export default AppContextProvider;
