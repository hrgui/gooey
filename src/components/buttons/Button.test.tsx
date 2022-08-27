import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { Group } from "./Button.stories";
import userEvent from "@testing-library/user-event";

it("should work like a button (onClick is accepted)", async () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  const button = screen.getByText(/Click me/);
  await userEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});

describe("group", () => {
  it("should work like a button group (onClick is accepted)", async () => {
    const handleOptionOneClick = vi.fn();
    const handleOptionThreeClick = vi.fn();
    render(
      <Group
        onOptionOneClick={handleOptionOneClick}
        onOptionThreeClick={handleOptionThreeClick}
      />
    );
    const button = screen.getByText(/Option 1/);
    const button3 = screen.getByText(/Option 3/);
    await userEvent.click(button);
    await userEvent.click(button3);
    expect(handleOptionOneClick).toHaveBeenCalled();
    expect(handleOptionThreeClick).toHaveBeenCalled();
  });
});
