// https://leetcode.com/problems/missing-number/description/
function missingNumber(nums: number[]): number {
  const n = nums.length;
  let missNumber = 0;

  for (let i = 0; i < n; ++i) {
    missNumber ^= i ^ nums[i];
  }

  return missNumber ^ n;
}
/**
 * We can solve this problem in many different ways, but there i will using bit-minipulation becuase why not? It looks cool
 * we know that 1 xor 1 = 0 and 2 xor 2 = 0  and in general x xor x = 0 . so we use that property of xor to find the missing number.
 */
