// solution using hashing
// time = O(n) sapce = O(n)
function twoSum(nums: number[], target: number): number[] {
  const n = nums.length;

  const map = new Map();

  for (let i = 0; i < n; ++i) {
    if (map.get(target - nums[i]) == undefined) {
      map.set(nums[i], i);
    } else {
      return [map.get(target - nums[i]), i];
    }
  }
  // dummy return
  return [];
}
