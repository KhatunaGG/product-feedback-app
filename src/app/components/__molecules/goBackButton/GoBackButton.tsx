import React from "react";
import { ChevronLeft } from "../../__atoms";

const GoBackButton = () => {
  return (
    <button className="flex items-center gap-2">
      <ChevronLeft />
      <p>Go Back</p>
    </button>
  );
};

export default GoBackButton;
