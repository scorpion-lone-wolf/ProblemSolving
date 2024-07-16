function strStr(haystack: string, needle: string): number {
    const lspArray = createLSPArray(needle)
    const n = haystack.length
    let i = 0, j = 0

    while (i < n) {
        if (haystack[i] == needle[j]) {
            i++
            j++
        } else {
            if (j != 0) {
                j = lspArray[j - 1]
            } else {
                i++
            }
        }
        if (j >= needle.length) return (i - needle.length)
    }
    return -1
};
function createLSPArray(needle: string) {
    const n = needle.length
    const lspArray = new Array(n).fill(0)

    let i = 0, j = 1

    while (j < n) {
        if (needle[i] == needle[j]) {
            lspArray[j] = i + 1
            i++
            j++
        } else {
            if (i != 0) {
                i = lspArray[i - 1]
            } else {
                j++
            }
        }
    }
    return lspArray
}