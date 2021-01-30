import { twoNumberSum } from "../solutions/twoNumSum/twoNumSum";
import { twoNumberSumBinarySearch } from "../solutions/twoNumSum/twoNumSumBinarySearch";

describe("twoNumberSum()", () => {
  test.each([twoNumberSum, twoNumberSumBinarySearch])(
    "positive test for %s",
    (func) => {
      const resultArr: number[] = func([3, 5, -4, 8, 11, 1, -1, 6], 10);
      expect(resultArr.length).toBe(2);
      expect(resultArr.includes(11)).toBe(true);
      expect(resultArr.includes(-1)).toBe(true);
    }
  );
});
