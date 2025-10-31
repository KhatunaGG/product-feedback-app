import React from "react";
import Header from "../header/Header";
import Feedback from "../feedback/Feedback";


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
