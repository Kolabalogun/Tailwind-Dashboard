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
