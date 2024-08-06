function firstMissingPositiveSolution1(nums: number[]): number {
    const n = nums.length

    let ans = 1
    const set = new Set()
    for (let ele of nums) {
        set.add(ele)
    }
    let i = 1
    for (i; i < n + 1; ++i) {
        if (!set.has(i)) return i
    }
    return i
}

function firstMissingPositiveSolution2(nums: number[]): number {

    const n = nums.length

    //  *make all the -ve values to zero
    // ? we did this to handle values that is negative
    for (let i = 0; i < n; ++i) {
        if (nums[i] < 0) nums[i] = 0
    }


    for (let i = 0; i < n; ++i) {
        const val = Math.abs(nums[i])
        // ? we only care for the values which will be indexed in an array
        if (val >= 1 && val <= n) {
            if (nums[val - 1] > 0)
                nums[val - 1] *= -1
            else if (nums[val - 1] == 0)
                nums[val - 1] = -1 * (n + 1)
        }
    }
    let i = 1
    for (i; i <= n; ++i) {
        if (nums[i - 1] >= 0) return i
    }
    return n + 1
};