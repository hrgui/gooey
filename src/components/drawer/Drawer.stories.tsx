import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { Drawer } from "./Drawer";
import { Button } from "../buttons";
import Overlay from "../overlay/Overlay";
const meta: Meta = { title: "Drawer", component: Drawer };

const Demo: Story = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center">
        <Button className="z-[9001]" onClick={() => setDrawerOpen(!drawerOpen)}>
          Toggle Drawer State
        </Button>
      </div>
      <Drawer className="dark:text-white p-4" isOpen={drawerOpen} {...props} />
      {drawerOpen && <Overlay />}
    </>
  );
};

export const Default = Demo.bind({});
Default.args = {
  children: "Hello World",
};

export default meta;
