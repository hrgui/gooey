import { render } from "@testing-library/react";
import { Overlay } from "./Overlay";

test("renders without crashing", () => {
  render(<Overlay />);
});

it("should accept a className", () => {
  const { container } = render(<Overlay className="hello-world" />);
  expect(container.firstElementChild?.className).toMatchInlineSnapshot(
    '"z-10 fixed inset-0 transition-opacity hello-world"'
  );
});

it("should be able to override current TW classes", () => {
  const { container } = render(<Overlay className="z-20 absolute" />);
  expect(container.firstElementChild?.className).toMatchInlineSnapshot(
    '"inset-0 transition-opacity z-20 absolute"'
  );
});
