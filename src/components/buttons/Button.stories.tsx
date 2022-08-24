import { Story, Meta } from "@storybook/react";
import { Button } from "./Button";
const meta: Meta = { title: "Button", component: Button };

const Demo: Story = (props) => <Button {...props} />;

export const Default = Demo.bind({});
Default.args = {
  children: "Hello World",
};

export default meta;
