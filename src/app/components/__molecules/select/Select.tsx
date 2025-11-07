"use client";
import ChevronDown from "../../__atoms/chevronDown/ChevronDown";
import { Check } from "../../__atoms";
import { useFeedbackStore } from "@/app/store/feedback.store";


export type SelectProps<T extends string> = {
  isCreateFeedback?: boolean;
  isEditFeedback?: boolean;
  options: T[];
  value: T | null;
  onChange: (val: T) => void;
};

const Select = <T extends string>({
  isCreateFeedback,
  isEditFeedback,
  options,
  value,
  onChange,
}: SelectProps<T>) => {
  const { setIsDropDown, isDropDown } = useFeedbackStore();

  const wrapperClass =
    isCreateFeedback || isEditFeedback
      ? "w-full py-[13px] px-6 bg-[#F7F8FD] rounded-[5px] relative"
      : "min-w-[160px] py-0 px-0";

  return (
    <div
      onClick={() => setIsDropDown(!isDropDown)}
      className={`${wrapperClass} flex items-center justify-between md:gap-[9px] relative cursor-pointer`}
    >
      {isCreateFeedback || isEditFeedback ? (
        <p className="text-[#3A4374] text-[15px] font-bold leading-[100%]">
          {value ?? options?.[0]}
        </p>
      ) : (
        <p className="font-bold text-[13px] md:text-sm leading-[100%]">
          <span className="font-normal">Sort by :</span> {value ?? options?.[0]}
        </p>
      )}
      <div
        className={`${
          (isCreateFeedback || isEditFeedback) &&
          "absolute top-1/2 -translate-y-1/2 right-6 z-10"
        } pt-1 bg-yellow-400 ${
            isDropDown && "rotate-180 transition duration-300 ease-in-out"
          }`}
      >
    
          <ChevronDown isCreateFeedback={isCreateFeedback || isEditFeedback} />
  
      </div>

      <div
        className={`${
          isCreateFeedback || isEditFeedback
            ? "w-full -bottom-75"
            : "min-w-[255px] -bottom-55"
        } ${
          isDropDown ? "flex" : "hidden"
        }   shadow-2xl absolute left-0 rounded-[10px] flex-col overflow-hidden  bg-green-200 z-10`}
      >
        {options?.map((option) => (
          <div
            key={option}
            className="w-full flex  items-start justify-between py-3 px-6 border-b border-b-[#dadbe1] cursor-pointer"
            onClick={() => {
              onChange(option);
            }}
          >
            <p className="text-[#647196]">{option}</p>
            {option === value && <Check />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
