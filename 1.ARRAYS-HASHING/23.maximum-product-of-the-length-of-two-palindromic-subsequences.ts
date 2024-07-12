function maxProduct(s: string): number {
  const n = s.length;
  const hashMap = {};

  //  * We are looping through all possible bit mask
  for (let i = 1; i < Math.pow(2, n); ++i) {
    const bitMask = i;
    // create a string from s whose bitMask are set
    // for example => "leetcodecom" => "00000000101" represent "cm" by 5(as 1 and 4th place are set)
    let createdString = "";
    let shift = 0;

    for (let j = 0; j < n; ++j) {
      if (bitMask & (1 << j)) createdString += s[n - j - 1];
    }
    // put the bitMask in hashMap only if created string is palindrone
    if (isPalindrome(createdString)) {
      hashMap[bitMask] = createdString.length;
    }
  }

  let maxProduct = 1;
  // Finding the maximum product of palindromic string which are also disjoint
  for (let key1 of Object.keys(hashMap)) {
    for (let key2 of Object.keys(hashMap)) {
      if (key1 == key2) continue;
      // check if bit mask of two are disjoint or not. If dsjoint then the & should be zero

      if (!(+key1 & +key2))
        maxProduct = Math.max(maxProduct, hashMap[key1] * hashMap[key2]);
    }
  }
  return maxProduct;
}

function isPalindrome(str: string): boolean {
  let start = 0,
    end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }
  return true;
}
