// *https://www.geeksforgeeks.org/problems/max-sum-in-sub-arrays0824/0

class Solution {
  pairWithMaxSum(arr: number[], N: number) {
    let i = 0;
    let j = 1;
    let maxSum = 0;
    let sum = 0;
    while (j < N) {
      sum = arr[i] + arr[j];
      maxSum = Math.max(maxSum, sum);
      j++;
      i++;
    }
    return maxSum;
  }
}
