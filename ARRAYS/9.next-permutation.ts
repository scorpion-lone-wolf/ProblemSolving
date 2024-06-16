// https://leetcode.com/problems/next-permutation/description/
function nextPermutation(nums: number[]): void {
  const n = nums.length;
  // step 1: find the point where nums[i] > nums[i-1]
  // if there are no point it means the nums array are in descending order
  // so we can return the smallest value i.e the reverse of the current nums value
  let point = -1;
  for (let i = n - 2; i >= 0; --i) {
    if (nums[i] < nums[i + 1]) {
      point = i;
      break;
    }
  }

  if (point === -1) {
    reverse(nums, 0, n - 1);
    return;
  }

  // step 2: replace that point value with just immediate greater value from right to left

  for (let i = n - 1; i >= 0; --i) {
    if (nums[i] > nums[point]) {
      let temp = nums[i];
      nums[i] = nums[point];
      nums[point] = temp;
      break;
    }
  }

  // step 3: reverse from point +1 index to end
  reverse(nums, point + 1, n - 1);
  return;
}

function reverse(nums: number[], start: number, end: number) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

// Why it works?
/**
 * Now let say you have number 87654321. What will be the next bigger number?
 * You answer would be probably , none as looking from index i to the right ,their in no one bigger then that number.
 * So exactly we find the next bigger number with only given set of values in an array.
 */
