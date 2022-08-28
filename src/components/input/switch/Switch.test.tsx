import { render, screen } from "@testing-library/react";
import Switch from "./Switch";
import userEvent from "@testing-library/user-event";

describe("uncontrolled switch", () => {
  it("should render a switch that is clickable from false to true checked", async () => {
    render(<Switch name="1" />);
    const checkbox = screen.getByTestId(
      "switch-checkbox-1"
    ) as HTMLInputElement;
    await userEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  });
});

describe("controlled switch", () => {
  it("should render a switch that is clickable from false to true checked with onChange called", async () => {
    const onChange = vi.fn();
    render(<Switch name="1" checked={false} onChange={onChange} />);
    const checkbox = screen.getByTestId(
      "switch-checkbox-1"
    ) as HTMLInputElement;
    await userEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
    expect(onChange.mock.calls[0][0].target.checked).toMatchInlineSnapshot(
      "true"
    );
  });

  it("should render a switch that is clickable from true to false unchecked with onChange called", async () => {
    const onChange = vi.fn();
    render(<Switch name="1" checked={true} onChange={onChange} />);
    const checkbox = screen.getByTestId(
      "switch-checkbox-1"
    ) as HTMLInputElement;
    await userEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
    expect(onChange.mock.calls[0][0].target.checked).toMatchInlineSnapshot(
      "false"
    );
  });
});
