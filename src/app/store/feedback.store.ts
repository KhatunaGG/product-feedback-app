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
import { InterActiveType } from "../components/__organism/overlayForm/OverlayForm";
import axios, { AxiosError } from "axios";
import { axiosInstance } from "../libs/axiosInstance";
import { useAuthStore } from "./auth.store";

export interface ErrorResponse {
  message: string;
}

const handleApiError = (error: AxiosError<ErrorResponse>): string => {
  if (axios.isAxiosError(error)) {
    return error.response?.data.message || "An error occurred";
  }
  return "An unexpected error occurred";
};

export type DbReplyType = {
  content: string;
  title: string;
  _id: string;
  createdAt: string;
};

export type DbCommentType = {
  content: string;
  title: string;
  replies: DbReplyType[];
  _id: string;
  createdAt: string;
};

export type DbFeedbackType = {
  content: string;
  title: string;
  category: CategoryEnum | null;
  status: StatusEnum | null;
  comments: DbCommentType[];
  _id: string;
  createdAt: string;
  feedbackOwnerId: string;
};

export type UseFeedbackStoreStyle = {
  isLoading: boolean;
  axiosError: string | null;
  isOverlyOpen: boolean;
  selectedCategory: CategoryEnum | null;
  selectedStatus: StatusEnum | null;
  selectedHeaderOptions: HeaderOptionEnum | null;
  isDropDown: boolean;
  feedbackData: DbFeedbackType[];

  toggleOverlay: () => void;
  setSelectedCategory: (category: CategoryEnum) => void;
  setSelectedStatus: (status: StatusEnum) => void;
  setSelectedHeaderOptions: (selectedHeaderOptions: HeaderOptionEnum) => void;
  setIsDropDown: (val: boolean) => void;
  // setFeedbackId: (id: string | null) => void;
  createFeedback: (formData: InterActiveType) => Promise<boolean>;
  getAllFeedbacks: () => Promise<void>;
};

export const useFeedbackStore = create<UseFeedbackStoreStyle>((set, get) => ({
  isLoading: false,
  axiosError: null,
  isOverlyOpen: false,
  selectedCategory: CategoryEnum.Feature,
  selectedStatus: StatusEnum.Planned,
  selectedHeaderOptions: HeaderOptionEnum.LeastComment,
  isDropDown: false,
  feedbackData: [],

  // toggle overlay
  toggleOverlay: () => set((state) => ({ isOverlyOpen: !state.isOverlyOpen })),

  // setters
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSelectedStatus: (status) => set({ selectedStatus: status }),
  setSelectedHeaderOptions: (option) => set({ selectedHeaderOptions: option }),
  setIsDropDown: (val: boolean) => set({ isDropDown: val }),

  createFeedback: async (formData) => {
    set({ isLoading: true, axiosError: null });
    const { accessToken } = useAuthStore.getState();

    try {
      const res = await axiosInstance.post("/feedback", formData, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (res.status >= 200 && res.status <= 204) {
        await get().getAllFeedbacks();
        set({
          isLoading: false,
          axiosError: null,
          selectedCategory: CategoryEnum.Feature,
        });
        return true;
      }
      set({ isLoading: false });
      return false;
    } catch (e) {
      const errorMessage = handleApiError(e as AxiosError<ErrorResponse>);
      set({ axiosError: errorMessage, isLoading: false });
      return false;
    }
  },
  // getAllFeedbacks: async () => {
  //   set({ isLoading: true, axiosError: null });
  //   try {
  //     const res = await axiosInstance.get("/feedback");
  //     if (res.status >= 200 && res.status <= 204) {
  //       set({ axiosError: null, isLoading: false, feedbackData: res.data });
  //       console.log(res.data, "res.data")
  //     }
  //   } catch (e) {
  //     const errorMessage = handleApiError(e as AxiosError<ErrorResponse>);
  //     set({ axiosError: errorMessage, isLoading: false });
  //   }
  // },
  getAllFeedbacks: async () => {
    set({ isLoading: true, axiosError: null });

    try {
      const res = await axiosInstance.get("/feedback");

      console.log("Full response:", res);
      console.log("Response status:", res.status);
      console.log("Response data:", res.data);

      if (res.status >= 200 && res.status < 300) {
        // Check if data is an array or needs to be accessed differently
        const feedbackArray = Array.isArray(res.data)
          ? res.data
          : res.data.data || [];

        set({
          axiosError: null,
          isLoading: false,
          feedbackData: feedbackArray,
        });

        console.log("Feedback data set:", feedbackArray);
      } else {
        set({
          isLoading: false,
          axiosError: `Unexpected status code: ${res.status}`,
        });
      }
    } catch (e) {
      console.error("Error in getAllFeedbacks:", e);
      console.error("Error response:", (e as AxiosError)?.response);

      const errorMessage = handleApiError(e as AxiosError<ErrorResponse>);
      set({ axiosError: errorMessage, isLoading: false });
    }
  },
}));
