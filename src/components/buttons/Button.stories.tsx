import { Story, Meta } from "@storybook/react";
import { Button } from "./Button";
import ButtonGroup from "./ButtonGroup";
const meta: Meta = { title: "Button", component: Button };

const Demo: Story = (props) => <Button {...props} />;

export const Default = Demo.bind({});
Default.args = {
  children: "Hello World",
};

export const Group: Story = ({
  onOptionOneClick,
  onOptionTwoClick,
  onOptionThreeClick,
  ...props
}) => (
  <ButtonGroup {...props}>
    <Button
      onClick={onOptionOneClick}
      className="rounded-l-full border border-gray-200 dark:border-gray-600"
    >
      Option 1
    </Button>
    <Button
      onClick={onOptionTwoClick}
      className="rounded-none border border-gray-200 dark:border-gray-600"
    >
      Option 2
    </Button>
    <Button
      onClick={onOptionThreeClick}
      className="rounded-r-full border border-gray-200 dark:border-gray-600"
    >
      Option 3
    </Button>
  </ButtonGroup>
);
Group.args = {
  children: "Hello World",
};

export default meta;
