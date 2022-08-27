import ctl from "@netlify/classnames-template-literals";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {} & React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

export const Select = ({ className, ...props }: Props) => {
  return (
    <select
      className={twMerge(
        ctl(`
    block
    mt-1
    rounded-md
    bg-gray-100
    border-transparent
    focus:border-gray-500 focus:bg-white focus:ring-0
    dark:text-gray-300
    dark:bg-gray-700
    dark:focus:bg-gray-800
    `),

        className
      )}
      {...props}
    />
  );
};

export default Select;
