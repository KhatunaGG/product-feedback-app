"use client";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

export type InputType<T extends FieldValues> = {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  fieldName: Path<T>;
};

type FieldNameType = "name" | "lastName" | "email" | "userName" | "password";
const normalizeFieldNames = (val: FieldNameType): string => {
  switch (val) {
    case "lastName":
      return "Last Name";

    case "userName":
      return "User Name";

    case "email":
      return "Email";

    case "name":
      return "Name";

    case "password":
      return "Password";

    default:
      return val as string;
  }
};

const Input = <T extends FieldValues>({
  register,
  errors,
  fieldName,
}: InputType<T>) => {
  const error = errors[fieldName]?.message as string | undefined;
  console.log('error', error)

  return (
    <div className="w-fill flex  gap-2 flex-col ">
      <label htmlFor="" className="text-[#647196] text-sm">
        {normalizeFieldNames(fieldName as FieldNameType)}
      </label>
      <input
        {...register(fieldName)}
        type="text"
        className="w-full  border border-[#e8e3e3] rounded-[5px] px-2 md:px-4 py-2 outline-none"
      />
    </div>
  );
};

export default Input;
