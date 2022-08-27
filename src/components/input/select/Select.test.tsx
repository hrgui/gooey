import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select from "./Select";

describe("single", () => {
  it("should be able to select option 1", async () => {
    render(
      <Select data-testid="select">
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </Select>
    );

    await userEvent.selectOptions(screen.getByTestId("select"), ["1"]);

    expect(
      (screen.getByTestId("select") as HTMLSelectElement).value
    ).toMatchInlineSnapshot('"1"');
  });
});

describe("multiple", () => {
  it("should be able to select options 1 and 3", async () => {
    render(
      <Select multiple>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </Select>
    );

    await userEvent.selectOptions(screen.getByRole("listbox"), ["1", "3"]);

    expect(
      (screen.getByRole("option", { name: "A" }) as HTMLOptionElement).selected
    ).toBe(true);
    expect(
      (screen.getByRole("option", { name: "B" }) as HTMLOptionElement).selected
    ).toBe(false);
    expect(
      (screen.getByRole("option", { name: "C" }) as HTMLOptionElement).selected
    ).toBe(true);
  });
});
