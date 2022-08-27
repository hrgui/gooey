import React from "react";
import { Story, Meta } from "@storybook/react";
import { Textarea } from "./Textarea";
const meta: Meta = { title: "Input", component: Textarea };

const Demo: Story = (props) => <Textarea {...props} />;

export const TextareaInput = Demo.bind({});
TextareaInput.args = {};

export default meta;
