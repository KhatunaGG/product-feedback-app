"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CategoryEnum, StatusEnum } from "@/app/commons/data";
import { useFeedbackStore } from "@/app/store/feedback.store";
import Select from "../../__molecules/select/Select";
// import { toast } from "react-toastify";
import z from "zod";
import { Input } from "../../__molecules";
import { toast } from "react-toastify";

export type OverlayFormProps = {
  isCreateFeedback?: boolean;
  isEditFeedback?: boolean;
};

export const interActiveSchema = z.object({
  content: z.string().min(1, "Content is required"),
  title: z.string().min(1, "Title is required"),
  category: z
    .enum(["All", "Feature", "UI", "UX", "Enhancement", "Bug"])
    .optional(),
  status: z.enum(["Planned", "Suggestion", "In-Progress", "Live"]).optional(),

  likes: z.number().optional(),
});

export type InterActiveType = z.infer<typeof interActiveSchema>;

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
    createFeedback,
  } = useFeedbackStore();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<InterActiveType>({
    resolver: zodResolver(interActiveSchema),
    defaultValues: {
      content: "",
      title: "",
      category: CategoryEnum.Feature,
      status: StatusEnum.Planned,

      
      likes: 0,
    },
  });

  const onSubmit = async (formData: InterActiveType) => {
    const fullFormData: InterActiveType = {
      ...formData,
      category: selectedCategory ?? undefined,
      status: selectedStatus ?? undefined,
      // content: contentValue,
    };
    try {
      const success = await createFeedback(fullFormData);
      if (success) {
        reset();
      }
    } catch (e) {
      toast.error(e as string);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col flex=col gap-10"
    >
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

          <Input register={register} errors={errors} fieldName="title" />
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

        <div className="flex w-full flex-col gap-4 relative">
          <div className="flex flex-col gap-1 items-start">
            <h2 className="text-[#3A4374] text-[13px] font-bold leading-[100%] tracking-[-0.18px]">
              Feedback Detail
            </h2>
            <p className="font-normal text-[13px] leading-[100%] text-[#647196]">
              Include any specific comments on what should be improved, added,
              etc.
            </p>
          </div>
          <textarea
            {...register("content")}
            className="w-full resize-none min-h-[96px] rounded-[5px] bg-[#F7F8FD] py-[13px] px-6 outline-none"
          ></textarea>
          {errors.content?.message && (
            <span className="text-red-600 absolute text-xs left-1 bottom-0">
              {errors.content.message}
            </span>
          )}
        </div>
      </div>

      <div className="w-full  flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-0">
        <button className="py-[12.5px] px-6 text-white font-bold text-sm leading-[100%] rounded-[10px] bg-[#D73737]">
          Delete
        </button>

        <button className="py-[12.5px] px-6 text-white font-bold text-sm leading-[100%] rounded-[10px] bg-[#3A4374] md:hidden">
          Cancel
        </button>
        <button
          type="submit"
          className="py-[12.5px] px-6 text-white font-bold text-sm leading-[100%] rounded-[10px] bg-[#AD1FEA] md:hidden"
        >
          {isCreateFeedback ? "Add Feedback" : "Save Changes"}
        </button>

        <div className="hidden w-auto md:flex items-center gap-4">
          <button className="py-[12.5px] px-6 text-white font-bold text-sm leading-[100%] rounded-[10px] bg-[#3A4374]">
            Cancel
          </button>
          <button
            type="submit"
            className="py-[12.5px] px-6 text-white font-bold text-sm leading-[100%] rounded-[10px] bg-[#AD1FEA]"
          >
            {isCreateFeedback ? "Add Feedback" : "Save Changes"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default OverlayForm;
