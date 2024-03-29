import React from "react";
import { twMerge } from "tailwind-merge";
import ctl from "@netlify/classnames-template-literals";

type Props = {} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = ({ className, type = "text", ...props }: Props) => {
  const isBoxInput = type === "checkbox" || type === "radio";

  function getClassName(inputType: typeof type) {
    switch (inputType) {
      default:
        return ctl(`
        mt-1
        ${isBoxInput ? "" : "block"}
        ${isBoxInput ? "rounded" : "rounded-md"}
        ${isBoxInput ? "border-gray-300" : "border-transparent"}
        ${isBoxInput ? "bg-gray-200" : "bg-gray-100"}
        focus:border-gray-500 focus:bg-white focus:ring-0
        dark:bg-gray-700
        ${isBoxInput ? "" : "dark:text-gray-300"}
        ${
          isBoxInput
            ? ""
            : "focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
        }
        dark:focus:bg-gray-800`);
      case "range":
        return ctl(`w-full 
        h-2 
        bg-gray-200 
        rounded-lg 
        appearance-none 
        cursor-pointer 
        dark:bg-gray-700`);
    }
  }

  return (
    <input
      type={type}
      className={twMerge(getClassName(type), className)}
      {...props}
    />
  );
};

export default Input;
