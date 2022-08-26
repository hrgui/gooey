import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { Drawer } from "./Drawer";
import { Button } from "../buttons";
const meta: Meta = { title: "Drawer", component: Drawer };

const Demo: Story = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center">
        <Button onClick={() => setDrawerOpen(!drawerOpen)}>
          Toggle Drawer State
        </Button>
      </div>
      <Drawer className="text-white" isOpen={drawerOpen} {...props} />
    </>
  );
};

export const Default = Demo.bind({});
Default.args = {
  children: "Hello World",
};

export default meta;
