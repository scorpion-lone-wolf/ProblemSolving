// * https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1

function findFloor(arr: number[], n: number, x: number) {
  //your code here
  let start = 0;
  let end = n - 1;

  if (x < arr[0]) return -1;
  // if(x>arr[n-1])return n-1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] == x) return mid;
    else if (arr[mid] > x) end = mid - 1;
    else start = mid + 1;
  }
  return end;
}
