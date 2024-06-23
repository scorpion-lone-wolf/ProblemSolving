// * https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1
class Solution {
  // Function to count inversions in the array.
  inversionCount(arr: number[], n: number) {
    // your code here
    return this.mergeSort(arr, 0, n - 1);
  }

  mergeSort(arr: number[], start: number, end: number) {
    let count = 0;
    if (start >= end) return count;

    const mid = Math.floor((start + end) / 2);

    count += this.mergeSort(arr, start, mid);
    count += this.mergeSort(arr, mid + 1, end);

    count += this.merge(arr, start, mid, end);
    return count;
  }

  merge(arr: number[], start: number, mid: number, end: number) {
    let s1 = start;
    let e1 = mid;
    let s2 = mid + 1;
    let e2 = end;
    let count = 0;
    const temp: number[] = [];
    while (s1 <= e1 && s2 <= e2) {
      if (arr[s1] > arr[s2]) {
        count += e1 - s1 + 1;
        temp.push(arr[s2]);
        s2++;
      } else {
        temp.push(arr[s1]);
        s1++;
      }
    }

    while (s1 <= e1) temp.push(arr[s1++]);
    while (s2 <= e2) temp.push(arr[s2++]);

    let j = 0;

    for (let i = start; i <= end; ++i) {
      arr[i] = temp[j++];
    }
    return count;
  }
}
