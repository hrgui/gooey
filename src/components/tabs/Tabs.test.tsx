import { render, screen } from "@testing-library/react";
import { Default } from "./Tabs.stories";
import userEvent from "@testing-library/user-event";

it("should act like tabs - should have 3 tabs, 0 being active by default", async () => {
  render(<Default />);
  const itemOne = await screen.findByText("Item One");
  expect(itemOne).toHaveClass("active");
  expect(screen.getByText("This is tab 1")).toBeInTheDocument();

  const itemTwo = await screen.findByText("Item Two");
  expect(itemTwo).not.toHaveClass("active");

  const itemThree = await screen.findByText("Item Three");
  expect(itemThree).not.toHaveClass("active");

  await userEvent.click(itemTwo);

  expect(itemTwo).toHaveClass("active");
  expect(screen.getByText("This is tab 2")).toBeInTheDocument();
});
