// * https://leetcode.com/problems/majority-element-ii/description/

function majorityElement(nums: number[]): number[] {
  const n = nums.length;

  if (n === 1) return nums;

  let firstMajorityElement = 0;
  let firstMajorityElementCount = 0;
  let secondMajorityElement = 1;
  let secondMajorityElementCount = 0;
  const output: number[] = [];
  for (let i = 0; i < n; ++i) {
    if (
      secondMajorityElement !== nums[i] &&
      (firstMajorityElementCount === 0 || nums[i] == firstMajorityElement)
    ) {
      firstMajorityElement = nums[i];
      firstMajorityElementCount++;
    } else if (
      nums[i] !== firstMajorityElement &&
      (secondMajorityElementCount === 0 || nums[i] == secondMajorityElement)
    ) {
      secondMajorityElement = nums[i];
      secondMajorityElementCount++;
    } else {
      firstMajorityElementCount--;
      secondMajorityElementCount--;
    }
  }

  // verify the candiate whether they are really a majority element or not
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < n; ++i) {
    if (nums[i] == firstMajorityElement) count1++;
    if (nums[i] == secondMajorityElement) count2++;
  }
  if (count1 > Math.floor(n / 3)) output.push(firstMajorityElement);
  if (count2 > Math.floor(n / 3)) output.push(secondMajorityElement);

  return output;
}
