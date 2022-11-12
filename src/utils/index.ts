export const clamp = (num: number, a: number, b: number) =>
  Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

export const round = (val: number, dp: number = 7) =>
  parseFloat(val.toFixed(dp));
