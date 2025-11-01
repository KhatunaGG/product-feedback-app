"use client";
import { useFeedbackStore } from "@/app/store/feedback.store";
import { GoBackButton } from "../../__molecules";
import { Circle } from "../../__atoms";
import Select from "../../__molecules/select/Select";
import { usePathname } from "next/navigation";
import { CategoryEnum, StatusEnum } from "@/app/commons/data";

const Overlay = () => {
  const pathName = usePathname();
  const categoryOptions = Object.values(CategoryEnum);
  const statusOptions = Object.values(StatusEnum);

  const {
    isOverlyOpen,
    setSelectedCategory,
    selectedCategory,
    selectedStatus,
    setSelectedStatus,
    toggleOverlay
  } = useFeedbackStore();

  const isCreateFeedback = isOverlyOpen && pathName.includes("/");

  if (!isOverlyOpen) return null;
  return (
    <div className="absolute inset-0 bg-[#F7F8FD] z-10 w-full h-full min-h-screen flex items-center justify-center">
      <div className="w-[87.2%] md:w-[70.31%]  lg:w-[37.5%] flex flex-col gap-[55px] md:gap-[60px]">
        <GoBackButton  toggleOverlay={toggleOverlay} isOverlyOpen={isOverlyOpen}  />

        <div className=" relative">
          <div className="absolute left-[7.33%] md:left-[7.47%]  top-0 -translate-y-1/2">
            <Circle />
          </div>

          <div className="bg-white  shadow-lg rounded-[10px] px-6 pt-11 pb-6 md:px-[42px] md:pt-[52px] md:pb-10 flex flex-col gap-6 md:gap-10">
            <h1 className="text-[#3A4374] text-2xl font-bold leading-[100%] tracking-[-0.33px]">
              {isCreateFeedback ? (
                <span> Create New Feedback</span>
              ) : (
                <span>Editing ‘Add a dark theme option’</span>
              )}
            </h1>

            <form className="w-full flex flex-col flex=col gap-10">
              <div className="w-full flex flex-col gap-6">
                <div className="flex w-full flex-col gap-4">
                  <div className="flex flex-col gap-1 items-start">
                    <h2 className="text-[#3A4374] text-[13px] font-bold leading-[100%] tracking-[-0.18px]">
                      Feedback Title
                    </h2>
                    <p className="font-normal text-[13px] leading-[100%] text-[#647196]">
                      Add a short, descriptive headline
                    </p>
                  </div>
                  <textarea className="min-h-12 resize-none bg-[#F7F8FD] rounded-[5px]"></textarea>
                </div>

                <div className="flex w-full flex-col gap-4">
                  <div className="flex flex-col gap-1 items-start">
                    <h2 className="text-[#3A4374] text-[13px] font-bold leading-[100%] tracking-[-0.18px]">
                      Category
                    </h2>
                    <p className="font-normal text-[13px] leading-[100%] text-[#647196]">
                      Choose a category for your feedback
                    </p>
                  </div>

                  <Select
                    isCreateFeedback={isCreateFeedback}
                    options={categoryOptions}
                    value={selectedCategory}
                    onChange={(val) => setSelectedCategory(val as CategoryEnum)}
                  />
                </div>

                {!isCreateFeedback && (
                  <div className="flex w-full flex-col gap-4">
                    <div className="flex flex-col gap-1 items-start">
                      <h2 className="text-[#3A4374] text-[13px] font-bold leading-[100%] tracking-[-0.18px]">
                        Update Status
                      </h2>
                      <p className="font-normal text-[13px] leading-[100%] text-[#647196]">
                        Change feature state
                      </p>
                    </div>

                    <Select
                      isCreateFeedback={isCreateFeedback}
                      options={statusOptions}
                      value={selectedStatus}
                      onChange={(val) => setSelectedStatus(val as StatusEnum)}
                    />
                  </div>
                )}

                <div className="flex w-full flex-col gap-4">
                  <div className="flex flex-col gap-1 items-start">
                    <h2 className="text-[#3A4374] text-[13px] font-bold leading-[100%] tracking-[-0.18px]">
                      Feedback Detail
                    </h2>
                    <p className="font-normal text-[13px] leading-[100%] text-[#647196]">
                      Include any specific comments on what should be improved,
                      added, etc.
                    </p>
                  </div>
                  <textarea className="w-full resize-none min-h-[96px] rounded-[5px] bg-[#F7F8FD]"></textarea>
                </div>
              </div>

              <div className="w-full  flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-0">
                <button className="py-[12.5px] px-6 text-white font-bold text-sm leading-[100%] rounded-[10px] bg-[#D73737]">
                  Delete
                </button>

                <button className="py-[12.5px] px-6 text-white font-bold text-sm leading-[100%] rounded-[10px] bg-[#3A4374] md:hidden">
                  Cancel
                </button>
                <button className="py-[12.5px] px-6 text-white font-bold text-sm leading-[100%] rounded-[10px] bg-[#AD1FEA] md:hidden">
                  {isCreateFeedback ? "Add Feedback" : "Save Changes"}
                </button>

                <div className="hidden w-auto md:flex items-center gap-4">
                  <button className="py-[12.5px] px-6 text-white font-bold text-sm leading-[100%] rounded-[10px] bg-[#3A4374]">
                    Cancel
                  </button>
                  <button className="py-[12.5px] px-6 text-white font-bold text-sm leading-[100%] rounded-[10px] bg-[#AD1FEA]">
                    {isCreateFeedback ? "Add Feedback" : "Save Changes"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
