import { render, screen } from "@testing-library/react";
import Switch from "./Switch";

it("should render a switch without any issues", () => {
  render(<Switch />);
  screen.debug();
});
