import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import Scrubber from "./Scrubber";
const meta: Meta = { title: "Scrubber", component: Scrubber };

const Demo: StoryFn = ({ value, ...props }) => {
  const [_value, setInternalValue] = useState(value);

  // TODO: change in value

  return (
    <Scrubber
      value={_value}
      onChange={(newValue) => setInternalValue(newValue)}
      {...props}
    />
  );
};

export const Default = Demo.bind({});
Default.args = {
  max: 100,
  value: 25,
  bufferValue: 35,
};

export default meta;
