function minSwaps(s: string): number {
    const stack = [];
    let closingBackets = 0;
    let maxClosingBackets = 0;

    for (let i = 0; i < s.length; ++i) {
        if (s[i] == "]") closingBackets++;
        else closingBackets--;
        maxClosingBackets = Math.max(maxClosingBackets, closingBackets);
    }
    return Math.ceil(maxClosingBackets / 2);
};