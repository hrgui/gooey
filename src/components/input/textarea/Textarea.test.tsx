import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Textarea from "./Textarea";

test("should work like a textarea input, accepts text", async () => {
  render(<Textarea placeholder="Enter text" />);
  const input = screen.getByPlaceholderText(/Enter text/) as HTMLInputElement;
  await userEvent.type(input, "Hello World");
  expect(input.value).toMatchInlineSnapshot('"Hello World"');
});
