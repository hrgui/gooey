import React from "react";
import { StoryFn, Meta } from "@storybook/react-vite";
import ToastProvider from "./ToastProvider";
import { useToasts } from "./useToasts";
import Button from "../buttons/Button";
const meta: Meta<typeof ToastProvider> = {
  title: "ToastProvider",
  component: ToastProvider,
};

function TestSuite() {
  const { addToast } = useToasts();

  return (
    <div>
      <Button onClick={() => addToast("Hello World")}>Add Toast</Button>
    </div>
  );
}

const Demo: StoryFn<any> = (props: any) => (
  <ToastProvider>
    <TestSuite />
  </ToastProvider>
);

export const Default = Demo.bind({});
Default.args = {};

export default meta;
