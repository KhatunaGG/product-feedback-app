import React from "react";
import Form from "../form/Form";

const Comment = () => {
  return (
    <div className="w-full flex items-center flex-col ">
      <div className="w-full flex items-start gap-8">
        <div className=" avatar w-10 h-10 rounded-full border border-[#f1f1f1] bg-amber-300  "></div>

        <div className="flex items-start flex-col gap-6">
          <div className="flex items-start gap-6">
            <div className="flex flex-col items-start gap-[17px]">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-start flex-col">
                  <h2>Elijah Moss</h2>
                  <p>@hexagon.bestagon</p>
                </div>
                <button>Reply</button>
              </div>

              <p>
                Also, please allow styles to be applied based on system
                preferences. I would love to be able to browse Frontend Mentor
                in the evening after my device’s dark mode turns on without the
                bright background it currently has.
              </p>
            </div>
          </div>
          <div className="w-full ">
            <Form />
          </div>


        </div>
      </div>

      <div className="w-full"></div>
    </div>
  );
};

export default Comment;
