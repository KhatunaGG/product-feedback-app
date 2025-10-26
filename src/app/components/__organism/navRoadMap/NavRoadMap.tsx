import Link from "next/link";
import React from "react";

const NavRoadMap = () => {
  return (
    <div className="w-full min-h-[178px] bg-white px-6 py-[19px] flex flex-col gap-6 rounded-[10px]">
      <div className="w-full flex items-center justify-between">
        <h2 className="font-bold text-[18px] leading-[100%] tracking-[-0.25px] text-[#3A4374]">
          Roadmap
        </h2>
        <Link href={"#"}>
          <button className="underline text-[#4661E6] font-semibold text-[13px] leading-[100%]">
            View
          </button>
        </Link>
      </div>

      <div className="w-full flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="w-full flex gap-4 items-center">
            <div className="w-2 h-2 bg-[#F49F85] rounded-full"></div>
            <p className="font-regular text-base leading-[100%] text-[#647196]">Planned</p>
          </div>
          <p className="font-bold text-base leading-[100%] text-[#647196]">2</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="w-full flex gap-4 items-center">
            <div className="w-2 h-2 bg-[#AD1FEA] rounded-full"></div>
            <p className="font-regular text-base leading-[100%] text-[#647196]">In-Progress</p>
          </div>
          <p className="font-bold text-base leading-[100%] text-[#647196]">1</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="w-full flex gap-4 items-center">
            <div className="w-2 h-2 bg-[#62BCFA] rounded-full"></div>
            <p className="font-regular text-base leading-[100%] text-[#647196]">Live</p>
          </div>
          <p className="font-bold text-base leading-[100%] text-[#647196]">3</p>
        </div>
      </div>
    </div>
  );
};

export default NavRoadMap;
