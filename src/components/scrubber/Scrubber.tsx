import React from "react";

type Props = {
  value?: number;
  bufferValue?: number;
  max?: number;
};

function toPercentString(value: number, max: number) {
  return ((value / max) * 100).toFixed(5) + "%";
}

const Scrubber = ({ max = 1, value = 0, bufferValue = 0 }: Props) => {
  const progressValuePercent = toPercentString(value, max);
  const bufferValuePercent = toPercentString(bufferValue, max);
  return (
    <div className="relative h-1 bg-gray-500/50 w-full">
      <div
        className="absolute bg-blue-500 h-full z-20"
        style={{ width: progressValuePercent }}
      >
        <div className="sr-only">{progressValuePercent}</div>
      </div>
      <div
        className="absolute bg-gray-500/50 h-full z-10"
        style={{ width: bufferValuePercent }}
      >
        <div className="sr-only">{bufferValuePercent}</div>
      </div>
    </div>
  );
};

export default Scrubber;
// bg-[rgba(100,_100,_100,_0.5)]
