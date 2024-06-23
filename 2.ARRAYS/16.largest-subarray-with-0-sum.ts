// * https://www.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1
class Solution {
  maxLen(arr: number[], n: number) {
    //code here
    let largestSubarrayLength = 0;

    let map = { 0: -1 };
    let sum = 0;

    for (let i = 0; i < n; ++i) {
      sum += arr[i];

      if (map[sum] !== undefined) {
        const length = i - map[sum];
        largestSubarrayLength = Math.max(largestSubarrayLength, length);
      } else {
        map[sum] = i;
      }
    }

    return largestSubarrayLength;
  }
}
