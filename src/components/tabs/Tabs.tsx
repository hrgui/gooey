import React, { Children } from "react";

// Inspiration
// https://github.com/mui-org/material-ui/blob/master/packages/mui-material/src/Tabs/Tabs.js
export interface TabsProps {
  children?: React.ReactNode;
  value?: string | number;
  onChange?: (
    event: React.MouseEvent<HTMLButtonElement>,
    idx: string | number
  ) => void;
}

export function Tabs({ children: _children, value, onChange }: TabsProps) {
  const tabsRef = React.useRef<HTMLDivElement>(null);
  const tabRef = React.useRef<HTMLButtonElement>(null);
  const [indicatorPos, setIndicatorPos] = React.useState([0, 0]);

  function updateIndicatorStyle(
    { width, left }: DOMRect,
    tabsRef: HTMLDivElement
  ) {
    const pos = left - tabsRef.getBoundingClientRect().left;
    setIndicatorPos([pos, width]);
  }

  React.useEffect(() => {
    if (!tabRef.current) {
      return;
    }
    updateIndicatorStyle(
      tabRef.current.getBoundingClientRect(),
      tabsRef.current as unknown as HTMLDivElement
    );
  }, [value]);

  return (
    <div className="border-b-[1px] border-gray-300 dark:border-gray-600 block">
      <div className="relative">
        <div ref={tabsRef} className="flex">
          {Children.map(_children, (child, idx) => {
            const active = value === idx;
            const ref = active ? tabRef : undefined;
            return React.cloneElement(child as React.ReactElement, {
              onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
                onChange?.(e, idx);
              },
              ref,
              active,
            });
          })}
        </div>
        <span
          className="absolute bottom-0 bg-blue-600 dark:bg-blue-300 h-[2px] delay-[0] duration-[0.3s] transition-all ease-in whitespace-nowrap"
          style={{ left: indicatorPos[0], width: indicatorPos[1] }}
        />
      </div>
    </div>
  );
}
