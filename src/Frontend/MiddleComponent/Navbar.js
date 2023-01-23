import React from "react";
import { useGlobalContext } from "../../Function/Context";

const Navbar = ({ windowSize }) => {
  const {
    toggleLeftMenu,
    settoggleLeftMenu,
    handletoggleLeftMenu,
    toggleRightMenu,
    settoggleRightMenu,
    handletoggleRightMenu,
    mode,
    setMode,
  } = useGlobalContext();
  return (
    <div className="navbar flex justify-between md:px-6 px-2 py-6 w-full items-center border-b-[1px] border-white">
      <div className="flex items-center">
        {!toggleLeftMenu && (
          <img
            onClick={handletoggleLeftMenu}
            className="px-1   lg:px-4 h-4"
            src="sidebar.png"
            alt=""
          />
        )}

        <img
          className=" hidden md:flex px-1 lg:px-4 h-4"
          src="bell.png"
          alt=""
        />
        <p className="text-white navsTxt">Event Selection /</p>
      </div>
      <div
        className={`rightNavbar relative flex items-center ${
          toggleLeftMenu && windowSize < 600 && "hidden"
        }`}
      >
        <img className="search absolute" src="search.png" alt="" />
        <input
          className="py-[4px] px-[28px] text-white outline-none w-[120px] md:w-[160px] h-7 bg-[#333333] searchInput"
          type="text"
          placeholder="search"
        />

        <img
          onClick={() => setMode(!mode)}
          className="hidden md:flex px-1 lg:px-4 h-4"
          src="sun.png"
          alt=""
        />
        <img
          className="hidden md:flex px-1 lg:px-4 h-4"
          src="ClockCounterClockwise.png"
          alt=""
        />
        <img
          className="hidden md:flex px-1 lg:px-4 h-4"
          src="bell.png"
          alt=""
        />

        {!toggleRightMenu && (
          <img
            onClick={handletoggleRightMenu}
            className="px-1   h-4"
            src="sidebar.png"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
