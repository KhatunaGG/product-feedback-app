// "use client"
// import ChevronDown from "../../__atoms/chevronDown/ChevronDown";
// import { Check } from "../../__atoms";

// export type SelectProps = {
//   isCreateFeedback: boolean;
// }

// const Select = ({isCreateFeedback}: SelectProps) => {

//   return (
//     <div className="min-w-[160px] flex items-center justify-between   md:gap-[9px]  relative ">
//       <p className="font-bold text-[13px] md:text-sm  leading-[100%] ">
//         <span className="font-normal ">Sort by :</span> Most Upvotes
//       </p>
//       <div className="pt-1 ">
//         <ChevronDown />
//       </div>

//       <div className="hidden min-w-[255px] bg-white shadow-2xl absolute -bottom-60 left-0 rounded-[10px] overflow-hidden">
//         <div className="w-full flex items-center justify-between py-3 px-6 border-b border-b-[#dadbe1]">
//           <p className="text-[#647196]">Most Upvotes</p>
//           <Check />
//         </div>
//         <div className="w-full flex items-center justify-between py-3 px-6 border-b border-b-[#dadbe1]">
//           <p className="text-[#647196]">Least Upvotes</p>
//           <Check />
//         </div>
//         <div className="w-full flex items-center justify-between py-3 px-6 border-b border-b-[#dadbe1]">
//           <p className="text-[#647196]">Most Comments</p>
//           <Check />
//         </div>
//         <div className="w-full flex items-center justify-between py-3 px-6 border-b border-b-[#dadbe1]">
//           <p className="text-[#647196]">Least Comments</p>
//           <Check />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Select;

"use client";
import ChevronDown from "../../__atoms/chevronDown/ChevronDown";
import { Check } from "../../__atoms";

export type SelectProps<T extends string> = {
  isCreateFeedback?: boolean;
  options: T[];
  value: T | null;
  onChange: (val: T) => void;
};

const Select = <T extends string>({
  isCreateFeedback,
  options,
  value,
}: SelectProps<T>) => {
  return (
    <div
      className={`${
        isCreateFeedback
          ? "w-full py-[13px] px-6 bg-[#F7F8FD] rounded-[5px]        relative "
          : "min-w-[160px] py-0 px-0"
      }   flex items-center justify-between   md:gap-[9px]  relative `}
    >
      {isCreateFeedback ? (
        <p className="text-[#3A4374] text-[15px] font-bold leading-[100%] ">
          {value ?? options?.[0]}
        </p>
      ) : (
        <p className="font-bold text-[13px] md:text-sm  leading-[100%] ">
          <span className="font-normal ">Sort by :</span>{" "}
          {value ?? options?.[0]}
        </p>
      )}
      {/* {value ?? options?.[0]} */}

      <div
        className={`${
          isCreateFeedback && "absolute top-1/2 -translate-y-1/2 right-6 z-10 "
        } pt-1 `}
      >
        <ChevronDown isCreateFeedback={isCreateFeedback} />
      </div>

      <div
        className={`${
          isCreateFeedback ? "w-full -bottom-75" : "min-w-[255px] -bottom-55"
        } hidden   bg-white shadow-2xl absolute  left-0 rounded-[10px] overflow-hidden`}
      >
        {options?.map((option) => {
          return (
            <div
              key={option}
              className="w-full flex items-center justify-between py-3 px-6 border-b border-b-[#dadbe1]"
            >
              <p className="text-[#647196]">{option}</p>
              {option === value && <Check />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Select;
