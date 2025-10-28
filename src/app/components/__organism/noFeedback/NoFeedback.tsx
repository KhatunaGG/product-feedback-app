import React from "react";
import { Feedback } from "../../__atoms";
import { AddFeedbackButton } from "../../__molecules";

const NoFeedback = () => {
  return (
    <div className="w-full h-[calc(100vh-72px)] flex  items-center justify-center bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center justify-center gap-[53.25px]">
        <Feedback />

        <div className="flex flex-col items-center justify-center max-w-[278px] md:max-w-[410px] text-center gap-4">
          <h2 className="text-[#3A4374] font-bold text-2xl leading-[100%] tracking-[-0.33px]">
            There is no feedback yet.
          </h2>
          <p className="text-[13px] font-normal text-[#647196] md:text-base md:font-semibold">
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </p>
        </div>

        <div className="w-full flex items-center justify-center">
          <AddFeedbackButton />
        </div>
      </div>
    </div>
  );
};

export default NoFeedback;
