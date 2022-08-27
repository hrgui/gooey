import React from "react";
import { twMerge } from "tailwind-merge";
import ctl from "@netlify/classnames-template-literals";

type Props = {} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = ({ className, type, ...props }: Props) => {
  const isBoxInput = type === "checkbox" || type === "radio";
  return (
    <input
      type={type}
      className={twMerge(
        ctl(`
        mt-1
        block
        rounded-md
        ${isBoxInput ? "border-gray-300" : "border-transparent"}
        bg-gray-100
        focus:border-gray-500 focus:bg-white focus:ring-0
        dark:bg-gray-700
        ${isBoxInput ? "" : "dark:text-gray-300"}
        dark:focus:bg-gray-800
`),
        className
      )}
      {...props}
    />
  );
};

export default Input;
