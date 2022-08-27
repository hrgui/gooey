import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = ({ className, ...props }: Props) => {
  return (
    <input
      className={twMerge(
        `
        mt-1
        block
        w-full
        rounded-md
        bg-gray-100
        border-transparent
        focus:border-gray-500 focus:bg-white focus:ring-0

        dark:bg-gray-700
        dark:text-gray-300
        dark:focus:bg-gray-800

`,
        className
      )}
      {...props}
    />
  );
};

export default Input;
