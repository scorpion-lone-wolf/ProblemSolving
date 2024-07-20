function checkSubarraySum(nums: number[], k: number): boolean {

    const n = nums.length
    const hashMap = new Map()
    hashMap.set(0, -1)
    let sum = 0
    for (let i = 0; i < n; ++i) {
        sum += nums[i]
        if (hashMap.has(sum % k)) {
            if (i - hashMap.get(sum % k) >= 2) return true
        } else {
            hashMap.set(sum % k, i)
        }

    }
    return false
};