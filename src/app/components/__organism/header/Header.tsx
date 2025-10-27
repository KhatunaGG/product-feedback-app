import React from "react";
import Bulb from "../../__atoms/bulb/Bulb";
import Select from "../../__molecules/select/Select";

function Header() {
  return (
    <header className="w-full bg-[#373F68]">
      <div className="w-full px-6 md:px-0 md:pl-6 md:pr-4 py-[14px] flex items-center justify-between text-white">

        <div className="flex items-center gap-[38px]">
          <div className="hidden md:flex items-center justify-between gap-4">
            <Bulb />
            <h2 className="text-lg font-bold tracking-[-0.25px]">
              <span>6</span> Suggestions
            </h2>
          </div>
          <Select />
        </div>
        <button className="font-bold text-[13px] md:text-sm leading-[100%] px-4 py-[10.5px] md:py-[12.5px] md:px-[25px] bg-[#AD1FEA] rounded-[10px]"><span className="font-bold text-lg">+</span>Add Feedback</button>

      </div>
    </header>
  );
}

export default Header;
