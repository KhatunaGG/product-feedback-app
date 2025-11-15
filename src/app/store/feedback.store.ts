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

  likes: number;
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
  feedbackByParams: DbFeedbackType | null;

  toggleOverlay: () => void;
  setSelectedCategory: (category: CategoryEnum) => void;
  setSelectedStatus: (status: StatusEnum) => void;
  setSelectedHeaderOptions: (selectedHeaderOptions: HeaderOptionEnum) => void;
  setIsDropDown: (val: boolean) => void;
  // setFeedbackId: (id: string | null) => void;
  createFeedback: (formData: InterActiveType) => Promise<boolean>;
  getAllFeedbacks: () => Promise<void>;
  getFeedbackById: (feedbackId: string) => Promise<void>;
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
  feedbackByParams: null,

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
          isOverlyOpen: false,
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
      if (res.status >= 200 && res.status < 300) {
        const feedbackArray = Array.isArray(res.data)
          ? res.data
          : res.data.data || [];

        set({
          axiosError: null,
          isLoading: false,
          feedbackData: feedbackArray,
        });
      } else {
        set({
          isLoading: false,
          axiosError: null,
        });
      }
    } catch (e) {
      const errorMessage = handleApiError(e as AxiosError<ErrorResponse>);
      set({ axiosError: errorMessage, isLoading: false });
    }
  },
  getFeedbackById: async (feedbackId: string) => {
    set({ isLoading: true, axiosError: null });
    try {
      const res = await axiosInstance.get(`/feedback/${feedbackId}`);

      if (res.status >= 200 && res.status <= 204) {
        set({ isLoading: false, axiosError: null, feedbackByParams: res.data });
        console.log('res.data', res.data)
      }
    } catch (e) {
      const errorMessage = handleApiError(e as AxiosError<ErrorResponse>);
      set({ axiosError: errorMessage, isLoading: false });
    }
  },
}));
