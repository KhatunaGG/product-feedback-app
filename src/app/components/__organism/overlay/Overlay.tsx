"use client";

import { useFeedbackStore } from "@/app/store/feedback.store";
import { GoBackButton } from "../../__molecules";
import { Circle } from "../../__atoms";

const Overlay = () => {
  //   const toggleOverlay = useFeedbackStore.getState().toggleOverlay;
  //   const isOverlyOpen = useFeedbackStore.getState().isOverlyOpen;

  const {
    isOverlyOpen,
    // toggleOverlay
  } = useFeedbackStore();

  if (!isOverlyOpen) return null;
  return (
    <div className="absolute inset-0 bg-[#F7F8FD] z-10 w-full h-full min-h-screen flex items-center justify-center">
      <div className="w-[87.2%] md:w-[70.31%]  lg:w-[37.5%] flex flex-col gap-[55px] md:gap-[60px]">
        <GoBackButton />

        <div className=" relative">
          <div className="absolute left-[7.33%] md:left-[7.47%]  top-0 -translate-y-1/2">
            <Circle />
          </div>

          <div className="bg-white  shadow-lg rounded-[10px] px-6 pt-11 pb-6 md:px-[42px] md:pt-[52px] md:pb-10 flex flex-col gap-6 md:gap-10">
            <h1 className="text-[#3A4374] text-2xl font-bold leading-[100%] tracking-[-0.33px]">
              Create New Feedback
            </h1>

            <form className="w-full flex flex=col gap-10">
              <div>inputs</div>

              <div>buttons</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
