function recursiveBubbleSort(arr: number[], n: number) {
  if (n == 1) return;

  for (let i = 1; i < n; i++) {
    if (arr[i - 1] > arr[i]) {
      let temp = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i] = temp;
    }
  }
  return recursiveBubbleSort(arr, n - 1);
}
