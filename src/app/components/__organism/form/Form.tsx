import React from "react";

const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <textarea
        name=""
        id=""
        placeholder="Type your comment here"
        className="bg-[#F7F8FD] text-[#647196] text-[13px] font-normal leading-[100%] min-h-[80px] resize-none rounded-[5px] focus:border border-[#4661E6] outline-none py-4 px-4 md:px-6"
      ></textarea>

      <div className="w-full flex items-center justify-between">
        <p className="text-[#647196] text-[13px] font-normal leading-[100%]">
          250 Characters left
        </p>
        <button className="bg-[#AD1FEA] text-white px-4 py-[10.5px] rounded-[10px] font-bold">
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default Form;
