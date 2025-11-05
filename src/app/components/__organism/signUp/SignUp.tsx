"use client";
import Link from "next/link";
import { Input } from "../../__molecules";
import { toast } from "react-toastify";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "@/app/store/auth.store";

export const signUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  lastName: z.string().min(1, "Last Name is required").max(50),
  email: z
    .string()
    .min(1, "Email is required")
    .max(50)
    .email("Please enter a valid email address"),
  userName: z.string().min(1, "User Name is required"),
  password: z.string().min(1, "Last Name is required").max(50),
});

export type SignUpType = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const { signUp } = useAuthStore();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      userName: "",
      password: "",
    },
  });

  const onsubmit = async (formData: SignUpType) => {
    console.log("formData", formData);
    try {
      const success = await signUp(formData);
      if (success) {
        // toast.success("Account created successfully!");
        reset();
      }
    } catch (e) {
      toast.error(e as string);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg px-4 md:px-6 lg:px-8 py-10 flex flex-col gap-8 w-[83%] md:w-[70%] lg:w-[40%]">
      <div className="w-full flex flex-col gap-2">
        <h1 className="w-full flex items-start text-xl font-bold text-[#3A4374]">
          Sign Up
        </h1>
        <div className="w-full flex items-center justify-start gap-6">
          <h2 className="text-sm text-[#647196] ">Already have an account? </h2>
          <Link href={"/sign-in"} className="font-bold text-[#647196]">
            Sign in
          </Link>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onsubmit)}
        className="w-full flex flex-col gap-4"
      >
        <Input register={register} errors={errors} fieldName="name" />
        <Input register={register} errors={errors} fieldName="lastName" />
        <Input register={register} errors={errors} fieldName="email" />
        <Input register={register} errors={errors} fieldName="userName" />
        <Input register={register} errors={errors} fieldName="password" />

        <div className="w-full flex items-center justify-center mt-4">
          <button className="bg-[#3A4374] rounded-lg w-full py-4 text-white font-bold text-base">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
