import { twoNumberSum } from "../solutions/twoNumSum/twoNumSum";

describe("twoNumberSum()", () => {
  test("Test Case #1", () => {
    const resultArr: number[] = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
    expect(resultArr.length).toBe(2);
    expect(resultArr).toEqual([11, -1]);
  });
});
