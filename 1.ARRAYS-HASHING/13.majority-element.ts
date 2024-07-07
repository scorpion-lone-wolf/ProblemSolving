function majorityElement(nums: number[]): number {
    let ele = nums[0];
    let count = 1;
    const n = nums.length;
    for (let i = 1; i < n; ++i) {

        if (nums[i] == ele) count++;
        else {
            count--;
            if (count == 0) {
                ele = nums[i];
                count++;
            }
        }
    }
    return ele;
};