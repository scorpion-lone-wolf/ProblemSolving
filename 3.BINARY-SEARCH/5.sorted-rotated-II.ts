//  * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/

function search(nums: number[], target: number): boolean {
  const n = nums.length;
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] == target) return true;

    if (nums[start] == nums[mid] && nums[mid] == nums[end]) {
      start++;
      end--;
      continue;
    }

    if (nums[mid] >= nums[start]) {
      // left portion
      if (target >= nums[start] && target < nums[mid]) end = mid - 1;
      else start = mid + 1;
    } else {
      // right portion
      if (target > nums[mid] && target <= nums[end]) start = mid + 1;
      else end = mid - 1;
    }
  }
  return false;
}
