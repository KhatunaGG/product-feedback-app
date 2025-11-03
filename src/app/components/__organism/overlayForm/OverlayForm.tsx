"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CategoryEnum, StatusEnum } from "@/app/commons/data";
import { useFeedbackStore } from "@/app/store/feedback.store";
import Select from "../../__molecules/select/Select";
// import { toast } from "react-toastify";
import z from "zod";


export type OverlayFormProps = {
  isCreateFeedback?: boolean;
  isEditFeedback?: boolean;
};

export const schema = z.object({
  title: z.string().min(1, "Feedback title is refired"),
  category: z.string().min(1, "Please select the category"),
  status: z.string().optional(),
  text: z.string().min(1, "Feedback Detail is refired"),
});

export type FeedbackType = z.infer<typeof schema>;

const OverlayForm = ({
  isCreateFeedback,
  isEditFeedback,
}: OverlayFormProps) => {
  const categoryOptions = Object.values(CategoryEnum);
  const statusOptions = Object.values(StatusEnum);
  const {
    setSelectedCategory,
    selectedCategory,
    selectedStatus,
    setSelectedStatus,
  } = useFeedbackStore();

  const {
    // register,
    // formState: { errors },
    // handleSubmit,
    // reset
  } = useForm<FeedbackType>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      category: "",
      status: "",
      text: "",
    },
  });

  return (
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
          {/* <textarea className="min-h-12 resize-none bg-[#F7F8FD] rounded-[5px] outline-none px-6 "></textarea> */}
          <input
            type="text"
            className="py-[13px] px-6 bg-[#F7F8FD] rounded-[5px] outline-none w-full"
          />
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
            isEditFeedback={isEditFeedback}
            options={categoryOptions}
            value={selectedCategory}
            onChange={(val) => setSelectedCategory(val as CategoryEnum)}
          />
        </div>

        {isEditFeedback && (
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
              isEditFeedback={isEditFeedback}
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
              Include any specific comments on what should be improved, added,
              etc.
            </p>
          </div>
          <textarea className="w-full resize-none min-h-[96px] rounded-[5px] bg-[#F7F8FD] py-[13px] px-6 outline-none"></textarea>
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
  );
};

export default OverlayForm;
