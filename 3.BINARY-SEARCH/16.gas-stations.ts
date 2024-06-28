// Minimize the maximum distance between gas stations

function minimiseMaxDistance(arr: number[], k: number) {
  const n = arr.length;
  let low = 0;
  let high = 0;

  // Find the maximum distance:
  for (let i = 0; i < n - 1; i++) {
    high = Math.max(high, arr[i + 1] - arr[i]);
  }

  // Apply Binary search:
  const diff = 1e-6;
  let ans = 0;
  while (high - low > diff) {
    const mid = (low + high) / 2.0;
    const cnt = numberOfGasStationsRequired(mid, arr);
    if (cnt > k) {
      low = mid;
    } else {
      ans = mid;
      high = mid;
    }
  }
  return ans;
}

function numberOfGasStationsRequired(dist: number, arr: number[]): number {
  const n = arr.length;
  let cnt = 0;
  for (let i = 1; i < n; i++) {
    const numberInBetween = Math.floor((arr[i] - arr[i - 1]) / dist);
    if (arr[i] - arr[i - 1] === dist * numberInBetween) {
      // this means it is perfectly divisible one [1,2] if dist = 0.5 we should be able to place 1 stations but 1/0.5 = 2 . Therefore we subtract by 1;
      cnt += numberInBetween - 1;
    } else {
      cnt += numberInBetween;
    }
  }
  return cnt;
}
