// * https://leetcode.com/problems/single-element-in-a-sorted-array/description/

function singleNonDuplicate(nums: number[]): number {
  const n = nums.length;

  let start = 0;
  let end = n - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] != nums[mid - 1] && nums[mid] != nums[mid + 1])
      return nums[mid];
    else {
      if (nums[mid] == nums[mid - 1]) {
        if ((end - mid) % 2 == 0) end = mid - 2;
        else start = mid + 1;
      } else {
        if ((end - mid) % 2 != 0) end = mid - 1;
        else start = mid + 2;
      }
    }
  }
  return nums[start];
}
