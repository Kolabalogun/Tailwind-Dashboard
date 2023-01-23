import React from "react";
import { useGlobalContext } from "../../Function/Context";

const Main = ({ windowSize }) => {
  const {
    toggleLeftMenu,
    settoggleLeftMenu,
    handletoggleLeftMenu,
    toggleRightMenu,
    settoggleRightMenu,
    handletoggleRightMenu,
  } = useGlobalContext();
  return (
    <div className="flex flex-col pt-4 pb-6 px-1  xsm:px-3 sm:px-6 bg-[#1c1c1c] min-h-[92vh]">
      <div className="py-6 px-3 xsm:px-6 ">
        <p className="pr-3 text-white">All Events</p>
        <img src="Vector.png" alt="" />
      </div>

      <div
        className={`pt-4 px-3 xsm:px-6  justify-center items-center  lg:items-start gap-5  flex flex-col ${
          toggleLeftMenu && windowSize < 600 && "hidden"
        } `}
      >
        <div className="lg:flex lg:flex-row flex-col items-center justify-center flex gap-5 ">
          <div className=" bg-[#282828] h-[273px] mb-6 lg:mb-0 md:w-[380px] w-[280px]  p-4 relative boxinit ">
            <p className="absolute right-2 top-2 text-white">
              Mar 23 to Mar 26
            </p>

            <div className="mt-[50px]">
              <p className="text-white text-[14px]">Versastyle: Toronto</p>
              <p className="text-white text-[14px]">Toronto, Ontairo</p>
              <p className="text-white text-[14px]">Meridian Art Center</p>
              <p className="text-white text-[14px]">
                5040 Youge Street., North Yory ON M2N 6RB
              </p>
            </div>
            <div className="mt-[40px] pl-6 mb-19 flex flex-col">
              <div className="flex items-center pb-4">
                <img src="Ellipse.png" alt="" className="h-1 w-1" />
                <p className="pl-4 text-[12px] text-white">Entries Submitted</p>
                <p className="pl-4 text-[12px] text-[#777777]">72</p>
              </div>
              <div className="flex items-center ">
                <img src="Ellipse.png" alt="" className="h-1 w-1" />
                <p className="pl-4 text-[12px] text-white">Entries Submitted</p>
                <p className="pl-4 text-[12px] text-white">15</p>
              </div>
            </div>

            <div className="absolute bottom-2 right-2 flex items-center ">
              <button className="px-5 py-1 text-[12px] mr-2 bg-[#95A4FC] selectBtn">
                Select
              </button>
              <img src="LockSimpleOpen.png" alt="" className="h-8 w-8" />
            </div>
          </div>
          <div className=" bg-[#282828] h-[273px]  mb-6 lg:mb-0  md:w-[380px] w-[280px] z-0  p-4 relative boxinit ">
            <p className="absolute right-2 top-2 text-white">Mar 30 to Apr 2</p>

            <div className="mt-[50px]">
              <p className="text-white text-[14px]">Versastyle: Regina</p>
              <p className="text-white text-[14px]">Regina, Ontairo</p>
              <p className="text-white text-[14px]">Conexus Arts Centre</p>
              <p className="text-white text-[14px]">
                200 Lakeshore Dr., Regina, SK S4S 7A1
              </p>
            </div>

            <div className="absolute bottom-2 right-2 flex items-center ">
              <button className="px-5 py-1 text-[12px] mr-2 bg-[#95A4FC] selectBtn">
                Locked
              </button>
              <img src="red;pck.png" alt="" className="h-7 w-6" />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`pt-4 px-3 xsm:px-6  justify-center items-center  lg:items-start gap-5  flex flex-col ${
          toggleLeftMenu && windowSize < 600 && "hidden"
        } `}
      >
        <div className="lg:flex lg:flex-row flex-col items-center gap-5 ">
          <div className=" bg-[#282828] h-[273px] md:w-[380px] w-[280px]   p-4 relative boxinit mb-[30px] lg:mb-0">
            <p className="absolute right-2 top-2 text-white">
              Apr 13 to Apr 16
            </p>

            <div className="mt-[50px]">
              <p className="text-white text-[14px]">Versastyle: Fredericton</p>
              <p className="text-white text-[14px]">
                Fredericton, New Brunswick
              </p>
              <p className="text-white text-[14px]">
                Fredericton Convention Centre
              </p>
              <p className="text-white text-[14px]">
                670 Queen St., Fredericton, NB E3B 1C2
              </p>
            </div>

            <div className="absolute bottom-2 right-2 flex items-center ">
              <button className="px-5 py-1 text-[12px] mr-2 bg-[#95A4FC] selectBtn">
                Locked
              </button>
              <img src="red;pck.png" alt="" className="h-7 w-6" />
            </div>
          </div>
          <div className=" bg-[#282828] h-[273px] md:w-[380px] w-[280px]   p-4  mb-6 relative boxinitmb-[30px] lg:mb-0 ">
            <p className="absolute right-2 top-2 text-white">
              Apr 20 to Apr 23
            </p>

            <div className="mt-[50px]">
              <p className="text-white text-[14px]">Versastyle: Kewlona</p>
              <p className="text-white text-[14px]">Kewlona, Ontairo</p>
              <p className="text-white text-[14px]">
                Rotary Centre for the Arts
              </p>
              <p className="text-white text-[14px]">
                421 Cawston Ave., Kelowna, BC V1Y 6Z1
              </p>
            </div>

            <div className="absolute bottom-2 right-2 flex items-center ">
              <button className="px-5 py-1 text-[12px] mr-2 bg-[#95A4FC] selectBtn">
                Locked
              </button>
              <img src="red;pck.png" alt="" className="h-7 w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
