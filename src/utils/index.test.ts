import { clamp, round } from ".";

describe("clamp", () => {
  it("should return num given num is in the range", () => {
    expect(clamp(3, 2, 5)).toEqual(3);
  });

  it("should return lowest number since its outside the lower range", () => {
    expect(clamp(0, 2, 5)).toEqual(2);
  });

  it("should return highest number since its outside the higher range", () => {
    expect(clamp(7, 2, 5)).toEqual(5);
  });
});

describe("round", () => {
  it("should go up (default)", () => {
    expect(round(3.56234236)).toEqual(3.5623424);
  });

  it("should stay", () => {
    expect(round(3.56234233)).toEqual(3.5623423);
  });

  it("should go up given round after 1 digit", () => {
    expect(round(3.56234233, 1)).toEqual(3.6);
  });

  it("should go up given round after 0 digit", () => {
    expect(round(3.56234233, 0)).toEqual(4);
  });
});
