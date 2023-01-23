import React from "react";
import { useGlobalContext } from "../../Function/Context";

const MinileftSidebar = () => {
  const {
    toggleLeftMenu,
    settoggleLeftMenu,
    handletoggleLeftMenu,
    toggleRightMenu,
    settoggleRightMenu,
    handletoggleRightMenu,
  } = useGlobalContext();
  return (
    <div
      onClick={handletoggleLeftMenu}
      className="flex items-center py-[10px] cursor-pointer px-[10px] md:px-[15px] bg-[#1c1c1c] flex-col border-r-[1px] border-[#e5e5e5]  min-h-screen md:overflow-hidden overflow-auto md:hover:first-letter:overflow-auto"
    >
      <div className="flex pb-[30px] items-center h-[72px] ">
        <img className="titlelogo" src="ByeWind.png" alt="" />
      </div>

      <div className=" flex flex-col justify-between  mt-[10px] ">
        <button className=" flex text-[14px] bg-[#e5ecf6] rounded-sm  py-1 px-2 text-black ">
          F
        </button>
        <button className=" flex text-[14px] bg-[#757575] rounded-sm  py-1 px-2 text-black mt-7  ">
          R
        </button>
      </div>
      <div className=" flex flex-col justify-between mt-7    ">
        <button className=" flex text-[14px] bg-[#e5ecf6] rounded-sm  py-1 px-2 text-black ">
          D
        </button>
        <button className=" flex text-[14px]  bg-[#e5ecf6] rounded-sm  py-1 px-2 text-black mt-7  ">
          G
        </button>
      </div>

      <div className="absolute bottom-4">
        <img className="h-3 right-0 absolute" src="c.png" alt="" />
        <img className="h-5" src="b.png" alt="" />
      </div>
    </div>
  );
};

export default MinileftSidebar;
