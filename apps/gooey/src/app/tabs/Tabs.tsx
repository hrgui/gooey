import React, { Children } from "react";
import classNames from "classnames";

// Inspiration
// https://github.com/mui-org/material-ui/blob/master/packages/mui-material/src/Tabs/Tabs.js

export const Tab = React.forwardRef((props, ref) => {
  const { label, active, onClick } = props;

  return (
    <button
      ref={ref}
      className={classNames("p-[16px]", { "text-blue-500": active })}
      onClick={onClick}
    >
      {label}
    </button>
  );
});

export function Tabs({ children: _children, value, onChange }) {
  const tabsRef = React.useRef(null);
  const tabRef = React.useRef(null);
  const [indicatorPos, setIndicatorPos] = React.useState([0, 0]);

  function updateIndicatorStyle({ width, left }, tabsRef: HTMLDivElement) {
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
    <div className="border-b-[1px] border-gray-300 block">
      <div className="relative">
        <div ref={tabsRef} className="flex">
          {Children.map(_children, (child, idx) => {
            const active = value === idx;
            const ref = active ? tabRef : undefined;
            return React.cloneElement(child, {
              onClick: (e) => {
                onChange(e, idx);
              },
              ref,
              active,
            });
          })}
        </div>
        <span
          className="absolute bottom-0 bg-blue-600 h-[2px] delay-[0] duration-[0.3s] transition-all ease-in whitespace-nowrap"
          style={{ left: indicatorPos[0], width: indicatorPos[1] }}
        />
      </div>
    </div>
  );
}

export function TabPanel({ value, index, children }) {
  if (value !== index) {
    return null;
  }

  return <div className="p-[16px]">{children}</div>;
}
