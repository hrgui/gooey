import React from "react";
import { Story, Meta } from "@storybook/react";
import { Switch } from "ui/switch/Switch";
const meta: Meta = { title: "Switch", component: Switch };

const Demo: Story = (props) => <Switch {...props} />;

export const Default = Demo.bind({});
Default.args = {};

export const All = () => {
  return (
    <>
      <Switch />
      <Switch checked />
    </>
  );
};

export default meta;
