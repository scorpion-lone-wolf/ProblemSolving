/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let zero = 0;
  let one = 0;
  let two = nums.length - 1;

  while (one <= two) {
    if (nums[one] == 0) {
      swap(nums, zero, one);
      zero++;
      one++;
    } else if (nums[one] == 1) {
      one++;
    } else {
      swap(nums, one, two);
      two--;
    }
  }
}

function swap(nums: number[], i: number, j: number) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
