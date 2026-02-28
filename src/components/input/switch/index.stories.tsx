import { StoryFn, Meta } from "@storybook/react-vite";
import { Switch as SwitchComponent } from "./Switch";
const meta: Meta<typeof SwitchComponent> = {
  title: "Input",
  component: SwitchComponent,
};

const Demo: StoryFn<any> = (args: any) => <SwitchComponent {...args} />;

export const Switch = Demo.bind({});
Switch.args = {
  checked: true,
};

export default meta;
