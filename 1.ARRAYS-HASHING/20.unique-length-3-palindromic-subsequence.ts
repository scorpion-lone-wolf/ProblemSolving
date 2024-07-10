function countPalindromicSubsequence(s: string): number {

    const n = s.length;
    const hashSet = new Set();

    const left = new Array(26).fill(0);
    const right = new Array(26).fill(0);

    // count each occurrence of a character
    for (let ele of s) {
        right[ele.charCodeAt(0) - 97]++;
    }

    // assuming each index as center identifying which all elements are present in left and right both
    for (let i = 0; i < n; ++i) {
        right[s[i].charCodeAt(0) - 97]--;
        // check left and right similarity
        for (let j = 0; j < 26; ++j) {
            if (left[j] != 0 && right[j] != 0) {
                // here j indicates the character in number (charCode-97)
                hashSet.add(`${String.fromCharCode(j)}-${s[i]}-${String.fromCharCode(j)}`);
            }
        }
        // After checking add the current elemnt to left side
        left[s[i].charCodeAt(0) - 97]++;
    }

    return [...hashSet].length;
};