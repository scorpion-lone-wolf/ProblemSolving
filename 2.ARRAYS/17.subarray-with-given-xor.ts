// * https://www.interviewbit.com/problems/subarray-with-given-xor/
function solve(nums: number[], k: number) {
  let n = nums.length;
  const map = { 0: 1 };
  let xor = 0;
  let maxCount = 0;
  for (let i = 0; i < n; ++i) {
    xor ^= nums[i];

    if (map[xor ^ k] !== undefined) {
      maxCount += map[xor ^ k];
    }
    if (map[xor] == undefined) map[xor] = 0;
    map[xor]++;
  }
  return maxCount;
}
