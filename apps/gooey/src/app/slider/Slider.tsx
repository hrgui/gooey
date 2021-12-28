import React from "react";
import { useSlider, useSliderThumb } from "@react-aria/slider";
import { SliderState, useSliderState } from "@react-stately/slider";
import { useFocusRing } from "@react-aria/focus";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { mergeProps } from "@react-aria/utils";
import { useNumberFormatter } from "@react-aria/i18n";
import type { SliderProps as _SliderProps } from "@react-types/slider";
import classNames from "classnames";
import { NumberFormatOptions } from "@internationalized/number";

export interface SliderProps extends _SliderProps {
  formatOptions?: NumberFormatOptions;
  label?: string;
}

export function Slider(props: SliderProps) {
  let trackRef = React.useRef(null);
  let numberFormatter = useNumberFormatter(props.formatOptions);
  let state = useSliderState({ ...props, numberFormatter });
  let { groupProps, trackProps, labelProps, outputProps } = useSlider(props, state, trackRef);

  return (
    <div className="relative flex flex-col items-center w-[300px] touch-none" {...groupProps}>
      {/* Create a flex container for the label and output element. */}
      <div className="flex self-stretch">
        {props.label && <label {...labelProps}>{props.label}</label>}
        <output {...outputProps} className="flex-[1_0_auto] text-end">
          {state.getThumbValueLabel(0)}
        </output>
      </div>
      <div {...trackProps} ref={trackRef} className="relative h-[30px] w-full">
        <div className="absolute bg-gray-500 h-[3px] top-[13px] w-full" />
        <Thumb index={0} state={state} trackRef={trackRef} />
      </div>
    </div>
  );
}

interface ThumbProps {
  state: SliderState;
  trackRef: React.MutableRefObject<null>;
  index: number;
}

function Thumb(props: ThumbProps) {
  let { state, trackRef, index } = props;
  let inputRef = React.useRef(null);
  let { thumbProps, inputProps } = useSliderThumb(
    {
      index,
      trackRef,
      inputRef,
    },
    state
  );

  let { focusProps, isFocusVisible } = useFocusRing();
  return (
    <div
      className="absolute top-[4px] translate-x-[-50%]"
      style={{
        left: `${state.getThumbPercent(index) * 100}%`,
      }}
    >
      <div
        {...thumbProps}
        className={classNames(
          "w-5 h-5 rounded-[50%] transition-colors",
          isFocusVisible
            ? "bg-orange-500"
            : state.isThumbDragging(index)
            ? "bg-gray-600"
            : "bg-gray-500"
        )}
      >
        <VisuallyHidden>
          <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
        </VisuallyHidden>
      </div>
    </div>
  );
}

export default Slider;
