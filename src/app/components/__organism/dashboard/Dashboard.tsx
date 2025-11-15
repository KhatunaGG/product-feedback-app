"use client";
import Header from "../header/Header";
import Feedback from "../feedback/Feedback";
import { useFeedbackStore } from "@/app/store/feedback.store";
import { useEffect, useState } from "react";
import NoFeedback from "../noFeedback/NoFeedback";
import { AnimateSpin } from "../../__molecules";

const Dashboard = () => {
  // const initialize = useAuthStore((state) => state.initialize);
  // const isLoading = useAuthStore((state) => state.isLoading);

  // useEffect(() => {
  //   initialize();
  // }, [initialize]);

  // if (isLoading) {
  //   return <AnimateSpin />;
  // }

  const { getAllFeedbacks, feedbackData, isLoading } = useFeedbackStore();
  const [hasLoaded, setHasLoaded] = useState<boolean>();

  useEffect(() => {
    (async () => {
      await  getAllFeedbacks();
      setHasLoaded(true);
    })();
  }, [getAllFeedbacks]);


  if(isLoading && !hasLoaded) {
    return <AnimateSpin />
  }

  const hasFeedbacks = Array.isArray(feedbackData) && feedbackData.length > 0;

  return (
    <div className="w-full flex flex-col gap-8 md:gap-4 lg:gap-6">
      <div className="w-full  hidden md:flex">
        <Header />
      </div>
      {hasLoaded && !hasFeedbacks ? (
        <NoFeedback />
      ) : (
        hasLoaded && 
         feedbackData.map((item) => {
          return <Feedback {...item} key={item._id} />;
        })
      )}
    </div>
  );
};

export default Dashboard;
