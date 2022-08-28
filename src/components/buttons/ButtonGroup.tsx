import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const ButtonGroup = ({ className, ...props }: Props) => {
  return (
    <div
      className={twMerge(`inline-flex rounded-md shadow-sm`, className)}
      role="group"
      {...props}
    />
  );
};

export default ButtonGroup;
