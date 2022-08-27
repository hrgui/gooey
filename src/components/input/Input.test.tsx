import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

test("should work like a text input, accepts text", async () => {
  render(<Input placeholder="Enter text" type="text" />);
  const input = screen.getByPlaceholderText(/Enter text/) as HTMLInputElement;
  await userEvent.type(input, "Hello World");
  expect(input.value).toMatchInlineSnapshot('"Hello World"');
});
