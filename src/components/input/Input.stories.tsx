import React from "react";
import { Story, Meta } from "@storybook/react";
import { Input } from "./Input";
const meta: Meta = { title: "Input", component: Input };

const Demo: Story = (props) => <Input {...props} />;

export const TextInput = Demo.bind({});
TextInput.args = {
  type: "text",
  placeholder: "Type some text...",
};

export const EmailInput = Demo.bind({});
EmailInput.args = {
  type: "email",
  placeholder: "john@example.com",
};

export const DateInput = Demo.bind({});
DateInput.args = {
  type: "date",
  placeholder: "Type some text...",
};

export default meta;
