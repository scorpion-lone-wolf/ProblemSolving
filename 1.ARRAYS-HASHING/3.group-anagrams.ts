function groupAnagrams(strs: string[]): string[][] {
  // handle base case
  // strs has single element
  const n = strs.length;
  if (n == 1) return [strs];

  const map = new Map();

  for (let i = 0; i < n; ++i) {
    const sortedStr = strs[i].split('').sort().join('');
    if (map.get(sortedStr)) {
      map.get(sortedStr).push(strs[i]);
    } else {
      map.set(sortedStr, [strs[i]]);
    }
  }

  return [...map.values()];
}
