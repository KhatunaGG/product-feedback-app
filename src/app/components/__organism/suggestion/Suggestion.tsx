"use client"
import ChevronUp from "../../__atoms/chevronUp/ChevronUp";
import { Chat } from "../../__atoms";
import Link from "next/link";

export type SuggestionProps = {
  title: string;
  id: string
}

const Suggestion = ({id, title}: SuggestionProps) => {
  return (
    <>
      <Link key={id} href={`/${id}`} className="w-full bg-white rounded-[10px] px-8 py-[28px] flex-col flex md:flex-row items-start  gap-10 shadow-lg">
        <div className="COUNTER md:flex items-start hidden">
          <div className="rounded-[10px] bg-[#F2F4FE] flex flex-col gap-2 items-center justify-center px-[9px] pt-[14px] pb-2">
            <ChevronUp />
            <p className=" text-[13px] font-bold leading-[100%] tracking-[-0.18px] text-[#3A4374]">
              111
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="Middle-block flex flex-col items-start  gap-3">
            <div className="flex flex-col items-start gap-3">
              <h2 className="text-[#3A4374] text-[18px] font-bold leading-[100%] tracking-[-0.25px]">
                {/* Add a dark theme option */}
                {title}

              </h2>
              <p className="text-base font-normal leading-[100%] text-[#647196]">
                It would help people with light sensitivities and who prefer
                dark mode.
              </p>
            </div>
            <p className="block px-4 py-2 rounded-[10px] bg-[#F2F4FE] text-[13px] font-semibold leading-[100%] text-[#4661E6]">
              Enhancement
            </p>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="flex items-center justify-center gap-2">
              <Chat />
              <p className="text-base font-bold leading-[100%] tracking-[-0.18px] text-[#3A4374]">
                4
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-between md:hidden">
          <div className="rounded-[10px] bg-[#F2F4FE] flex flex-row gap-2 items-center justify-center py-3 px-4">
            <ChevronUp />
            <p className=" text-[13px] font-bold leading-[100%] tracking-[-0.18px] text-[#3A4374]">
              111
            </p>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Chat />
            <p className="text-base font-bold leading-[100%] tracking-[-0.18px] text-[#3A4374]">
              4
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Suggestion;
