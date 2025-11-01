// import axios, { AxiosError } from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CategoryEnum, HeaderOptionEnum, StatusEnum } from "../commons/data";

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
  selectedCategory: CategoryEnum | null;
  selectedStatus: StatusEnum | null;
  selectedHeaderOptions: HeaderOptionEnum | null;
  toggleOverlay: () => void;
  setSelectedCategory: (category: CategoryEnum) => void;
  setSelectedStatus: (status: StatusEnum) => void;
  setSelectedHeaderOptions: (selectedHeaderOptions: HeaderOptionEnum) => void;
};

export const useFeedbackStore = create<UseFeedbackStoreStyle>()(
  persist(
    (set) => ({
      isOverlyOpen: false,
      selectedCategory: CategoryEnum.Feature,
      selectedStatus: StatusEnum.Planned,
      selectedHeaderOptions: HeaderOptionEnum.LeastComment,
      toggleOverlay: () =>
        set((state) => ({ isOverlyOpen: !state.isOverlyOpen })),
      setSelectedCategory: (category) => {
        set({ selectedCategory: category });
      },
      setSelectedStatus: (status) => set({ selectedStatus: status }),
      setSelectedHeaderOptions: (option) => set({ selectedHeaderOptions: option }),
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
