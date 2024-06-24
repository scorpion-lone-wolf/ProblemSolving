// * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
function searchRange(nums: number[], target: number): number[] {
  // we have to find the first occurrence and last occurrence of an target in nums[]
  const n = nums.length;
  let start = 0;
  let end = n - 1;
  const output: number[] = [];
  // step 1: Using Binary serach we will find the first occurrence of an target

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] == target) {
      // if nums[mid] is the target and mid is 0 means there is no one in front of that mid so that is our first occurrrence
      // Also if i m not at 0 index but my previous value is not same as me then i m still the first occurrence
      if (mid === 0 || nums[mid - 1] !== nums[mid]) {
        output.push(mid);
        break;
      } else end = mid - 1;
    } else if (nums[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  if (output.length == 0) return [-1, -1];
  start = 0;
  end = n - 1;
  // step 2: Using Binary serach we will find the last occurrence of an target
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    // if nums[mid] is the target and mid is n-1(last index) means there is no one after of that mid so that is our last occurrrence.
    // Also if I m not at n-1 index but my after value is not same as me then I m still the last occurrence
    if (nums[mid] == target) {
      if (mid === n - 1 || nums[mid + 1] !== nums[mid]) {
        output.push(mid);
        break;
      } else start = mid + 1;
    } else if (nums[mid] > target) end = mid - 1;
    else start = mid + 1;
  }

  return output;
}
