// import axios, { AxiosError } from "axios";
// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// export interface ErrorResponse {
//   message: string;
// }

// const handleApiError = (error: AxiosError<ErrorResponse>): string => {
//   if (axios.isAxiosError(error)) {
//     return error.response?.data.message || "An error occurred";
//   }
//   return "An unexpected error occurred";
// };

// export type UseCommentStoreStyle = {
//   isLoading: boolean;
// };

// export const useCommentStore = create<UseCommentStoreStyle>()(
//   persist(
//     (set, get) => ({
//       isLoading: false,
//     }),
//     {
//       name: "comment-store",
//     }
//   )
// );
