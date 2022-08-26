import { render, screen } from "@testing-library/react";
import { Default } from "./Drawer.stories";
import userEvent from "@testing-library/user-event";

it("should show a drawer that is hidden first then open after after clicking the button", async () => {
  render(<Default>Hello World</Default>);

  const drawer = screen.getByText(/Hello World/);
  //hidden
  expect(drawer.getAttribute("aria-hidden")).toMatchInlineSnapshot('"true"');

  const drawerButton = screen.getByText(/Toggle Drawer State/);
  await userEvent.click(drawerButton);

  //open
  expect(drawer.getAttribute("aria-hidden")).toMatchInlineSnapshot('"false"');
});
