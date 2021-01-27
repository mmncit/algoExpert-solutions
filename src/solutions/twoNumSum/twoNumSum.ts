export function twoNumberSum(array: number[], targetSum: number): number[] {
  let dict: { [key: number]: number } = {};
  for (let i = 0; i < array.length; i++) {
    if (dict.hasOwnProperty(array[i])) {
      return [dict[array[i]], array[i]];
    } else {
      dict[targetSum - array[i]] = array[i];
    }
  }
  return [];
}
