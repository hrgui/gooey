import { Story, Meta } from "@storybook/react";
import { Switch as SwitchComponent } from "./Switch";
const meta: Meta = { title: "Input", component: SwitchComponent };

const Demo: Story = (args) => <SwitchComponent {...args} />;

export const Switch = Demo.bind({});
Switch.args = {
  checked: true,
};

export default meta;
