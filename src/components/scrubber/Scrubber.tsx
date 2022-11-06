import React, { useEffect, useRef } from "react";
import { clamp, round } from "~/utils";

type Props = {
  value?: number;
  bufferValue?: number;
  max?: number;
  onChange?: (newValue: number) => void;
};

function toPercentString(value: number, max: number) {
  return ((value / max) * 100).toFixed(5) + "%";
}

const Scrubber = ({
  max = 1,
  value = 0,
  bufferValue = 0,
  onChange = () => {},
}: Props) => {
  const min = 0;
  const progressValuePercent = toPercentString(value, max);
  const bufferValuePercent = toPercentString(bufferValue, max);
  const barRef = useRef<HTMLDivElement>(null);

  const getPositionFromCursor = ({
    mouseX,
    touchX,
  }: { mouseX?: number; touchX?: number } = {}) => {
    const barDomNode = barRef.current;

    if (!barDomNode) {
      return 0;
    }
    const { left, width } = barDomNode.getBoundingClientRect();
    const cursor = typeof touchX === "number" ? touchX : mouseX || 0;
    // want to get value within range [left, left + width], but not any other value outside
    const clampedPositionValue = clamp(cursor, left, left + width);
    // needs to correspond to the width
    const decimal = round((clampedPositionValue - left) / width);
    return round((max - min) * decimal) + min;
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    onChange(getPositionFromCursor({ mouseX: e.pageX }));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.changedTouches[0];
    onChange(getPositionFromCursor({ touchX: touch.pageX }));
  };

  const handleMouseMove = () => {};
  const handleMouseUp = () => {};
  const handleTouchMove = () => {};
  const handleTouchEnd = () => {};

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="relative h-1 bg-gray-500/50 w-full"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={(e) => e.preventDefault()}
    >
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
