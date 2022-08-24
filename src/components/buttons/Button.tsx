import React from "react";
import cx from "classnames";
import { twMerge } from "tailwind-merge";
import ctl from "@netlify/classnames-template-literals";

const baseStyles = ctl(`
    focus:ring-4 
    font-medium 
    rounded-full 
    text-sm 
    px-5 
    py-2.5 
    focus:outline-none 
`);

const variantClassNameMap = {
  default: ctl(
    `text-white
    focus:ring-blue-300 
    dark:bg-blue-600 
    dark:hover:bg-blue-700 
    dark:focus:ring-blue-800`
  ),
  danger: ctl(
    `text-white
    focus:ring-red-300 
    dark:bg-red-600 
    dark:hover:bg-red-700 
    dark:focus:ring-red-800`
  ),
  success: ctl(
    `text-white
    focus:ring-green-300 
    dark:bg-green-600 
    dark:hover:bg-green-700 
    dark:focus:ring-green-800`
  ),
  warning: ctl(
    `text-white
    focus:ring-yellow-300 
    dark:bg-yellow-600 
    dark:hover:bg-yellow-700 
    dark:focus:ring-yellow-800`
  ),
};

type Props = {
  variant?: keyof typeof variantClassNameMap;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({
  variant = "default",
  className: inputtedClassName,
  ...props
}: Props) => {
  function getVariantClassName(variant: Props["variant"]) {
    return variantClassNameMap[variant!];
  }

  const className = twMerge(
    cx(baseStyles, getVariantClassName(variant), inputtedClassName)
  );
  return <button className={className} {...props} />;
};

export default Button;
