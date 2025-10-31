import React from "react";
import { AddFeedbackButton, GoBackButton } from "../../__molecules";
import Form from "../form/Form";
import Feedback from "../feedback/Feedback";
import Comment from "../comment/Comment";

export type FeedbackProps = {
  feedbackId: string;
};

const FeedbackDetails = ({ feedbackId }: FeedbackProps) => {
  return (
    <div className="w-full min-h-screen  flex items-center justify-center bg-[#F7F8FD]">
      <div className="w-[87.2%] pt-6 pb-22 md:w-[89.71%] lg:w-[50.69%] md:pt-[56px] md:pb-[120px]  lg:pt-20 lg:pb-[137px] flex flex-col gap-6">
        <div className="flex items-center justify-between">
          {/* <button className="flex items-center gap-2">
            <ChevronLeft />
            <p>Go Back</p>
          </button> */}
          <GoBackButton />
          <AddFeedbackButton suggestionsId={feedbackId} />
        </div>

        <div className="w-full ">
          <Feedback title={""} id={""} />
        </div>

        <div className="w-full flex flex-col bg-white rounded-[10px] shadow-xl gap-[28px] px-6 py-6 md:px-8">
          <h2>
            <span>4</span> Comments
          </h2>
          <div className="w-full flex items-center flex-col gap-8 ">
            {/* mapping comment */}
            <Comment />
            <div className="here mepping replys/Comment component w-full bg-blue-300">11111111111</div>
          </div>


          



        </div>

        <div className="w-full bg-white rounded-[10px] shadow-xl flex flex-col px-6 py-6 md:px-8 gap-6">
          <h2 className="text-[#3A4374] text-lg font-bold leading-[100%] tracking-[-0.25px]">
            Add Comment
          </h2>

          <Form />

          {/* <CommentForm /> */}
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetails;
