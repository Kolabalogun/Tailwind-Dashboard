import React from "react";
import { useGlobalContext } from "../Function/Context";

const RightSection = () => {
  const {
    toggleLeftMenu,
    settoggleLeftMenu,
    handletoggleLeftMenu,
    toggleRightMenu,
    settoggleRightMenu,
    handletoggleRightMenu,
    mode,
  } = useGlobalContext();
  return (
    <div
      className={`flex py-[10px] px-[25px] ${
        mode ? "bg-[aliceblue]" : "bg-[#1c1c1c] "
      } flex-col border-l-[1px] border-[#e5e5e5]  min-h-screen    `}
    >
      <div className="flex justify-between pt-[15px] pb-[30px] items-center h-[72px] ">
        <p className="title flex  flex-col">Notifications</p>
        <img
          className="px-1   lg:px-4 h-4"
          onClick={handletoggleRightMenu}
          src="Sidebar.png"
          alt=""
        />
      </div>

      <div className="flex  flex-col">
        <div className="flex">
          <img className="h-6 w-6 mb-5 mr-1" src="button.png" alt="" />
          <div className="flex flex-col">
            <p className="text-white text-[12px] ">
              You have a bug that need t...
            </p>
            <span className=" text-[#777777] text-[10px] pt-[2px] ">
              Email@email.com
            </span>
          </div>
        </div>
        <div className="flex">
          <img className="h-6 w-6 mb-5 mr-1" src="user.png" alt="" />
          <div className="flex flex-col">
            <p className="text-white text-[12px] ">New user registered</p>
            <span className=" text-[#777777] text-[10px] pt-[2px] ">
              1:23 AM
            </span>
          </div>
        </div>
        <div className="flex">
          <img className="h-6 w-6 mb-5 mr-1" src="button.png" alt="" />
          <div className="flex flex-col">
            <p className="text-white text-[12px] ">
              You have a bug that needs to be fixed.
            </p>
            <span className=" text-[#777777] text-[10px] pt-[2px] ">
              0:32 AM
            </span>
          </div>
        </div>
        <div className="flex">
          <img className="h-6 w-6 mb-5 mr-1" src="wifi.png" alt="" />
          <div className="flex flex-col">
            <p className="text-white text-[12px] ">Andi Lane sent payment</p>
            <span className=" text-[#777777] text-[10px] pt-[2px] ">
              Yesterday 12:39 AM
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8 mb-4 ">
        <p className="title flex  flex-col">Activities</p>
      </div>

      <div className="flex  flex-col">
        <div className="flex">
          <img className="h-6 w-6 mb-5 mr-1" src="Eve Leroy.png" alt="" />
          <div className="flex flex-col">
            <p className="text-white text-[12px]  ">Added entries to Kelowna</p>
            <span className=" text-[#777777] text-[10px] pt-[2px] ">
              Email@email.com
            </span>
          </div>
        </div>
        <div className="flex">
          <img className="h-6 w-6 mb-5 mr-1" src="Aliah Lane.png" alt="" />
          <div className="flex flex-col">
            <p className="text-white text-[12px] ">Added students</p>
            <span className=" text-[#777777] text-[10px] pt-[2px] ">
              1:23 AM
            </span>
          </div>
        </div>
        <div className="flex">
          <img className="h-6 w-6 mb-5 mr-1" src="Drew Cano.png" alt="" />
          <div className="flex flex-col">
            <p className="text-white text-[12px] ">Submitted a bug</p>
            <span className=" text-[#777777] text-[10px] pt-[2px] ">
              0:32 AM
            </span>
          </div>
        </div>
        <div className="flex">
          <img className="h-6 w-6 mb-5 mr-1" src="Aliah Lane.png" alt="" />
          <div className="flex flex-col">
            <p className="text-white text-[12px] ">Uploaded music</p>
            <span className=" text-[#777777] text-[10px] pt-[2px] ">
              Yesterday 12:39 AM
            </span>
          </div>
        </div>
        <div className="flex">
          <img className="h-6 w-6 mb-5 mr-1" src="Lana Steiner.png" alt="" />
          <div className="flex flex-col">
            <p className="text-white text-[12px] ">Deleted entry</p>
            <span className=" text-[#777777] text-[10px] pt-[2px] ">
              Aug 11
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
