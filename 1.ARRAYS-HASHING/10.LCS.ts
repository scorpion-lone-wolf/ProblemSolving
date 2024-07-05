function longestConsecutive(nums: number[]): number {

    let longestLength = 0;
    const n = nums.length;

    const lookup = new Map();

    for (let ele of nums) {
        lookup.set(ele, 1);
    }

    for (let ele of nums) {
        if (lookup.get(ele - 1)) continue;
        let value = ele;
        let count = 0;
        while (lookup.get(value)) {
            count++;
            value++;
        }
        longestLength = Math.max(longestLength, count);
    }
    return longestLength;
};