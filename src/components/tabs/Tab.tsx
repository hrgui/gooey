import React from "react";
import classNames from "classnames";

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
        className={classNames("p-[16px]", { "text-blue-500 active": active })}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
);

export default Tab;
