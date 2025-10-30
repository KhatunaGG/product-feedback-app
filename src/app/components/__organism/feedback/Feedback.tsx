import React from "react";
import { ChevronLeft } from "../../__atoms";
import { AddFeedbackButton } from "../../__molecules";
import Suggestion from "../suggestion/Suggestion";
import CommentForm from "../commentForm/CommentForm";

export type FeedbackProps = {
  suggestionsId: string;
};

const Feedback = ({ suggestionsId }: FeedbackProps) => {
  return (
    <div className="w-full min-h-screen  flex items-center justify-center bg-[#F7F8FD]">
      <div className="w-[87.2%] pt-6 pb-22 md:w-[89.71%] lg:w-[50.69%] md:pt-[56px] md:pb-[120px]  lg:pt-20 lg:pb-[137px] flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ChevronLeft />
            <p>Go Back</p>
          </div>
          <AddFeedbackButton suggestionsId={suggestionsId} />
        </div>

        <div className="w-full ">
          <Suggestion title={""} id={""} />
        </div>

        <div className="w-full flex flex-col bg-white rounded-[10px] shadow-xl gap-[28px] px-6 py-6 md:px-8">
          <h2>
            <span>4</span> Comments
          </h2>
          <div className="w-full flex items-center flex-col gap-8 ">
            comment block
          </div>
        </div>

        <CommentForm />
      </div>
    </div>
  );
};

export default Feedback;
