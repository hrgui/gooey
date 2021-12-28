import React from "react";
import { Story, Meta } from "@storybook/react";
import { Slider } from "./Slider";
const meta: Meta = { title: "Slider", component: Slider };

const Demo: Story = (props) => <Slider {...props} />;

export const Default = Demo.bind({});
Default.args = {};

export default meta;
