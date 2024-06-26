// * https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/description/

function smallestDivisor(nums: number[], threshold: number): number {
  let start = 1;
  let end = Math.max(...nums);
  const n = nums.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    const isTrue = findDivior(nums, mid, threshold);
    if (isTrue) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

function findDivior(nums: number[], mid: number, th: number) {
  let sum = 0;
  for (let i = 0; i < nums.length; ++i) {
    sum += Math.ceil(nums[i] / mid);
  }
  return sum <= th ? true : false;
}
