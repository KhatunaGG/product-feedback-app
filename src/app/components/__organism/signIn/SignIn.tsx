"use client";
import Link from "next/link";
// import { Input } from "../../__molecules";

const SignIn = () => {
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

      <div className="w-full flex flex-col gap-4">
        {/* <Input register={register} errors={errors} fieldName="email" />
        <Input register={register} errors={errors} fieldName="userName" /> */}
        {/* <Input register={register} errors={errors} fieldName="password" /> */}

        {/* <div className="w-fill flex  gap-2 flex-col ">
          <label htmlFor="" className="text-[#647196] text-sm">
            Email
          </label>
          <input
            type="text"
            className="w-full  border border-[#e8e3e3] rounded-[5px] px-2 md:px-4 py-2 outline-none"
          />
        </div>

        <div className="w-fill flex  gap-2 flex-col ">
          <label htmlFor="" className="text-[#647196] text-sm">
            User Name
          </label>
          <input
            type="text"
            className="w-full  border border-[#e8e3e3] rounded-[5px] px-2 md:px-4 py-2 outline-none"
          />
        </div> */}

        <div className="w-full flex items-center justify-center mt-4">
          <button className="bg-[#3A4374] rounded-lg w-full py-4 text-white font-bold text-base">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
