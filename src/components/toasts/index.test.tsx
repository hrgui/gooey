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

it("should be able to give me a new toast with my custom component", async () => {
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
