//

function findMin(nums: number[]): number {
  const n = nums.length;
  if (nums[0] <= nums[n - 1]) return nums[0];

  let start = 0;
  let end = n - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (start == end) break;
    if (nums[mid] > nums[end]) start = mid + 1;
    else end = mid;
  }
  return nums[start];
}
