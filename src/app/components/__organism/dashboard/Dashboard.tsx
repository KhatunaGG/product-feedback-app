import React from "react";
import Header from "../header/Header";
import Suggestion from "../suggestion/Suggestion";
// import NoFeedback from "../noFeedback/NoFeedback";

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col gap-8 md:gap-4 lg:gap-6">
      <div className="w-full  hidden md:flex">
        <Header />
      </div>
      {/* <NoFeedback /> */}
      <Suggestion />
      <Suggestion />
    </div>
  );
};

export default Dashboard;
