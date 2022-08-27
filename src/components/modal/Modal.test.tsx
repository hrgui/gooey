import { render, screen } from "@testing-library/react";
import { Modal } from "./Modal";

it("should display a Modal with Hello World if it is open", () => {
  render(<Modal isOpen>Hello World</Modal>);
  expect(screen.getByText(/Hello World/)).toBeInTheDocument();
});
