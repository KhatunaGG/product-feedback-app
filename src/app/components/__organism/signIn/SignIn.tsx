"use client";
import Link from "next/link";
import { Input } from "../../__molecules";
import z  from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useAuthStore } from "@/app/store/auth.store";
import { useRouter } from "next/navigation";

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .max(50)
    .email("Please enter a valid email address"),
  password: z.string().min(1, "Last Name is required").max(50),
});

export type SignInType = z.infer<typeof signInSchema>;

const SignIn = () => {
  const { signIn } = useAuthStore();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData: SignInType) => {
    try {
      const isSuccess = await signIn(formData);
      if (isSuccess) {
        reset();
        router.push("/");
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
          <h2 className="text-sm text-[#647196] ">
            New here? Create an account.
          </h2>
          <Link href={"/sign-up"} className="font-bold text-[#647196]">
            Sign Up
          </Link>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4"
      >
        <Input register={register} errors={errors} fieldName="email" />
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

export default SignIn;
