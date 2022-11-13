import { fireEvent, render, screen } from "@testing-library/react";
import { useKeyPress } from "./useKeyPress";

function KeyPressTest({
  targetKey,
  callback,
}: {
  targetKey: string;
  callback?: () => void;
}) {
  const keyPressed = useKeyPress(targetKey, callback);
  return (
    <div>
      {targetKey} {keyPressed ? "was pressed" : "was not pressed"}
    </div>
  );
}

it("should be able to call the callback on key down", async () => {
  const callback = vi.fn();
  const { container } = render(
    <KeyPressTest targetKey="a" callback={callback} />
  );
  fireEvent.keyDown(container, { key: "a" });
  expect(callback).toHaveBeenCalled();
  expect(screen.getByText(/was pressed/)).toBeInTheDocument();
});

it("should call the callback on key down, then on key up it should show its not pressed", async () => {
  const callback = vi.fn();
  const { container } = render(
    <KeyPressTest targetKey="a" callback={callback} />
  );
  fireEvent.keyDown(container, { key: "a" });
  expect(callback).toHaveBeenCalled();
  fireEvent.keyUp(container, { key: "a" });
  expect(screen.getByText(/was not pressed/)).toBeInTheDocument();
});
