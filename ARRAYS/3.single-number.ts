// https://leetcode.com/problems/single-number/description/
function singleNumber(nums: number[]): number {
  let xor = 0;
  const n = nums.length;

  for (let i = 0; i < n; ++i) {
    xor ^= nums[i];
  }
  return xor;
}

// just using the same xor concept that if we xor every value inside the array , the values which comes twice will cancel each other leaving behind the single element.
