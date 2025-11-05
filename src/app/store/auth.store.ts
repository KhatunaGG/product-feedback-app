import axios, { AxiosError } from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SignUpType } from "../components/__organism/signUp/SignUp";
import { axiosInstance } from "../libs/axiosInstance";
// import { toast } from "react-toastify";

export interface ErrorResponse {
  message: string;
}

const handleApiError = (error: AxiosError<ErrorResponse>): string => {
  if (axios.isAxiosError(error)) {
    return error.response?.data.message || "An error occurred";
  }
  return "An unexpected error occurred";
};

export type useAuthStoreType = {
  isLoading: boolean;
  axiosError: string | null;
  formData: {
    name: string;
    lastName: string;
    email: string;
    userName: string;
    password: string;
  };

  signUp: (formData: SignUpType) => Promise<boolean>;
};

export const useAuthStore = create<useAuthStoreType>()(
  persist(
    (set) => ({
      isLoading: false,
      axiosError: null,
      formData: {
        name: "",
        lastName: "",
        email: "",
        userName: "",
        password: "",
      },

      signUp: async (formData: SignUpType) => {
        set({ isLoading: true });

        try {
          const res = await axiosInstance.post("/auth/sign-up", formData);
          if (res.status >= 200 && res.status <= 204) {
            set({
              isLoading: false,
              axiosError: null,
              formData: {
                name: "",
                lastName: "",
                email: "",
                userName: "",
                password: "",
              },
            });
            // toast.success("Account created successfully!");
            window.location.href = "/sign-in";
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
    }),
    {
      name: "auth-store",
    }
  )
);
