function productExceptSelf(nums: number[]): number[] {
    let zeroCount = 0;
    const n = nums.length;

    let product = 1;

    for (let i = 0; i < n; ++i) {
        if (nums[i] != 0) product *= nums[i];
        else zeroCount++;
    }

    for (let i = 0; i < n; ++i) {
        if (zeroCount === 0) {
            // This means there are no zero values in an array
            nums[i] = product / nums[i];
        } else if (zeroCount === 1) {
            // There is single element in nums whose value is zero
            if (nums[i] == 0) nums[i] = product;
            else nums[i] = 0;
        } else {
            // There are more then 1 zero element in an array , so every one product except self will be zero.
            nums[i] = 0;
        }
    }
    return nums;
};