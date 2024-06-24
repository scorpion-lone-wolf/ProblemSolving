// * https://www.geeksforgeeks.org/problems/rotation4723/1

class Solution {
  findKRotation(arr: number[], n: number) {
    // code here

    let start = 0;
    let end = n - 1;

    while (start <= end) {
      if (start == end) return end;
      const mid = Math.floor((start + end) / 2);

      if (arr[mid] > arr[end]) start = mid + 1;
      else end = mid;
    }
    return -1;
  }
}
