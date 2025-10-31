// import axios, { AxiosError } from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// export interface ErrorResponse {
//   message: string;
// }

// const handleApiError = (error: AxiosError<ErrorResponse>): string => {
//   if (axios.isAxiosError(error)) {
//     return error.response?.data.message || "An error occurred";
//   }
//   return "An unexpected error occurred";
// };

export type UseFeedbackStoreStyle = {
  isOverlyOpen: boolean;
  toggleOverlay: () => void;
};

export const useFeedbackStore = create<UseFeedbackStoreStyle>()(
  persist(
    (set) => ({
      isOverlyOpen: false,

      toggleOverlay: () =>
        set((state) => ({ isOverlyOpen: !state.isOverlyOpen })),
    }),
    {
      name: "feedback-store",
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => key !== "isOverlyOpen")
        ), 
    }
  )
);
