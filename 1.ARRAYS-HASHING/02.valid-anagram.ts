function isAnagram(s: string, t: string): boolean {
  const n1 = s.length;
  const n2 = t.length;

  if (n1 !== n2) return false;

  const lookup = new Array(26).fill(0);

  for (let i = 0; i < n1; ++i) {
    lookup[s[i].charCodeAt(0) - 97]++;
    lookup[t[i].charCodeAt(0) - 97]--;
  }

  for (let i = 0; i < 26; ++i) {
    if (lookup[i] !== 0) return false;
  }
  return true;
}
