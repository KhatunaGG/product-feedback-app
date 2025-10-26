import { OptionsEnum } from "@/app/commons/data";
import React from "react";

const NavOptions = () => {
  return (
    <div className="min-h-[178px] p-6 flex flex-wrap gap-x-4 gap-y-[14px] bg-white rounded-[10px]">
      {Object.values(OptionsEnum).map((item, i) => {
        return (
          <button
            key={`${item}-${i}`}
            className="py-[5px] px-4 bg-[#F2F4FF] rounded-[10px]  text-[#4661E6] font-semibold text-[13px] "
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default NavOptions;
