import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Scrubber from "./Scrubber";
const meta: Meta = { title: "Scrubber", component: Scrubber };

const Demo: StoryFn = (props) => <Scrubber {...props} />;

export const Default = Demo.bind({});
Default.args = {
  max: 100,
  value: 25,
  bufferValue: 35,
};

export default meta;
