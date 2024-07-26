function findRepeatedDnaSequences(s: string): string[] {

    const n = s.length
    if (n < 10) return []
    let start = 0
    let end = 10
    const hashMap = new Map<string, number>()

    const output: string[] = []
    while (end <= n) {
        const str = s.substring(start, end)
        if (hashMap.has(str)) {
            const value = hashMap.get(str) ?? 1
            hashMap.set(str, value + 1)
            if (hashMap.get(str) == 2) {
                output.push(str)
            }
        } else {
            hashMap.set(str, 1)
        }
        start++
        end++
    }

    return output
};