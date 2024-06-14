// given an array of positive integers including zero , return an length of maximum sum subarray which sum is equal to K

// * Note : This might fail in some test cases as i haven't tested it with all possible testcases online. Please correct if you find an bug
function maximumSumOfK(arr: number[], k: number) {
  let sum = 0;
  let maxLength = 0;
  let start = 0,
    end = 0;

  while (end < arr.length) {
    sum += arr[end];

    while (start <= end && sum > k) {
      sum -= arr[start++];
    }

    if (sum === k) {
      maxLength = Math.max(maxLength, end - start + 1);
    }
    end++;
  }
  return maxLength;
}

const inputs = [
  { arr: [1, 2, 3, 4, 5], k: 9, output: 3 },
  { arr: [1, 2, 3, 4, 5], k: 10, output: 4 },
  { arr: [5], k: 5, output: 1 },
  { arr: [2, 2, 2, 2, 2], k: 4, output: 2 },
  { arr: [6, 7, 8, 9], k: 5, output: 0 },
  { arr: [10, 5, 2, 7, 1, 9], k: 15, output: 4 },
];
for (let obj of inputs) {
  const out = maximumSumOfK(obj.arr, obj.k);
  if (out === obj.output) console.log('PASS');
  else console.log('FAIL');
}
