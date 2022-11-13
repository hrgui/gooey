import { KeyboardEvent, useEffect, useState } from "react";

export function useKeyPress(targetKey: string, callback?: () => void) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState<boolean>(false);
  // If pressed key is our target key then set to true
  function downHandler({ key }: KeyboardEvent) {
    if (key === targetKey) {
      setKeyPressed(true);
      callback?.();
    }
  }
  // If released key is our target key then set to false
  const upHandler = ({ key }: KeyboardEvent) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };
  // Add event listeners
  useEffect(() => {
    window.addEventListener(
      "keydown",
      downHandler as unknown as (e: Event) => void
    );
    window.addEventListener(
      "keyup",
      upHandler as unknown as (e: Event) => void
    );
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener(
        "keydown",
        downHandler as unknown as (e: Event) => void
      );
      window.removeEventListener(
        "keyup",
        upHandler as unknown as (e: Event) => void
      );
    };
  }, [callback]); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
}
