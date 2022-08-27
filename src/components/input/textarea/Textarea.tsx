import ctl from "@netlify/classnames-template-literals";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {} & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export const Textarea = ({ className, ...props }: Props) => {
  return (
    <textarea
      className={twMerge(
        ctl(`
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
`),
        className
      )}
      {...props}
    />
  );
};

export default Textarea;
