import { isValidSubsequence } from "../solutions/validateSubseq/validateSubsequence";

describe.each([isValidSubsequence])(
  "test isValidSubsequence for %s",
  (func) => {
    test("valid subsequence", () => {
      const result: boolean = func(
        [5, 1, 22, 25, 6, -1, 8, 10],
        [1, 6, -1, 10]
      );
      expect(result).toBe(true);
    });

    test("invalid subsequence", () => {
      const result: boolean = func(
        [5, 1, 22, 25, 6, -1, 8, 10],
        [1, 5, -1, 10]
      );
      expect(result).toBe(false);
    });

    test("invalid subsequence", () => {
      const result: boolean = func(
        [5, 1, 22, 25, 6, -1, 8, 10],
        [1, 6, -1, 10, 11]
      );
      expect(result).toBe(false);
    });
  }
);
