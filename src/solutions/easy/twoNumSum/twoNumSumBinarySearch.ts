export function twoNumberSumBinarySearch(
  array: number[],
  targetSum: number
): number[] {
  array.sort((a, b) => {
    return a - b;
  });
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const sum = array[left] + array[right];

    if (targetSum < sum) {
      right--;
    } else if (targetSum > sum) {
      left++;
    } else {
      return [array[left], array[right]];
    }
  }

  return [];
}
