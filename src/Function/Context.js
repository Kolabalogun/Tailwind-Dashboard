import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [toggleLeftMenu, settoggleLeftMenu] = useState(true);

  function handletoggleLeftMenu(params) {
    settoggleLeftMenu(!toggleLeftMenu);
  }

  const [toggleRightMenu, settoggleRightMenu] = useState(true);

  function handletoggleRightMenu(params) {
    settoggleRightMenu(!toggleRightMenu);
  }

  const tcolo = {
    display: toggleLeftMenu ? "flex" : "none",
  };
  const tcolor = {
    display: toggleRightMenu ? "flex" : "none",
  };

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    if (windowSize < 700) {
      settoggleLeftMenu(null);
    }
    if (windowSize < 1380) {
      settoggleRightMenu(null);
    }
    if (windowSize > 700) {
      settoggleLeftMenu(true);
    }
    if (windowSize > 1380) {
      settoggleRightMenu(true);
    }

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  return (
    <AppContext.Provider
      value={{
        toggleLeftMenu,
        settoggleLeftMenu,
        handletoggleLeftMenu,
        toggleRightMenu,
        settoggleRightMenu,
        handletoggleRightMenu,
        tcolo,
        tcolor,
        windowSize,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
