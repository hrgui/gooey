import React from "react";
import { StoryFn, Meta } from "@storybook/react-vite";
import { Select as SelectInput } from "./Select";
const meta: Meta<typeof SelectInput> = {
  title: "Input",
  component: SelectInput,
};

export const Select: StoryFn<any> = (props: any) => (
  <SelectInput {...props}>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </SelectInput>
);
Select.args = {};

export const SelectMultiple: StoryFn<any> = (props: any) => (
  <SelectInput multiple {...props}>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </SelectInput>
);
SelectMultiple.args = {};

export default meta;
