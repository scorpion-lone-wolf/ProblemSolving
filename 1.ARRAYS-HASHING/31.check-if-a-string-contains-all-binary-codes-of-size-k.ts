function hasAllCodes(s: string, k: number): boolean {
    // adding all the substring of length k to hashmap

    const set = new Set()

    const n = s.length
    const size = (2 ** k)
    if (k > n) return false

    for (let i = 0; i <= n - k; ++i) {
        set.add(parseInt(s.substring(i, i + k), 2))
    }

    return set.size == size ? true : false

};