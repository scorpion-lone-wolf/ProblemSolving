function recursiveInsertionSort(arr: number[], i: number, n: number) {
  //   base case
  if (i == n) return;

  for (let j = i; j >= 0; j--) {
    if (arr[j] < arr[j - 1]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    } else break;
  }
  return recursiveInsertionSort(arr, i + 1, n);
}
