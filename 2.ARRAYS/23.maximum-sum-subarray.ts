//  *https://leetcode.com/problems/maximum-subarray/description/

function maxSubArray(nums: number[]): number {
  let largestSum = nums[0];
  let sum = nums[0];
  const n = nums.length;

  for (let i = 1; i < n; ++i) {
    if (sum <= 0) sum = 0;
    sum += nums[i];
    largestSum = Math.max(largestSum, sum);
  }
  return largestSum;
}
