import React from "react";
import { Story, Meta } from "@storybook/react";
import ToastProvider from "./ToastProvider";
import { useToasts } from "./useToasts";
import Button from "../buttons/Button";
const meta: Meta = { title: "ToastProvider", component: ToastProvider };

function TestSuite() {
  const { addToast } = useToasts();

  return (
    <div>
      <Button onClick={() => addToast("Hello World")}>Add Toast</Button>
    </div>
  );
}

const Demo: Story = (props) => (
  <ToastProvider>
    <TestSuite />
  </ToastProvider>
);

export const Default = Demo.bind({});
Default.args = {};

export default meta;
