import React from "react";
import cx from "classnames";
import { twMerge } from "tailwind-merge";
import ctl from "@netlify/classnames-template-literals";

const variantClassNameMap = {
  default: ctl(
    `text-white
    bg-blue-600
    hover:bg-blue-700
    active:bg-blue-800
    focus:bg-blue-800

    dark:bg-blue-500 
    dark:hover:bg-blue-600
    dark:active:bg-blue-700
    dark:focus:bg-blue-700
    `
  ),
  danger: ctl(
    `text-white
    bg-red-600
    hover:bg-red-700
    active:bg-red-800

    dark:bg-red-500 
    dark:hover:bg-red-600
    dark:active:bg-red-700
    dark:focus:bg-red-700
    `
  ),
  success: ctl(
    `text-white
    bg-green-600
    hover:bg-green-700
    active:bg-green-800
    focus:bg-green-800

    dark:bg-green-500 
    dark:hover:bg-green-600
    dark:active:bg-green-700
    dark:focus:bg-green-700`
  ),
  warning: ctl(
    `text-white 
    bg-yellow-600
    hover:bg-yellow-700
    active:bg-yellow-800
    focus:bg-yellow-800

    dark:bg-yellow-500 
    dark:hover:bg-yellow-600
    dark:active:bg-yellow-700
    dark:focus:bg-yellow-700`
  ),
};

export type ButtonProps = {
  variant?: keyof typeof variantClassNameMap;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({
  variant = "default",
  type = "button",
  className: inputtedClassName,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = ctl(`
    font-medium 
    ${inputtedClassName?.includes("rounded") ? "" : "rounded-full"} 
    text-sm 
    px-5 
    py-2.5 
    focus:outline-none
    duration-300
    transition-all
    relative
    group
    overflow-hidden
`);

  function getVariantClassName(variant: ButtonProps["variant"]) {
    return variantClassNameMap[variant!];
  }

  const className = twMerge(
    cx(baseStyles, getVariantClassName(variant)),
    inputtedClassName
  );
  return (
    <button type={type} className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
