// * https://www.geeksforgeeks.org/problems/quick-sort/1
class Solution {
  partition(arr: number[], low: number, high: number) {
    let pivot = arr[low];

    let start = low + 1;
    let end = high;

    while (start <= high) {
      while (start <= high && arr[start] < pivot) start++;
      while (high >= start && arr[high] >= pivot) high--;
      if (start <= high) {
        let temp = arr[start];
        arr[start] = arr[high];
        arr[high] = temp;
        start++;
        high--;
      }
    }
    arr[low] = arr[high];
    arr[high] = pivot;
    return high;
  }

  quickSort(arr: number[], low: number, high: number) {
    this.helper(arr, low, high);
    return arr;
  }

  helper(arr: number[], low: number, high: number) {
    if (low >= high) return;
    let index = this.partition(arr, low, high);
    this.helper(arr, low, index - 1);
    this.helper(arr, index + 1, high);
    return;
  }
}
