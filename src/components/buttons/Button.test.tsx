import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

it("should work like a button (onClick is accepted)", async () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  const button = screen.getByText(/Click me/);
  await userEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});
