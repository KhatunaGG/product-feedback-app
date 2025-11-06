"use client";
import Header from "../header/Header";
import Feedback from "../feedback/Feedback";
import { useAuthStore } from "@/app/store/auth.store";
import { useEffect } from "react";
import { AnimateSpin } from "../../__molecules";

// import NoFeedback from "../noFeedback/NoFeedback";

export type SuggestionDataType = {
  title: string;
  id: string;
};

export const data: SuggestionDataType[] = [
  {
    title: "Add a dark theme option",
    id: "1111",
  },
  {
    title: "Add tags for solutions",
    id: "2222",
  },
];

const Dashboard = () => {
  const initialize = useAuthStore((state) => state.initialize);
  const isLoading = useAuthStore((state) => state.isLoading);

  useEffect(() => {
    initialize();
  }, [initialize]);

  if (isLoading) {
    return <AnimateSpin />;
  }

  return (
    <div className="w-full flex flex-col gap-8 md:gap-4 lg:gap-6">
      <div className="w-full  hidden md:flex">
        <Header />
      </div>
      {/* <NoFeedback /> */}
      {Array.isArray(data) &&
        data.map((item) => {
          return <Feedback {...item} key={item.id} />;
        })}
    </div>
  );
};

export default Dashboard;
