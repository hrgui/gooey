import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { Drawer } from "./Drawer";
import { Button } from "../buttons";
import Overlay from "../overlay/Overlay";
const meta: Meta = { title: "Drawer", component: Drawer };

const Demo: Story = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawerOpen = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <div className="flex items-center justify-center">
        <Button onClick={toggleDrawerOpen}>Toggle Drawer State</Button>
      </div>
      <Drawer className="dark:text-white p-4" isOpen={drawerOpen} {...props} />
      {drawerOpen && <Overlay onClick={toggleDrawerOpen} />}
    </>
  );
};

export const Default = Demo.bind({});
Default.args = {
  children: "Hello World",
};

export default meta;
