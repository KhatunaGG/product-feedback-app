import axios, { AxiosError } from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SignUpType } from "../components/__organism/signUp/SignUp";
import { axiosInstance } from "../libs/axiosInstance";
import { SignInType } from "../components/__organism/signIn/SignIn";
import { getCookie, setCookie } from "cookies-next";
// import { toast } from "react-toastify";

export interface IUser {
  name: string;
  lastName: string;
  email: string;
  _id: string;
  userName: string;
  feedbacks: string[];

  // questions: [];
}

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

  accessToken: string | null;
  currentUser: IUser | null;
  formData: {
    name: string;
    lastName: string;
    email: string;
    userName: string;
    password: string;
  };

  signUp: (formData: SignUpType) => Promise<boolean>;
  signIn: (formData: SignInType) => Promise<boolean>;
  initialize: () => Promise<void>;
  getCurrentUser: (token: string | null) => Promise<void>;
  logout: () => void;
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

      accessToken: null,
      currentUser: null,

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

      signIn: async (formData) => {
        set({ isLoading: true, axiosError: null });
        try {
          const res = await axiosInstance.post(`/auth/sign-in`, formData);

          if (res.status >= 200 && res.status <= 204) {
            set({
              axiosError: null,
              isLoading: false,
              accessToken: res.data.token,
            });
            setCookie("accessToken", res.data.token, { maxAge: 60 * 60 });
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
      initialize: async () => {
        const token = getCookie("accessToken");
        if (token && typeof token === "string") {
          set({ accessToken: token, isLoading: false });
          await useAuthStore.getState().getCurrentUser(token);
        } else {
            window.location.href = "/sign-up";
        }
      },

      getCurrentUser: async (accessToken: string | null) => {
        if (!accessToken) return;
        try {
          const res = await axiosInstance.get("/auth/current-user", {
            headers: { Authorization: `Bearer ${accessToken}` },
          });
          if (res.status >= 200 && res.status <= 204) {
            const user: IUser = res.data;
            set({ currentUser: user });
          }
        } catch (e) {
          const errorMessage = handleApiError(e as AxiosError<ErrorResponse>);
          set({ axiosError: errorMessage, isLoading: false });
          window.location.href = "/sign-up";
        }
      },
      logout: () => {
        console.log("logout")
      }
    }),
    {
      name: "auth-store",
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => key !== "accessToken")
        ),
    }
  )
);
