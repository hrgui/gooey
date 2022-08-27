import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  value?: string | number;
  index?: string | number;
  children?: React.ReactNode;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export function TabPanel({
  value,
  index,
  children,
  className,
  ...props
}: Props) {
  if (value !== index) {
    return null;
  }

  return (
    <div className={twMerge(`p-[16px]`, className)} {...props}>
      {children}
    </div>
  );
}

export default TabPanel;
