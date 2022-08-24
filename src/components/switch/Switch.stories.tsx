import { Story, Meta } from "@storybook/react";
import { Switch } from "./Switch";
const meta: Meta = { title: "Switch", component: Switch };

const Demo: Story = (args) => <Switch {...args} />;

export const Default = Demo.bind({});
Default.args = {
  checked: true,
};

export default meta;
