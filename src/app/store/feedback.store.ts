// // import axios, { AxiosError } from "axios";
// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// import { CategoryEnum, HeaderOptionEnum, StatusEnum } from "../commons/data";

// // export interface ErrorResponse {
// //   message: string;
// // }

// // const handleApiError = (error: AxiosError<ErrorResponse>): string => {
// //   if (axios.isAxiosError(error)) {
// //     return error.response?.data.message || "An error occurred";
// //   }
// //   return "An unexpected error occurred";
// // };

// export type UseFeedbackStoreStyle = {
//   isOverlyOpen: boolean;
//   selectedCategory: CategoryEnum | null;
//   selectedStatus: StatusEnum | null;
//   selectedHeaderOptions: HeaderOptionEnum | null;
//   isDropDown: boolean;

//   toggleOverlay: () => void;
//   setSelectedCategory: (category: CategoryEnum) => void;
//   setSelectedStatus: (status: StatusEnum) => void;
//   setSelectedHeaderOptions: (selectedHeaderOptions: HeaderOptionEnum) => void;
//   setIsDropDown: () => void;
//   // setFeedbackId: (id: string | null) => void;
// };

// export const useFeedbackStore = create<UseFeedbackStoreStyle>()(
//   persist(
//     (set) => ({
//       isOverlyOpen: false,
//       selectedCategory: CategoryEnum.Feature,
//       selectedStatus: StatusEnum.Planned,
//       selectedHeaderOptions: HeaderOptionEnum.LeastComment,
//       isDropDown: false,

//       //   feedbackId: null,
//       //  setFeedbackId: (id) => set({ feedbackId: id }),

//       toggleOverlay: () =>
//         set((state) => ({ isOverlyOpen: !state.isOverlyOpen })),
//       setSelectedCategory: (category) => {
//         set({ selectedCategory: category });
//       },
//       setSelectedStatus: (status) => set({ selectedStatus: status }),
//       setSelectedHeaderOptions: (option) =>
//         set({ selectedHeaderOptions: option }),
//       setIsDropDown: () => set((state) => ({ isDropDown: !state.isDropDown })),
//     }),

//     {
//       name: "feedback-store",
//       partialize: (state) =>
//         Object.fromEntries(
//           Object.entries(state).filter(([key]) => key !== "isOverlyOpen")
//         ),
//     }
//   )
// );



import { create } from "zustand";
import { CategoryEnum, HeaderOptionEnum, StatusEnum } from "../commons/data";

export type UseFeedbackStoreStyle = {
  isOverlyOpen: boolean;
  selectedCategory: CategoryEnum | null;
  selectedStatus: StatusEnum | null;
  selectedHeaderOptions: HeaderOptionEnum | null;
  isDropDown: boolean;

  toggleOverlay: () => void;
  setSelectedCategory: (category: CategoryEnum) => void;
  setSelectedStatus: (status: StatusEnum) => void;
  setSelectedHeaderOptions: (selectedHeaderOptions: HeaderOptionEnum) => void;
  setIsDropDown: (val: boolean) => void;
  // setFeedbackId: (id: string | null) => void;
};

export const useFeedbackStore = create<UseFeedbackStoreStyle>((set) => ({
  isOverlyOpen: false,
  selectedCategory: CategoryEnum.Feature,
  selectedStatus: StatusEnum.Planned,
  selectedHeaderOptions: HeaderOptionEnum.LeastComment,
  isDropDown: false,

  // toggle overlay
  toggleOverlay: () => set((state) => ({ isOverlyOpen: !state.isOverlyOpen })),

  // setters
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSelectedStatus: (status) => set({ selectedStatus: status }),
  setSelectedHeaderOptions: (option) =>
    set({ selectedHeaderOptions: option }),
 setIsDropDown: (val: boolean) => set({ isDropDown: val }),
}));
