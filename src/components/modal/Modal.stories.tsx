import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { Modal } from "./Modal";
import { Button } from "../buttons";
import Overlay from "../overlay/Overlay";
const meta: Meta = { title: "Modal", component: Modal };

const Demo: Story = (props) => {
  const [modalOpen, setModalOpen] = useState(props.isOpen || false);

  return (
    <>
      <div className="flex items-center justify-center">
        <Button className="z-[9001]" onClick={() => setModalOpen(!modalOpen)}>
          Toggle Modal State
        </Button>
      </div>
      <Modal className="dark:text-white" isOpen={modalOpen} {...props} />
      {modalOpen && <Overlay />}
    </>
  );
};

export const Default = Demo.bind({});
Default.args = {
  children: "Hello World",
};

export default meta;
