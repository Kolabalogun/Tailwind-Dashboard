import React from "react";
import { useGlobalContext } from "../Function/Context";

const LeftSection = () => {
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
    <div
      className={`flex py-[10px] px-[25px] ${
        mode ? "bg-[aliceblue]" : "bg-[#1c1c1c] "
      }  pt-[15px]  flex-col border-r-[1px] border-[#e5e5e5]  min-h-screen `}
    >
      <div className="flex pb-[30px] justify-between items-center h-[72px] ">
        <div className="flex">
          <img className="titlelogo" src="ByeWind.png" alt="" />
          <p className="title flex ">Clake Kent</p>
        </div>

        <img
          className="px-1   lg:px-4 h-4"
          onClick={handletoggleLeftMenu}
          src="Sidebar.png"
          alt=""
        />
      </div>

      <div className=" flex  justify-between  mt-[10px] flex-row">
        <button className=" flex text-[14px] border-none  text-[#777777]">
          Favourites
        </button>
        <button className="flex text-[14px] border-none text-[#464646]">
          Recently
        </button>
      </div>
      <div className="flex pb-[30px] items-center h-[72px] ">
        <img className="titlelogo elipse" src="Ellipse 961.png" alt="" />
        <p className="title">Versastyle: Toronto</p>
      </div>

      <div className="flex  justify-between  mt-[10px] flex-col my-[30px]">
        <p className=" flex text-[14px] border-none text-[#777777]">
          Dashboard
        </p>
        <div className="dashboardMenu ">
          <img className="dot" src="Vector (1).png" alt="" />
          <img className="vector" src="Buildings.png" alt="" />
          <p className="flex text-[14px] border-none text-[#d2d2d2]">
            Event Selection
          </p>
        </div>
      </div>
      <div className="flex  justify-between  mt-[10px] flex-col my-[30px]">
        <p className="flex border-none text-[#777777]">Global Settings</p>
        <div className="dashboardMenu">
          <img className="dot" src="Vector (1).png" alt="" />
          <img className="vector" src="GearSix.png" alt="" />
          <p className="flex text-[14px] border-none text-[#d2d2d2]">
            Settings
          </p>
        </div>
      </div>

      <div className="absolute flex bottom-4">
        <img className="h-3 left-2 absolute" src="c.png" alt="" />
        <img className="h-5" src="b.png" alt="" />

        {/* <img className="h-5 w-10" src="x.png" alt="" /> */}

        <p className="text-white pl-2 font-semibold">Score Box</p>
      </div>
    </div>
  );
};

export default LeftSection;
