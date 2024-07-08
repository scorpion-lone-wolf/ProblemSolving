function findDisappearedNumbers(nums: number[]): number[] {
    const n = nums.length;
    for (let i = 0; i < n; ++i) {
        let index = Math.abs(nums[i]) - 1;
        nums[index] = -1 * Math.abs(nums[index]);
    }

    const output: number[] = [];
    for (let i = 0; i < n; ++i) {
        if (nums[i] > 0) {
            output.push(i + 1)
        }
    }
    return output;
};