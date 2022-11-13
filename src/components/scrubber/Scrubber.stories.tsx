import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import Scrubber, { ScrubberProps } from "./Scrubber";
import { useKeyPress } from "~/hooks/useKeyPress";
const meta: Meta = { title: "Scrubber", component: Scrubber };

const Demo: StoryFn = ({ value, ...props }) => {
  const [_value, setInternalValue] = useState(value);
  const arrowRightPressed = useKeyPress("ArrowRight", () =>
    setInternalValue(_value + 10 > props.max ? props.max : _value + 10)
  );
  const arrowLeftPressed = useKeyPress("ArrowLeft", () =>
    setInternalValue(_value - 10 <= 0 ? 0 : _value - 10)
  );

  const handleChange: ScrubberProps["onChange"] = (newValue) => {
    return setInternalValue(newValue);
  };

  // TODO: change in value

  return (
    <div>
      <Scrubber value={_value} {...props} onChange={handleChange} />
      <div className="text-white">
        <div className="">Value: {_value}</div>
        <div className="italic">
          Waiting for arrow key press (ArrowLeft or ArrowRight)...
          <div className="font-bold">
            {arrowRightPressed && "ArrowRight Pressed"}
            {arrowLeftPressed && "ArrowLeft Pressed"}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Default = Demo.bind({});
Default.args = {
  max: 100,
  value: 25,
  bufferValue: 35,
};

export default meta;
