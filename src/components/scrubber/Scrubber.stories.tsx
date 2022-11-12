import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import Scrubber, { ScrubberProps } from "./Scrubber";
const meta: Meta = { title: "Scrubber", component: Scrubber };

const Demo: StoryFn = ({ value, ...props }) => {
  const [_value, setInternalValue] = useState(value);

  const handleChange: ScrubberProps["onChange"] = (newValue) => {
    return setInternalValue(newValue);
  };

  // TODO: change in value

  return <Scrubber value={_value} {...props} onChange={handleChange} />;
};

export const Default = Demo.bind({});
Default.args = {
  max: 100,
  value: 25,
  bufferValue: 35,
};

export default meta;
