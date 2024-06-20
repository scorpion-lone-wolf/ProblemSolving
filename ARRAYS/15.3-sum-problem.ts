// * https://leetcode.com/problems/3sum/description/

function threeSum(nums: number[]): number[][] {
  const n = nums.length;
  // This sorts in an ascending order
  nums.sort((a, b) => {
    return a - b;
  });

  const output: number[][] = [];
  let start = 0;

  while (start <= n - 2) {
    let i = start + 1;
    let end = n - 1;

    while (i < end) {
      if (nums[start] + nums[i] + nums[end] === 0) {
        output.push([nums[start], nums[i], nums[end]]);
        i++;
        end--;
        while (i < end && nums[i] === nums[i - 1]) i++;
        while (end > i && nums[end] === nums[end + 1]) end--;
      } else if (nums[start] + nums[i] + nums[end] > 0) end--;
      else i++;
    }

    start++;

    while (start < n - 2 && nums[start] === nums[start - 1]) start++;
  }
  return output;
}
