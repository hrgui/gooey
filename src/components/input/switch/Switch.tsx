import classNames from "classnames";
import React, { useEffect, useState } from "react";

type Props = {
  checked?: boolean;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Switch = ({
  checked: externalChecked,
  defaultChecked: externalDefaultChecked,
  onChange: externalOnChange,
  ...props
}: Props) => {
  const [internalChecked, setInternalChecked] = React.useState<boolean>(
    externalChecked || externalDefaultChecked || false
  );

  // props change, we need to update internal state
  useEffect(() => {
    if (typeof externalChecked === "boolean") {
      setInternalChecked(externalChecked as boolean);
    }
  }, [externalChecked]);

  const track = (
    <span
      className={classNames(`h-full w-full rounded-md`, {
        "opacity-[0.5] bg-blue-300": internalChecked,
        "opacity-[0.3] bg-black": !internalChecked,
      })}
    ></span>
  );
  const thumb = (
    <span
      className={classNames(
        "w-5 h-5 bg-[currentColor] rounded-[50%] shadow-[0px_2px_1px_-1px_rgb(0_0_0_/_20%),_0px_1px_1px_0px_rgb(0_0_0_/_14%),_0px_1px_3px_0px_rgb(0_0_0_/_12%)]",
        {
          "bg-[rgb(144,_202,_249)]": internalChecked,
          "bg-[rgb(244,_244,_244)]": !internalChecked,
        }
      )}
    ></span>
  );
  const checkbox = (
    <input
      data-testid={`switch-checkbox-${props.name || props.id}`}
      className="absolute opacity-0 h-full top-0 m-0 p-0 cursor-[inherit] w-[300%] left-[-100%] z-[1]"
      checked={internalChecked}
      onChange={(e) => {
        setInternalChecked(e.target.checked);
        externalOnChange?.(e);
      }}
      type="checkbox"
      {...props}
    />
  );

  return (
    <span className="inline-flex w-[58px] h-[38px] overflow-clip p-[12px] relative flex-shrink-0 z-0 align-middle">
      <span
        className={classNames(
          "inline-flex items-center justify-center box-border bg-transparent outline-none m-0 cursor-pointer select-none align-middle appearance-none no-underline p-2 absolute top-0 left-0 text-gray-300 z-[1] rounded-[50%] transition-[left_150ms_cubic-bezier(0.4,_0,_0.2,_1)_0ms,_transform_150ms_cubic-bezier(0.4,_0,_0.2,_1)_0m]",
          {
            "switch-checked": internalChecked,
          }
        )}
      >
        {checkbox}
        {thumb}
      </span>
      {track}
    </span>
  );
};

export default Switch;
