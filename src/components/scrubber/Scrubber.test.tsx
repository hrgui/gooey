import { render, screen } from "@testing-library/react";
import Scrubber from "./Scrubber";

it("should render without crashing when no values applied", () => {
  render(<Scrubber />);
});

it("should render 25% for the progressValue, 35% for the bufferValue", () => {
  render(<Scrubber value={25} bufferValue={35} max={100} />);
  expect(screen.getByText("25.00000%")).toBeInTheDocument();
  expect(screen.getByText("35.00000%")).toBeInTheDocument();
});
