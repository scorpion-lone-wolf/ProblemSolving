function largestNumber(nums: number[]): string {
    const n = nums.length

    nums.sort((a, b) => {
        if ((String(a) + String(b)) > (String(b) + String(a)))
            return -1
        return 1
    })

    const value = nums.reduce((acc, ele) => {
        return acc += String(ele)
    }, "")
    return value[0] == "0" ? "0" : value
};