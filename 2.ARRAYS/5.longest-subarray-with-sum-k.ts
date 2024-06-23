// * https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1

class Solution {
  lenOfLongSubarr(nums: number[], n: number, k: number) {
    //code here
    // base case when sum till particular index i when we reach to that index  is k
    const map = { 0: -1 };
    let sum = 0;
    let maxLength = 0;
    for (let i = 0; i < n; ++i) {
      sum += nums[i];

      if (map[sum - k] !== undefined) {
        maxLength = Math.max(maxLength, i - map[sum - k]);
      }
      if (map[sum] == undefined) map[sum] = i;
    }
    return maxLength;
  }
}
