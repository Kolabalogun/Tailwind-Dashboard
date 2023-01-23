import React, { useEffect, useState } from "react";
import MinileftSidebar from "./Frontend/Components/minileftSidebar";

import LeftSection from "./Frontend/LeftSection";
import Main from "./Frontend/MiddleComponent/Main";
import Navbar from "./Frontend/MiddleComponent/Navbar";
import RightSection from "./Frontend/RightSection";
import { useGlobalContext } from "./Function/Context";
import "./index.css";
function App() {
  const {
    toggleLeftMenu,
    settoggleLeftMenu,
    handletoggleLeftMenu,
    toggleRightMenu,
    settoggleRightMenu,
    handletoggleRightMenu,
    windowSize,
  } = useGlobalContext();

  return (
    <div className="flex relative">
      <>
        {toggleLeftMenu && (
          <div className="h-full z-100000 w-[280px] fixed left-0">
            <LeftSection />
          </div>
        )}

        {!toggleLeftMenu && (
          <div className="h-full   ">
            <MinileftSidebar />
          </div>
        )}
      </>

      <div
        className={` h-full  w-full flex    flex-col ${
          toggleRightMenu && "md:mr-[300px]"
        } overflow-hidden  ${toggleLeftMenu && "md:ml-[280px]"} `}
      >
        <Navbar windowSize={windowSize} />
        <Main windowSize={windowSize} />
      </div>

      {toggleRightMenu && (
        <div className="h-full flex w-[300px] fixed right-0">
          <RightSection />
        </div>
      )}
    </div>
  );
}

export default App;
