// https://leetcode.com/problems/move-zeroes

function moveZeroes(nums: number[]): void {
  const n = nums.length;
  let i = 0;
  let j = i;

  while (j < n) {
    if (nums[j] != 0) {
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      i++;
    }
    j++;
  }
}

/**
 * Note:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Now the optimal approach to solve the problem is using "TWO POINTER ARROACH".
 * i and j  are the two pointers which are pointing to the start of an array.
 * Now let's assume that j has encounter a non zero value.
 * What should we do then? Well we can swap i&j 's values and increment both.
 * Outcome = non-zero value is pushed forward. We also have to make sure that i should not be increment if j encounters a value which is 0(zero).which will make sure that i while swaping will point to 0 or both point to same index.
 */
