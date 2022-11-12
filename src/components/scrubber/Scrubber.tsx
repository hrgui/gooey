import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { clamp, round } from "~/utils";
import { useStateCallback } from "~/utils/useStateCallback";

export type ScrubberProps = {
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
}: ScrubberProps) => {
  const min = 0;
  const progressValuePercent = toPercentString(value, max);
  const bufferValuePercent = toPercentString(bufferValue, max);
  const barRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [scrubberState, setScrubberState] = useStateCallback({
    seeking: false,
  });

  const getPositionFromCursor = ({
    mouseX,
    touchX,
  }: { mouseX?: number; touchX?: number } = {}) => {
    const barDomNode = barRef.current;

    if (!barDomNode) {
      return 0;
    }
    const { left, width } = barDomNode.getBoundingClientRect();

    if (width === 0) {
      // otherwise from this point on we get NaN if there's no width
      // assume that there is no point in putting a value
      return 0;
    }

    const cursor = typeof touchX === "number" ? touchX : mouseX || 0;
    // want to get value within range [left, left + width], but not any other value outside
    const clampedPositionValue = clamp(cursor, left, left + width);
    const decimal = round((clampedPositionValue - left) / width);
    return round((max - min) * decimal) + min;
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setScrubberState({ seeking: true }, () => {
      onChange(getPositionFromCursor({ mouseX: e.pageX || e.clientX }));
    });
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.changedTouches[0];
    onChange(getPositionFromCursor({ touchX: touch.pageX }));
  };

  /**
   * @param e
   */
  const handleMouseMove = (e: MouseEvent) => {
    if (scrubberState.seeking) {
      onChange(getPositionFromCursor({ mouseX: e.pageX }));
    }
  };

  /**
   * Need to end the seeking state
   */
  const handleMouseUp = () => {
    if (scrubberState.seeking) {
      setScrubberState({ seeking: false });
    }
  };

  // TODO
  const handleTouchMove = (e: TouchEvent) => {};

  // TODO
  const handleTouchEnd = (e: TouchEvent) => {
    if (scrubberState.seeking) {
      setScrubberState({ seeking: false });
    }
  };

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
  }, [scrubberState]);

  return (
    <div
      data-testid="scrubber"
      ref={barRef}
      className="relative h-1 bg-gray-500/50 w-full"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onMouseOver={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
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
      <div
        className={classNames(
          `w-3 h-3 opacity-0 transition-opacity absolute rounded-full top-[50%] translate-y-[-50%] translate-x-[-50%] bg-blue-500`,
          { [`opacity-100`]: isHovering || scrubberState.seeking }
        )}
        style={{ left: progressValuePercent }}
      ></div>
    </div>
  );
};

export default Scrubber;
// bg-[rgba(100,_100,_100,_0.5)]
