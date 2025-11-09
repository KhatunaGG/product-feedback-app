// "use client";
// import { useFeedbackStore } from "@/app/store/feedback.store";

// export type AddFeedbackButtonProps = {
//   feedbackId?: string;
// };

// const AddFeedbackButton = ({ feedbackId }: AddFeedbackButtonProps) => {
//   const { toggleOverlay} = useFeedbackStore();

//   return (
//     <button
//       onClick={toggleOverlay}
//       className={`${
//         feedbackId ? "bg-[#4661E6]" : "bg-[#AD1FEA]"
//       } font-bold text-[13px] md:text-sm leading-[100%] px-4 py-[10.5px] md:py-[12.5px] md:px-[25px]  rounded-[10px] text-white`}
//     >
//       <span className="font-bold text-lg">{feedbackId ? "" : "+"}</span>
//       {/* Add Feedback */}
//       {feedbackId ? "Edit Feedback" : " Add Feedback"}
//     </button>
//   );
// };

// export default AddFeedbackButton;

"use client";
import { useAuthStore } from "@/app/store/auth.store";
import { useFeedbackStore } from "@/app/store/feedback.store";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export type AddFeedbackButtonProps = {
  feedbackId?: string;
};

const AddFeedbackButton = ({ feedbackId }: AddFeedbackButtonProps) => {
  const { toggleOverlay } = useFeedbackStore();
  const { accessToken } = useAuthStore();
  const router = useRouter();

  const handleClick = () => {
    if (!accessToken) {
      toast.info("You must be registered to create feedback.");
      router.push('/sign-up')
    }
    toggleOverlay();
  };

  return (
    <button
      // onClick={toggleOverlay}
      onClick={handleClick}
      className={`${
        feedbackId ? "bg-[#4661E6]" : "bg-[#AD1FEA]"
      } font-bold text-[13px] md:text-sm leading-[100%] px-4 py-[10.5px] md:py-[12.5px] md:px-[25px]  rounded-[10px] text-white`}
    >
      <span className="font-bold text-lg">{feedbackId ? "" : "+"}</span>
      {/* Add Feedback */}
      {feedbackId ? "Edit Feedback" : " Add Feedback"}
    </button>
  );
};

export default AddFeedbackButton;
