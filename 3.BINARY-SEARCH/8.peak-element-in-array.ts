// * https://leetcode.com/problems/find-peak-element/description/
function findPeakElement(nums: number[]): number {
  const n = nums.length;
  let start = 0;
  let end = n - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (mid == 0 && nums[mid] > nums[mid + 1]) return mid;
    else if (mid == n - 1 && nums[mid] > nums[mid - 1]) return mid;
    else {
      if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) return mid;
      else if (nums[mid] < nums[mid + 1]) start = mid + 1;
      else end = mid - 1;
    }
  }
  return start;
}
