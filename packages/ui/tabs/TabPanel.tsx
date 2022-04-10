import React from "react";

interface Props {
  value?: string | number;
  index?: string | number;
  children?: React.ReactNode;
}

export function TabPanel({ value, index, children }: Props) {
  if (value !== index) {
    return null;
  }

  return <div className="p-[16px]">{children}</div>;
}

export default TabPanel;
