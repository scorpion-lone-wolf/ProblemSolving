function selectionSort(nums: number[], n: number) {
  //code here
  for (let i = 0; i < n; ++i) {
    let smallestIndex = i;
    for (let j = i + 1; j < n; ++j) {
      if (nums[j] < nums[smallestIndex]) smallestIndex = j;
    }
    if (smallestIndex != i) {
      nums[i] = nums[i] + nums[smallestIndex];
      nums[smallestIndex] = nums[i] - nums[smallestIndex];
      nums[i] = nums[i] - nums[smallestIndex];
    }
  }
  return nums;
}
