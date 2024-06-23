// * https://leetcode.com/problems/longest-consecutive-sequence/

function longestConsecutive(nums: number[]): number {
  const n = nums.length;
  let count = 1;
  let maxCount = 1;
  if (n == 0) return n;

  const map = {};
  // 0(n)
  for (let i = 0; i < n; ++i) {
    map[nums[i]] = 1;
  }
  // 0(2n)
  for (let i = 0; i < n; ++i) {
    let ele = nums[i];
    if (map[ele - 1] !== 1) {
      // current ele - 1 value is not present in an map , that means that value will be the starting value of the consecutive values
      // now we have to check whether it's set of consecutive value are the longest or not.
      while (map[++ele] === 1) {
        count++;
      }
      maxCount = Math.max(maxCount, count);
      count = 1;
    }
  }
  return maxCount;
}
