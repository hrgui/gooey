import React from "react";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export interface TabProps {
  label?: string;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  (props, ref) => {
    const { label, active, onClick } = props;

    return (
      <button
        ref={ref}
        className={twMerge(
          classNames(
            "p-[16px] dark:text-gray-300 active:bg-blue-300/20 transition-all",
            {
              "text-blue-500 dark:text-blue-300 active": active,
            }
          )
        )}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
);

export default Tab;
