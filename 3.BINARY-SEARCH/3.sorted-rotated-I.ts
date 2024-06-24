// * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
function search(nums: number[], target: number): number {
  const n = nums.length;
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] >= nums[start]) {
      // * I am on left portion
      // *current position value is greater than and equal to the start example [3,1] ; here start and mid are same positions
      if (target >= nums[start] && target < nums[mid]) end = mid - 1;
      else start = mid + 1;
    } else {
      // *I am on right portion
      if (target > nums[mid] && target <= nums[end]) start = mid + 1;
      else end = mid - 1;
    }
  }
  return -1;
}
