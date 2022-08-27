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

export const PasswordInput = Demo.bind({});
PasswordInput.args = {
  type: "password",
  value: "gooey",
};

export const EmailInput = Demo.bind({});
EmailInput.args = {
  type: "email",
  placeholder: "john@example.com",
};

export const NumberInput = Demo.bind({});
NumberInput.args = {
  type: "number",
  placeholder: "Enter a number",
};

export const UrlInput = Demo.bind({});
UrlInput.args = {
  type: "url",
  placeholder: "Enter a url",
};

export const DateInput = Demo.bind({});
DateInput.args = {
  type: "date",
};

export const DatetimeInput = Demo.bind({});
DatetimeInput.args = {
  type: "datetime-local",
};

export const MonthInput = Demo.bind({});
MonthInput.args = {
  type: "month",
};

export const WeekInput = Demo.bind({});
WeekInput.args = {
  type: "week",
};

export const TimeInput = Demo.bind({});
TimeInput.args = {
  type: "time",
};

export const SearchInput = Demo.bind({});
SearchInput.args = {
  type: "search",
};

export const TelInput = Demo.bind({});
TelInput.args = {
  type: "tel",
};

export const CheckboxInput = Demo.bind({});
CheckboxInput.args = {
  type: "checkbox",
};

export const RadioInput = Demo.bind({});
RadioInput.args = {
  type: "radio",
};

export default meta;
