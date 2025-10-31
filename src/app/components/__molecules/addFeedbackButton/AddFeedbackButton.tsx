"use client";
import { useFeedbackStore } from "@/app/store/feedback.store";

export type AddFeedbackButtonProps = {
  suggestionsId?: string;
};

const AddFeedbackButton = ({ suggestionsId }: AddFeedbackButtonProps) => {
  const { toggleOverlay } = useFeedbackStore();
  return (
    <button
      onClick={toggleOverlay}
      className={`${
        suggestionsId ? "bg-[#4661E6]" : "bg-[#AD1FEA]"
      } font-bold text-[13px] md:text-sm leading-[100%] px-4 py-[10.5px] md:py-[12.5px] md:px-[25px]  rounded-[10px] text-white`}
    >
      <span className="font-bold text-lg">{suggestionsId ? "" : "+"}</span>
      {/* Add Feedback */}
      {suggestionsId ? "Edit Feedback" : " Add Feedback"}
    </button>
  );
};

export default AddFeedbackButton;
