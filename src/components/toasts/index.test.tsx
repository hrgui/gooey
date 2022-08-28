import {
  act,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Default as TabDemo } from "./index.stories";
import userEvent from "@testing-library/user-event";

afterEach(() => {
  vi.useRealTimers();
});

it("should be able to toast Hello World and auto hides after 3 seconds", async () => {
  vi.useFakeTimers();
  render(<TabDemo />);

  const toastButton = await screen.findByText(/Add Toast/);

  const user = userEvent.setup({ delay: null });
  await user.click(toastButton);

  expect(screen.getByText(/Hello World/)).toBeInTheDocument();

  act(() => {
    vi.runAllTimers();
  });

  expect(screen.queryByText(/Hello World/)).not.toBeInTheDocument();
});

it("should be able to toast Hello World and when close it removes Hello World", async () => {
  vi.useFakeTimers();
  render(<TabDemo />);

  const toastButton = await screen.findByText(/Add Toast/);

  const user = userEvent.setup({ delay: null });
  await user.click(toastButton);

  expect(screen.getByText(/Hello World/)).toBeInTheDocument();

  await user.click(screen.getByText(/Close/));

  expect(screen.queryByText(/Hello World/)).not.toBeInTheDocument();
});
