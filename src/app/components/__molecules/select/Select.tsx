import React from "react";
import ChevronDown from "../../__atoms/chevronDown/ChevronDown";
import { Check } from "../../__atoms";

const Select = () => {
  return (
    <div className="min-w-[160px] flex items-center justify-between   md:gap-[9px]  relative ">
      <p className="font-bold text-[13px] md:text-sm  leading-[100%] ">
        <span className="font-normal ">Sort by :</span> Most Upvotes
      </p>
      <div className="pt-1 ">
        <ChevronDown />
      </div>

      <div className="hidden min-w-[255px] bg-white shadow-2xl absolute -bottom-60 left-0 rounded-[10px] overflow-hidden">
        <div className="w-full flex items-center justify-between py-3 px-6 border-b border-b-[#dadbe1]">
          <p className="text-[#647196]">Most Upvotes</p>
          <Check />
        </div>
        <div className="w-full flex items-center justify-between py-3 px-6 border-b border-b-[#dadbe1]">
          <p className="text-[#647196]">Least Upvotes</p>
          <Check />
        </div>
        <div className="w-full flex items-center justify-between py-3 px-6 border-b border-b-[#dadbe1]">
          <p className="text-[#647196]">Most Comments</p>
          <Check />
        </div>
        <div className="w-full flex items-center justify-between py-3 px-6 border-b border-b-[#dadbe1]">
          <p className="text-[#647196]">Least Comments</p>
          <Check />
        </div>
      </div>
    </div>
  );
};

export default Select;
