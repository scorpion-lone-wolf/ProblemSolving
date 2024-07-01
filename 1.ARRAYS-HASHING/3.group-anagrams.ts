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

// * ----------------------------------------------------------------------------------------------

function groupAnagramsOptimalSolution(strs: string[]): string[][] {
  // handle base case
  // strs has single element
  const n = strs.length;
  if (n == 1) return [strs];

  const map = new Map();

  for (let i = 0; i < n; ++i) {
    const array = new Array(26).fill(0);
    for (let j = 0; j < strs[i].length; ++j) {
      array[strs[i].charCodeAt(j) - 97]++;
    }

    let key = '';
    for (let ele of array) {
      // we added # becase [1,0,10] will be same as [10,1,0] while concatinating and making key
      key += '#' + ele;
    }

    if (map.get(key)) {
      map.get(key).push(strs[i]);
    } else {
      map.set(key, [strs[i]]);
    }
  }

  return [...map.values()];
}
