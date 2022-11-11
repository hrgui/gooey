import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Scrubber from "./Scrubber";

const originalGetBoundingClientRect = Element.prototype.getBoundingClientRect;

it("should render without crashing when no values applied", () => {
  render(<Scrubber />);
});

it("should render 25% for the progressValue, 35% for the bufferValue", () => {
  render(<Scrubber value={25} bufferValue={35} max={100} />);
  expect(screen.getByText("25.00000%")).toBeInTheDocument();
  expect(screen.getByText("35.00000%")).toBeInTheDocument();
});

describe("valid onChange", () => {
  beforeEach(() => {
    // required because otherwise it returns 0,0,0,0 by default
    Element.prototype.getBoundingClientRect = () =>
      ({
        width: 120,
        height: 3,
        x: 0,
        y: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      } as DOMRect);
  });

  afterEach(() => {
    Element.prototype.getBoundingClientRect = originalGetBoundingClientRect;
  });

  it("should render 25% for the progressValue, 35% for the bufferValue", async () => {
    const onChange = vi.fn();

    render(
      <Scrubber value={25} bufferValue={35} max={100} onChange={onChange} />
    );

    fireEvent.mouseDown(screen.getByTestId("scrubber"), { clientX: 60 });
    expect(onChange).toHaveBeenCalledWith(50);
  });
});

describe("invalid onChange - 0 width", () => {
  // NOTE, this is assuming the default from jsdom for getBoundingClientRect
  // 0,0,0,0 - so 0 width, we should return 0 for percentage

  it("should render 25% for the progressValue, 35% for the bufferValue", async () => {
    const onChange = vi.fn();

    render(
      <Scrubber value={25} bufferValue={35} max={100} onChange={onChange} />
    );

    fireEvent.mouseDown(screen.getByTestId("scrubber"), { clientX: 60 });
    expect(onChange).toHaveBeenCalledWith(0);
  });
});
