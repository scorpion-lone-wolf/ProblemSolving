// *https://leetcode.com/problems/reverse-pairs/description/

function reversePairs(nums: number[]): number {
  return mergeSort(nums, 0, nums.length - 1);
}

function mergeSort(nums: number[], start: number, end: number) {
  let count = 0;
  if (start >= end) return 0;
  const mid = Math.floor((start + end) / 2);
  count += mergeSort(nums, start, mid);
  count += mergeSort(nums, mid + 1, end);
  count += merge(nums, start, mid, end);
  return count;
}

function merge(nums: number[], start: number, mid: number, end: number) {
  let s1 = start;
  let e1 = mid;
  let s2 = mid + 1;
  let e2 = end;
  let count = 0;
  while (s1 <= e1 && s2 <= e2) {
    if (nums[s1] > 2 * nums[s2]) {
      count += e1 - s1 + 1;
      s2++;
    } else {
      s1++;
    }
  }
  s1 = start;
  s2 = mid + 1;
  // merging into new array
  let temp: number[] = [];
  while (s1 <= e1 && s2 <= e2) {
    if (nums[s1] <= nums[s2]) {
      temp.push(nums[s1++]);
    } else {
      temp.push(nums[s2++]);
    }
  }

  while (s1 <= e1) temp.push(nums[s1++]);
  while (s2 <= e2) temp.push(nums[s2++]);

  let j = 0;
  // copyinto new array
  for (let i = start; i <= end; ++i) {
    nums[i] = temp[j++];
  }
  return count;
}
