"use client";
import React from "react";
import Bulb from "../../__atoms/bulb/Bulb";
import Select from "../../__molecules/select/Select";
import { AddFeedbackButton } from "../../__molecules";
import { HeaderOptionEnum } from "@/app/commons/data";
import { useFeedbackStore } from "@/app/store/feedback.store";

function Header() {
  const headerOptions = Object.values(HeaderOptionEnum);
  const { selectedHeaderOptions, setSelectedHeaderOptions } =
    useFeedbackStore();

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
          <Select
            options={headerOptions}
            value={selectedHeaderOptions}
            onChange={(val) =>
              setSelectedHeaderOptions(val as HeaderOptionEnum)
            }
          />
        </div>
        <AddFeedbackButton />
      </div>
    </header>
  );
}

export default Header;
