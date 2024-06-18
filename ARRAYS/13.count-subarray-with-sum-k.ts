// * https://leetcode.com/problems/subarray-sum-equals-k/description/

function subarraySum(nums: number[], k: number): number {
  // this map represent the count of each sum we have seen so far
  const map = { 0: 1 };

  const n = nums.length;
  let count = 0;
  let sum = 0;

  for (let i = 0; i < n; ++i) {
    sum += nums[i];

    if (map[sum - k] !== undefined) {
      count += map[sum - k];
    }
    if (map[sum] == undefined) map[sum] = 0;
    map[sum]++;
  }

  return count;
}
