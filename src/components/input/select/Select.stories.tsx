import React from "react";
import { Story, Meta } from "@storybook/react";
import { Select as SelectInput } from "./Select";
const meta: Meta = { title: "Input", component: SelectInput };

export const Select: Story = (props) => (
  <SelectInput {...props}>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </SelectInput>
);
Select.args = {};

export const SelectMultiple: Story = (props) => (
  <SelectInput multiple {...props}>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </SelectInput>
);
SelectMultiple.args = {};

export default meta;
